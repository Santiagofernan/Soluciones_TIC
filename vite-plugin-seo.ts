import { loadEnv, type Plugin } from 'vite';
import {
  DEFAULT_SITE_URL,
  absoluteUrl,
  buildStructuredData,
  business,
  findPage,
  ogImage,
  pages,
  siteName,
  type PageKey,
} from './src/data/seo';

const MARKER = '<!--app-seo-->';
const START = '<!-- seo:start -->';
const END = '<!-- seo:end -->';

function escapeAttr(value: string) {
  return value.replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}

function pageKeyFor(pathname: string): PageKey {
  const page = findPage(pathname);
  return (Object.keys(pages) as PageKey[]).find((key) => pages[key] === page) ?? 'home';
}

function renderHead(siteUrl: string, key: PageKey) {
  const page = pages[key];
  const url = absoluteUrl(siteUrl, page.path);
  const image = absoluteUrl(siteUrl, ogImage.path);
  const jsonLd = JSON.stringify(buildStructuredData(siteUrl, key)).replace(/</g, '\\u003c');

  const meta = (attr: 'name' | 'property', name: string, content: string | number) =>
    `<meta ${attr}="${name}" content="${escapeAttr(String(content))}" />`;

  return [
    START,
    `<title>${escapeAttr(page.title)}</title>`,
    meta('name', 'description', page.description),
    meta('name', 'keywords', page.keywords),
    meta('name', 'author', siteName),
    meta('name', 'robots', 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1'),
    `<link rel="canonical" href="${escapeAttr(url)}" />`,
    meta('name', 'geo.region', business.regionCode),
    meta('name', 'geo.placename', business.locality),
    meta('property', 'og:site_name', siteName),
    meta('property', 'og:locale', 'es_CO'),
    meta('property', 'og:type', page.ogType),
    meta('property', 'og:title', page.title),
    meta('property', 'og:description', page.description),
    meta('property', 'og:url', url),
    meta('property', 'og:image', image),
    meta('property', 'og:image:type', 'image/png'),
    meta('property', 'og:image:width', ogImage.width),
    meta('property', 'og:image:height', ogImage.height),
    meta('property', 'og:image:alt', ogImage.alt),
    meta('name', 'twitter:card', 'summary_large_image'),
    meta('name', 'twitter:title', page.title),
    meta('name', 'twitter:description', page.description),
    meta('name', 'twitter:image', image),
    meta('name', 'twitter:image:alt', ogImage.alt),
    `<script type="application/ld+json">${jsonLd}</script>`,
    END,
  ].join('\n    ');
}

function renderSitemap(siteUrl: string) {
  const lastmod = new Date().toISOString().slice(0, 10);
  const entries = [
    { page: pages.home, priority: '1.0', changefreq: 'monthly' },
    { page: pages.profile, priority: '0.8', changefreq: 'monthly' },
  ];
  const urls = entries
    .map(
      ({ page, priority, changefreq }) =>
        `  <url>\n    <loc>${absoluteUrl(siteUrl, page.path)}</loc>\n    <lastmod>${lastmod}</lastmod>\n    <changefreq>${changefreq}</changefreq>\n    <priority>${priority}</priority>\n  </url>`,
    )
    .join('\n');
  return `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`;
}

function renderRobots(siteUrl: string) {
  return `User-agent: *\nAllow: /\n\nSitemap: ${absoluteUrl(siteUrl, '/sitemap.xml')}\n`;
}

export default function seoPlugin(): Plugin {
  let siteUrl = DEFAULT_SITE_URL;
  let usingDefault = true;

  return {
    name: 'alsoft-seo',
    enforce: 'post',

    config(_, { mode }) {
      const configured = loadEnv(mode, process.cwd(), 'VITE_').VITE_SITE_URL?.trim();
      usingDefault = !configured;
      siteUrl = (configured || DEFAULT_SITE_URL).replace(/\/+$/, '');
      return { define: { __SITE_URL__: JSON.stringify(siteUrl) } };
    },

    configResolved(config) {
      if (config.command === 'build' && usingDefault) {
        config.logger.warn(
          `\n[seo] VITE_SITE_URL no está definido; se usa ${DEFAULT_SITE_URL} en canonical, sitemap y Open Graph.\n`,
        );
      }
    },

    transformIndexHtml(html, ctx) {
      return html.replace(MARKER, renderHead(siteUrl, pageKeyFor(ctx.originalUrl ?? ctx.path)));
    },

    configureServer(server) {
      server.middlewares.use((req, res, next) => {
        const path = req.url?.split('?')[0];
        if (path === '/robots.txt' || path === '/sitemap.xml') {
          res.setHeader('Content-Type', path === '/robots.txt' ? 'text/plain; charset=utf-8' : 'application/xml; charset=utf-8');
          res.end(path === '/robots.txt' ? renderRobots(siteUrl) : renderSitemap(siteUrl));
          return;
        }
        next();
      });
    },

    generateBundle(_, bundle) {
      this.emitFile({ type: 'asset', fileName: 'robots.txt', source: renderRobots(siteUrl) });
      this.emitFile({ type: 'asset', fileName: 'sitemap.xml', source: renderSitemap(siteUrl) });

      const index = bundle['index.html'];
      if (index?.type !== 'asset') return;
      const html = String(index.source);
      const start = html.indexOf(START);
      const end = html.indexOf(END);
      if (start === -1 || end === -1) return;

      // Served at /perfil by static hosts with clean URLs, so crawlers get the profile metadata without running JS.
      this.emitFile({
        type: 'asset',
        fileName: 'perfil.html',
        source: html.slice(0, start) + renderHead(siteUrl, 'profile') + html.slice(end + END.length),
      });
    },
  };
}
