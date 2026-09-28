# Tec_J — Alsoft-Cloud

Sitio web profesional de **Alsoft-Cloud** para presentar servicios de tecnología, infraestructura y soluciones digitales para empresas.

## Descripción

Tec_J es una landing page moderna, responsive e interactiva orientada a servicios profesionales de tecnología. El sitio presenta la propuesta de valor, los servicios, la metodología de trabajo, proyectos, planes, recursos, el perfil del ingeniero y un formulario de contacto con protección antispam.

## Características

- Diseño moderno con estética tecnológica y paleta verde suavizada.
- Interfaz responsive para computadores, tablets y celulares.
- Logo **Alsoft-Cloud** animado e interactivo: al hacer clic vuelve al inicio desde cualquier parte del sitio.
- Favicon propio con el logo de la marca.
- Mapa interactivo del ecosistema tecnológico.
- Mapa de infraestructura en línea horizontal con información bajo cada nodo.
- Secciones de servicios, metodología, proyectos, planes y recursos.
- Barra de navegación ordenada según las secciones de la página, con resaltado de la sección activa al hacer scroll.
- Menú y footer generados desde una misma lista de navegación (`src/data/navigation.ts`).
- Página independiente de perfil profesional con pestañas (experiencia, formación, certificaciones y habilidades), contadores animados y proyectos destacados.
- Transición de carga animada entre páginas y precargador inicial (sin pantallazo en blanco).
- Enlace al perfil oficial de LinkedIn.
- Formulario de contacto enviado mediante Formspree.
- Protección antispam mediante campo honeypot (sin CAPTCHA).
- Validación de datos del formulario.
- SEO completo: metadatos por página, Open Graph, datos estructurados, sitemap y robots.
- Configuración mediante variables de entorno.

## Tecnologías utilizadas

- React
- TypeScript
- Vite
- React Router
- Tailwind CSS
- Framer Motion
- Lucide React
- Formspree
- ESLint
- PostCSS

## Requisitos

Antes de ejecutar el proyecto, debes tener instalado:

- Node.js 18 o superior (recomendado 20)
- npm
- Git, opcional para control de versiones

Puedes comprobar las versiones con:

```bash
node -v
npm -v
```

## Instalación

Clona el repositorio:

```bash
git clone https://github.com/Santiagofernan/Soluciones_TIC.git
```

Entra en la carpeta del proyecto:

```bash
cd Soluciones_TIC
```

Instala las dependencias:

```bash
npm install
```

## Variables de entorno

Copia el archivo `.env.example` como `.env.local` en la raíz del proyecto y completa el valor:

```env
VITE_FORMSPREE_FORM_ID=TU_FORM_ID
VITE_SITE_URL=https://tu-dominio.com
```

- `VITE_FORMSPREE_FORM_ID`: la parte final del endpoint de Formspree (`https://formspree.io/f/TU_FORM_ID`).
- `VITE_SITE_URL`: dirección pública del sitio, sin `/` al final. Se usa en la URL canónica, el `sitemap.xml`, el `robots.txt` y las vistas previas en redes sociales. Si no se define, se usa `https://alsoft-cloud.com` y la compilación muestra un aviso.

No subas archivos `.env.local` al repositorio. Recuerda que cualquier variable que empiece por `VITE_` queda visible en el frontend, así que nunca guardes ahí claves secretas.

## Ejecutar en desarrollo

Para iniciar el proyecto localmente:

```bash
npm run dev
```

Luego abre:

```text
http://localhost:5173/
```

Para visualizarlo desde un celular conectado a la misma red Wi-Fi:

```bash
npm run dev -- --host 0.0.0.0
```

Después abre en el celular:

```text
http://IP-DE-TU-PC:5173/
```

Reemplaza `IP-DE-TU-PC` por la dirección IPv4 de tu computador.

## Comandos disponibles

Ejecutar el servidor de desarrollo:

```bash
npm run dev
```

Verificar los tipos de TypeScript:

```bash
npm run typecheck
```

Ejecutar el análisis de código:

```bash
npm run lint
```

Generar la versión de producción:

```bash
npm run build
```

## Formulario de contacto

El formulario utiliza:

- Formspree para procesar y enviar los datos.
- Un campo honeypot oculto (`_gotcha`) para frenar bots. Las personas no lo ven; si un bot lo llena, el envío se descarta. Formspree también reconoce este campo y aplica su propio filtro de spam.

Antes de publicar, verifica que:

1. El Form ID sea real y esté configurado en las variables de entorno del hosting.
2. El correo de destino esté configurado en Formspree.
3. El dominio de producción esté permitido en la configuración del formulario de Formspree (si restringes dominios).
4. El formulario funcione correctamente en computador y celular.

## Estructura general

```text
src/
├── components/     # Secciones de la landing, Navbar, Footer, BrandLogo, PageTransition
├── pages/          # Página de perfil profesional
├── data/           # Contenido: navegación, servicios, proyectos, recursos, perfil
├── lib/            # Utilidades (iconos)
├── assets/         # Imágenes e iconos
├── App.tsx         # Rutas: "/" (landing) y "/perfil"
├── main.tsx
└── index.css       # Estilos globales y animaciones de marca

public/             # Favicon, iconos PNG, og-image.png y site.webmanifest

vite-plugin-seo.ts  # Metadatos, JSON-LD, sitemap.xml, robots.txt y perfil.html
```

Para cambiar el orden o los enlaces del menú y del footer, edita `src/data/navigation.ts`. Cada `sectionId` debe coincidir con el `id` de la sección correspondiente en la landing.

## Responsive

El sitio debe verificarse en diferentes tamaños de pantalla:

- 320px
- 375px
- 390px
- 414px
- 430px
- 768px
- 1024px
- 1280px
- 1440px

Se debe comprobar especialmente:

- Navbar.
- Menú hamburguesa.
- Formularios.
- Botones.
- Tarjetas.
- Imágenes.
- Secciones con grids.
- Ausencia de desplazamiento horizontal.

## Publicación

Para generar los archivos de producción:

```bash
npm run build
```

Los archivos generados se encontrarán normalmente en:

```text
dist/
```

La carpeta `dist` puede publicarse en un hosting compatible con sitios estáticos. El proyecto ya incluye la configuración para los dos más comunes:

### Vercel (`vercel.json`)

1. Importa el repositorio en [vercel.com/new](https://vercel.com/new). Detecta Vite automáticamente.
2. En *Settings → Environment Variables* agrega `VITE_FORMSPREE_FORM_ID` y `VITE_SITE_URL`.
3. Despliega. Cada `git push` a `main` vuelve a publicar el sitio.

### Netlify (`netlify.toml`)

1. En [app.netlify.com](https://app.netlify.com) elige *Add new site → Import an existing project* y conecta el repositorio.
2. El comando (`npm run build`) y la carpeta (`dist`) se leen de `netlify.toml`.
3. En *Site configuration → Environment variables* agrega `VITE_FORMSPREE_FORM_ID` y `VITE_SITE_URL`.

Ambas configuraciones sirven `perfil.html` en `/perfil`, redirigen cualquier otra ruta a la aplicación, guardan en caché los archivos de `assets/` y añaden cabeceras básicas de seguridad.

> Las variables `VITE_` se leen al compilar. Si las cambias en el hosting, vuelve a desplegar para que tomen efecto.

### Lista de verificación antes de publicar

1. `npm run typecheck`, `npm run lint` y `npm run build` terminan sin errores.
2. `VITE_SITE_URL` apunta al dominio real (la compilación avisa si falta).
3. `VITE_FORMSPREE_FORM_ID` está configurado y el formulario envía correctamente.
4. El dominio propio está conectado en el hosting con HTTPS.
5. El sitemap está enviado en Google Search Console (ver sección SEO).

## SEO

El posicionamiento se genera automáticamente al compilar con el plugin `vite-plugin-seo.ts`, a partir de `src/data/seo.ts`:

- Título, descripción, palabras clave y URL canónica por página (inicio y perfil).
- Etiquetas Open Graph y Twitter con la imagen `public/og-image.png` (1200×630) para las vistas previas en WhatsApp, LinkedIn, Facebook y X.
- Datos estructurados JSON-LD (schema.org): `ProfessionalService` con los servicios, contacto y ubicación, `WebSite`, `Person` y `ProfilePage` con migas de pan.
- `robots.txt` y `sitemap.xml`.
- Iconos PNG y `site.webmanifest` para móviles.
- El componente `RouteSeo` actualiza el título y los metadatos al navegar entre páginas sin recargar.

Para cambiar los textos que aparecen en Google, edita `src/data/seo.ts`. Recomendación: títulos de hasta 60 caracteres y descripciones de hasta 160.

Después de publicar el sitio:

1. Registra el dominio en [Google Search Console](https://search.google.com/search-console) y envía `https://tu-dominio.com/sitemap.xml`.
2. Haz lo mismo en [Bing Webmaster Tools](https://www.bing.com/webmasters) (también alimenta a DuckDuckGo y Yahoo).
3. Crea o reclama el perfil de empresa en [Google Business Profile](https://business.google.com) con la dirección de Garzón, Huila, para aparecer en búsquedas locales y en Google Maps.
4. Valida los datos estructurados con la [Prueba de resultados enriquecidos](https://search.google.com/test/rich-results).

## Recomendaciones de seguridad

- No subir `.env.local`.
- No publicar claves secretas ni guardarlas en variables `VITE_`.
- No almacenar contraseñas en el frontend.
- Validar los datos recibidos por el servicio de formularios.
- Mantener actualizadas las dependencias.
- Revisar los permisos del repositorio antes de hacerlo público.

## Autor

Jorge Alejandro López Salazar

Perfil profesional:

https://www.linkedin.com/in/jorge-alejandro-lopez-salazar-294231261/

## Repositorio

https://github.com/Santiagofernan/Soluciones_TIC
