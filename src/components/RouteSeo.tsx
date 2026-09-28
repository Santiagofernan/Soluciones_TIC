import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { absoluteUrl, findPage } from '@/data/seo';

function setMeta(selector: string, content: string) {
  document.head.querySelector(selector)?.setAttribute('content', content);
}

export default function RouteSeo() {
  const { pathname } = useLocation();

  useEffect(() => {
    const page = findPage(pathname);
    const url = absoluteUrl(__SITE_URL__, page.path);

    document.title = page.title;
    setMeta('meta[name="description"]', page.description);
    setMeta('meta[name="keywords"]', page.keywords);
    setMeta('meta[property="og:type"]', page.ogType);
    setMeta('meta[property="og:title"]', page.title);
    setMeta('meta[property="og:description"]', page.description);
    setMeta('meta[property="og:url"]', url);
    setMeta('meta[name="twitter:title"]', page.title);
    setMeta('meta[name="twitter:description"]', page.description);
    document.head.querySelector('link[rel="canonical"]')?.setAttribute('href', url);
  }, [pathname]);

  return null;
}
