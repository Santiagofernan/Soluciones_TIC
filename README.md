# Tec_J — Soluciones Tecnológicas

Sitio web profesional para presentar servicios de tecnología, infraestructura y soluciones digitales para empresas.

## Descripción

Tec_J es una página web moderna, responsive e interactiva orientada a servicios profesionales de tecnología. El sitio presenta información sobre el perfil del ingeniero, servicios ofrecidos y un formulario de contacto protegido con CAPTCHA.

## Características

- Diseño moderno con estética tecnológica.
- Interfaz responsive para computadores, tablets y celulares.
- Sección principal con propuesta de valor.
- Sección de servicios tecnológicos.
- Página independiente de perfil profesional.
- Información de experiencia, formación, habilidades y proyectos.
- Enlace al perfil oficial de LinkedIn.
- Formulario de contacto.
- Envío de formularios mediante Formspree.
- Protección antispam mediante Cloudflare Turnstile.
- Animaciones e interacciones sutiles.
- Navegación móvil mediante menú hamburguesa.
- Validación de datos del formulario.
- Configuración mediante variables de entorno.

## Tecnologías utilizadas

- React
- TypeScript
- Vite
- Tailwind CSS
- Framer Motion
- Lucide React
- Formspree
- Cloudflare Turnstile
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

Crea un archivo llamado `.env.local` en la raíz del proyecto:

```env
VITE_FORMSPREE_FORM_ID=TU_FORM_ID
VITE_TURNSTILE_SITE_KEY=TU_SITE_KEY
```

No compartas claves privadas ni subas archivos `.env.local` al repositorio.

La Site Key de Turnstile puede utilizarse en el frontend. La Secret Key debe mantenerse privada y no debe incluirse en archivos públicos ni en variables que comiencen por `VITE_`.

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
- Cloudflare Turnstile para reducir envíos automatizados y spam.

Antes de publicar, verifica que:

1. El Form ID sea real.
2. La Site Key de Turnstile sea correcta.
3. El dominio de producción esté registrado en Cloudflare Turnstile.
4. El correo de destino esté configurado en Formspree.
5. El formulario funcione correctamente en computador y celular.

## Estructura general

```text
src/
├── components/
├── pages/
├── data/
├── assets/
├── App.tsx
├── main.tsx
└── index.css

public/
```

La estructura exacta puede variar según los componentes y archivos actuales del proyecto.

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

## Recomendaciones de seguridad

- No subir `.env.local`.
- No publicar Secret Keys.
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
