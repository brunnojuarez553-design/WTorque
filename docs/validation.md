# Validación de la reorganización

Fecha: 27 de octubre de 2026. Referencia original: `f88f1fe8dde87ea2fec0e76bbadc1ada5e2a448c`.

## Resultado

- 51 verificaciones de navegador aprobadas, 0 fallos.
- Suite del proxy `api/chat.js` aprobada (CORS, métodos, validación, historial, errores del proveedor y límite de solicitudes).
- Sintaxis JavaScript y `git diff --check` aprobados.
- `api/chat.js` y `vercel.json` idénticos a la referencia original.

## Navegador y comparación

Microsoft Edge / Chromium 156, ejecutado con Playwright 1.62.1. Desktop: 1440 × 900. Mobile: 390 × 844, con emulación de dispositivo móvil y entrada táctil en las pruebas automatizadas; no es una prueba en teléfono físico.

Para inicio y las cinco vistas se compararon texto, geometría y estilos calculados de todos los elementos, además de las capturas de cada viewport. Medios remotos sustituidos por una misma imagen determinista y animaciones detenidas sólo durante esta comparación. Tolerancia de 0,25 px en geometría y un nivel por canal RGB en capturas por variaciones de rasterizado. Los archivos CSS extraídos conservan sus reglas originales.

También se inspeccionaron capturas con medios reales: fuentes cargadas, video principal reproduciéndose, imágenes cargadas, sin desbordamiento horizontal y sin errores JavaScript en ambos tamaños. No se comprobó la disponibilidad de cada recurso remoto ni se hizo una auditoría de rendimiento.

## Flujos ejercitados

- Apertura de las cinco vistas y cierre con Escape.
- Reapertura de Reprogramación, calculadora de HP, selección de modelo y pestañas de stages.
- Asistente flotante y asistente de Reprogramación: payload y respuesta simulada.
- Validación y generación de URLs de WhatsApp en repuestos y solicitud de turno.
- Drawer móvil y enlace interno a una sección.
- Carrusel de galería y lightbox de imagen.
- Lightboxes de imagen y video en Hall of Fame, incluida eliminación del video al cerrar.
- Apertura directa del modal de contacto mediante fragmento.
- Disponibilidad HTTP de CSS, JavaScript, sitemap y robots bajo las cabeceras originales.

## Límites para la revisión

No se enviaron mensajes de WhatsApp ni formularios comerciales reales. No se hizo una llamada autenticada a Groq; falta validarla en un origen permitido con `GROQ_API_KEY`. La prueba usa un servidor HTTP local que reproduce las cabeceras y el fallback de la web, no el runtime de Vercel. La verificación del despliegue de preview y de la integración real debe completarse antes de aprobar producción.

Los datos comerciales pendientes de confirmación están detallados en `seo-geo-review.md`. No se alteraron los textos, prompts comerciales ni cifras visibles.
