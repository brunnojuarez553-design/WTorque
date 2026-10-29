# Validación de la reorganización

Fecha: 2026-10-29. Base: commit `f88f1fe8dde87ea2fec0e76bbadc1ada5e2a448c`.

- La recomposición del HTML, CSS y scripts extraídos reproduce exactamente el archivo original. No se reescribieron textos, estilos, plantillas, formularios ni lógica del asistente.
- `npm run build` pasó: sintaxis de los ocho scripts clásicos, orden de carga, referencias locales, JSON-LD, canonical y archivos de rastreo.
- Se generaron y sirvieron nueve recursos CSS/JS con nombres derivados de SHA-256. Su contenido coincide con los archivos fuente.
- Comparación en Chrome headless, con la misma CSP que producción, a 1440 × 900 y 390 × 844: mismo texto, enlaces, dimensiones/posiciones principales, tipografías y colores; mismos manejadores globales; menú y apertura/cierre del chat equivalentes.
- Los cinco modales (contacto, servicios, FAQ, Hall of Fame y reprogramación) generaron el mismo HTML y contenido que antes, y abrieron/cerraron correctamente.
- No hubo excepciones JavaScript en la comparación del original ni en la versión reorganizada.
- `robots.txt` y `sitemap.xml` respondieron correctamente en la vista previa estática.

## Límites de la prueba

Los recursos remotos (Cloudinary, Google Fonts y otros servicios HTTPS) se bloquearon de manera idéntica en ambas versiones debido a las restricciones de red del entorno. Esto permite comparar la estructura y los fallbacks, pero no verifica la descarga real de imágenes, fuentes o videos. No se enviaron consultas reales a Groq ni mensajes a WhatsApp, y no se probó todavía el despliegue de Vercel. `api/chat.js` se mantiene sin cambios.

Tras integrar el pull request, revisar el deployment de Vercel y comprobar una conversación real del asistente, multimedia y enlaces externos. Enviar `https://www.witchertorque.com/sitemap.xml` en Search Console si no está enviado.
