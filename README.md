# WitcherTorque — sitio web

Sitio estático con el diseño, los textos y las interacciones existentes. La API de IA continúa en `api/chat.js` y utiliza `GROQ_API_KEY` en Vercel.

## Estructura

- `index.html`: contenido de la portada, metadatos y JSON-LD originales.
- `assets/css/main.css`: estilos originales de la portada.
- `assets/js/home.js`: navegación, galería, preguntas y animaciones de la portada.
- `assets/js/reprogramming.js`: calculadora y plantilla del modal ECU.
- `assets/js/contact.js`, `faq.js`, `services.js`, `hall-of-fame.js`: funciones y plantillas de cada modal.
- `assets/js/assistant.js`: configuración y lógica original del asistente, formularios y derivaciones.
- `assets/js/modal.js`: apertura y cierre del contenedor de modales.
- `robots.txt`, `sitemap.xml`: descubrimiento y rastreo.
- `scripts/`: verificación, generación del sitio y servidor local.
- `dist/`: resultado generado para Vercel; no editar ni versionar.

Los scripts son clásicos y se cargan de forma síncrona en el mismo orden que el código original. No agregar `async`, `defer` ni `type="module"` sin revisar los manejadores HTML y dependencias globales. Las plantillas de los modales conservan sus estilos y scripts internos: moverlos requiere una revisión adicional para conservar su comportamiento.

## Desarrollo y validación

Requiere Node.js 22 o superior. No hay dependencias de npm ni se necesita instalar un framework.

```sh
npm run check
npm start
npm run build
npm run preview
```

El servidor local sirve archivos estáticos; no conecta con Groq. Para comprobar respuestas reales del asistente usar el despliegue de Vercel con su variable `GROQ_API_KEY`. No guardar claves en archivos del frontend.

El build valida sintaxis y recursos, genera nombres con hash para CSS y JS y actualiza sus referencias en el HTML. Esto permite cachear recursos sin que una publicación nueva use versiones anteriores. Vercel toma `dist` como directorio público y conserva la función de `api/chat.js`.

## Alcance SEO y GEO

Se mantienen los metadatos, canonical, contenido visible, JSON-LD y URL actuales. El HTML principal se entrega directamente desde el servidor y los rastreadores pueden descubrir el sitemap desde `robots.txt`. Separar archivos facilita el mantenimiento y la caché; no garantiza por sí solo un mejor ranking ni menciones en respuestas de IA.

Los modales siguen siendo modales y no nuevas páginas indexables. La ruta comodín existente se conserva por compatibilidad. Crear páginas de servicios con URL propia, revisar afirmaciones comerciales y validar la ubicación exacta son tareas editoriales y de arquitectura posteriores, fuera de esta reorganización.

Después de publicar: comprobar portada, menú, modales, galería, formularios, asistente y WhatsApp en desktop/mobile; comprobar `/robots.txt` y `/sitemap.xml`; enviar el sitemap en Search Console. Las pruebas locales no sustituyen la validación de la API con las variables de producción.
