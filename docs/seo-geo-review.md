# Revisión técnica SEO y GEO

Base revisada: `f88f1fe8dde87ea2fec0e76bbadc1ada5e2a448c`. Fecha: 27 de octubre de 2026.

## Cambios implementados

- Conservados título, descripción, contenido comercial, Open Graph, Twitter, idioma, verificación de Google y canonical `https://www.witchertorque.com/`.
- Incorporado un landmark `main` que contiene las secciones de inicio, sin estilos nuevos ni cambios de texto.
- Enlaces principales convertidos desde `javascript:` a enlaces con fragmentos y manejadores que conservan la apertura de modales. Los fragmentos también funcionan al acceder directamente a la URL. No se crean nuevas rutas públicas.
- Incorporado `robots.txt`, permitiendo el rastreo del sitio, excluyendo `/api/` y declarando el sitemap.
- Sitemap conserva únicamente la URL pública actual. Retirado el `lastmod` fijo, cuya fecha de modificación real no se podía acreditar; no se reemplaza por una fecha inventada.
- `AutoRepair` conserva nombre, URL, teléfono, ciudad, horarios, redes y servicios presentes en el contenido. Agregado un identificador estable basado en la URL canónica.
- Omitidos de JSON-LD los alias promocionales, coordenadas exactas, rango de precios, monedas y medios de pago que no están acreditados por el contenido visible. Retiradas las mismas coordenadas de los metadatos geográficos. No se reemplaza ninguno de esos datos por estimaciones.
- JSON-LD FAQ y breadcrumb existentes conservados; el FAQ necesita la revisión de afirmaciones comerciales indicada abajo.

## Pendiente de confirmación del negocio

No se modificó ningún texto comercial. Para una segunda fase conviene confirmar:

1. Dirección precisa, punto de mapa real, precios/monedas/medios de pago, antes de reincorporarlos al marcado.
2. Afirmaciones absolutas: “mejor”, “único”, “más rápido”, “sin riesgos”, garantía intacta y cifras de récords. El código del sitio muestra estas afirmaciones, pero eso no constituye verificación independiente de su exactitud. Las respuestas del asistente y el FAQ deben revisarse con el responsable del negocio antes de reescribirlas.
3. El H1 oculto y el párrafo de palabras clave con el mismo color que el fondo. Se conservaron por la instrucción de mantener el contenido y el diseño; se recomienda acordar una alternativa visible y útil en una fase posterior.
4. Inconsistencias de antigüedad (Est. 2014 frente a 16+ años), fecha de copyright y cualquier otra cifra comercial.

## Alcance y limitaciones

- Las vistas de servicios, contacto, reprogramación, FAQ y proyectos siguen siendo modales de una única página. Los fragmentos no crean documentos indexables independientes; no se añadieron URLs ficticias al sitemap. Para posicionarlas por separado hace falta acordar URLs estables y generar HTML por ruta conservando la experiencia visual.
- GEO se entiende como claridad y accesibilidad de la información para buscadores y sistemas generativos. No se agregaron testimonios, estrellas, reseñas, certificaciones, direcciones ni promesas de posicionamiento. No se creó `llms.txt` como supuesto requisito de indexación.
- El dominio canónico coincide con el usado por el contenido y el proxy. No se verificó la propiedad del dominio ni el estado de Search Console.
- La configuración de Vercel, sus cabeceras, `/api/chat` y su lista de orígenes no se modificaron. Un preview puede rechazar el chat por CORS; la integración real con Groq y su clave requieren verificación en un origen permitido.
- Las pruebas automatizadas verifican el comportamiento local y el contrato del proxy con respuestas simuladas. No envían formularios reales ni prueban la entrega efectiva por WhatsApp o Groq.

## Referencias oficiales consultadas

- [Google: datos estructurados fieles y representativos del contenido](https://developers.google.com/search/docs/appearance/structured-data/sd-policies)
- [Google: SEO de JavaScript y enlaces rastreables](https://developers.google.com/search/docs/crawling-indexing/javascript/javascript-seo-basics)
