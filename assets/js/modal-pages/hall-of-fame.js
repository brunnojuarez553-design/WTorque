// Each opening receives fresh local state; event handlers remain available to the existing markup.
window.WTModalPages = window.WTModalPages || {};
window.WTModalPages['hall-of-fame'] = function () {

// ─── HOF LIGHTBOX ─────────────────────────────────────
function hofLightbox(img) {
  var lbImg = document.getElementById('hofLightboxImg');
  var lbVid = document.getElementById('hofLightboxVideo');
  lbImg.style.display = 'block'; lbVid.style.display = 'none'; lbVid.pause && lbVid.pause();
  lbImg.src = img.src;
  document.getElementById('hofLightbox').classList.add('open');
  document.body.style.overflow = 'hidden';
}
function hofVideoLightbox(src) {
  var lb = document.getElementById('hofLightbox');
  // Eliminar video anterior si existe
  var old = document.getElementById('hofLightboxVideo');
  if (old) old.remove();
  // Crear video fresco cada vez (evita bug de renderizado en Chrome)
  var v = document.createElement('video');
  v.id = 'hofLightboxVideo';
  v.src = src;
  v.controls = true;
  v.autoplay = true;
  v.playsinline = true;
  v.setAttribute('playsinline', '');
  v.style.cssText = 'max-width:92vw;max-height:88vh;width:auto;height:auto;display:block;border:1px solid rgba(200,0,0,0.2);background:#000;';
  lb.appendChild(v);
  lb.classList.add('open');
  document.body.style.overflow = 'hidden';
  // Detener propagación del click en el video para no cerrar el lightbox
  v.addEventListener('click', function(e){ e.stopPropagation(); });
}
function closeHofLightbox() {
  var lbVid = document.getElementById('hofLightboxVideo');
  if (lbVid) { lbVid.pause(); lbVid.remove(); }
  document.getElementById('hofLightbox').classList.remove('open');
  document.body.style.overflow = '';
}
const onEscape = function(e){ if(e.key==='Escape') closeHofLightbox(); };
document.addEventListener('keydown', onEscape);

Object.assign(window, { hofLightbox, hofVideoLightbox, closeHofLightbox });
return function () { document.removeEventListener('keydown', onEscape); const video = document.getElementById('hofLightboxVideo'); if(video) video.pause(); };
};
