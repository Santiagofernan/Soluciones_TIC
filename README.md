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

- Node.js
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
```

El Form ID es la parte final del endpoint de Formspree (`https://formspree.io/f/TU_FORM_ID`).

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

public/
└── favicon.svg
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

La carpeta `dist` puede publicarse en un hosting compatible con sitios estáticos.

Como el sitio usa React Router, el hosting debe redirigir todas las rutas a `index.html` para que `/perfil` funcione al recargar o al abrirse desde un enlace directo. Por ejemplo, en Netlify con un archivo `public/_redirects` que contenga `/* /index.html 200`, o en Vercel con una regla de *rewrite* equivalente.

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
