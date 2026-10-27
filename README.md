# WitcherTorque

Sitio estático servido por Vercel, con un proxy serverless para el asistente. No requiere compilación del frontend.

## Estructura

- `index.html`: contenido de inicio, metadatos y JSON-LD.
- `assets/css/main.css`: estilos originales de inicio.
- `assets/css/{reprogramacion,contacto,faq,servicios,hall-of-fame}.css`: estilos de cada vista modal; se cargan al abrirla.
- `assets/js/home.js`: navegación móvil, galerías y animaciones de inicio.
- `assets/js/pages/`: plantillas HTML de las cinco vistas, conservadas como literales JavaScript para mantener el contenido y los escapes.
- `assets/js/modal-pages/`: inicializadores de calculadora, chat, FAQ y lightboxes. Cada apertura recibe estado local nuevo.
- `assets/js/assistant.js`: asistente flotante, formularios y derivación a WhatsApp.
- `assets/js/modal.js`: apertura, cierre y limpieza del modal.
- `assets/js/navigation.js`: entrada directa mediante fragmentos existentes/nuevos, sin cambiar las rutas del servidor.
- `api/chat.js`: proxy de Groq; requiere `GROQ_API_KEY` en Vercel. Nunca colocar la clave en archivos públicos.
- `robots.txt`, `sitemap.xml`: rastreo de la URL pública canónica.
- `vercel.json`: configuración original de rutas y cabeceras, conservada sin modificaciones.

Los scripts son clásicos y ordenados deliberadamente: las funciones usadas por los atributos `onclick` deben permanecer disponibles en `window`. No convertirlos a módulos ni agregar `async` sin adaptar y verificar esos manejadores. Los estilos en atributos HTML permanecen para conservar la cascada original; esta fase extrae todos los bloques CSS y JavaScript ejecutables.

## Desarrollo y pruebas

Servir por HTTP desde la raíz; las rutas de recursos comienzan con `/assets/`. Abrir `index.html` con `file://` no representa el despliegue.

```sh
npm ci
npx playwright install chromium
npm test
```

Para usar Microsoft Edge instalado, definir `BROWSER_CHANNEL=msedge`. Las pruebas crean servidores temporales, aplican las cabeceras de Vercel y comparan con el commit original `f88f1fe8dde87ea2fec0e76bbadc1ada5e2a448c`; no hacer un clon superficial que omita ese commit. Generan capturas y resultados en `test-results/` (ignorado por Git).

Las comparaciones visuales reemplazan medios remotos por imágenes deterministas y desactivan las animaciones únicamente en el navegador de prueba. Los tests de chat simulan el proveedor y los de WhatsApp interceptan la navegación: no envían mensajes, reservas ni solicitudes comerciales reales.

Para verificar el asistente contra Groq se necesita un entorno Vercel con su variable configurada y un origen permitido por `api/chat.js`. Los dominios de preview aleatorios actualmente no están en esa lista original; no interpretar un 403 en un preview como una falla de la extracción.

## SEO y revisión

Ver `docs/seo-geo-review.md` para cambios técnicos, limitaciones y datos que requieren confirmación del negocio. La rama debe revisarse antes de integrarla a producción.
