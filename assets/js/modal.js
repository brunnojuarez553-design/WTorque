
// ═══ MODAL UNIVERSAL — reemplaza blob window.open ═══════════════════
var wtModalCleanup = null;
function openWtModal(html, page) {
  if (wtModalCleanup) { wtModalCleanup(); wtModalCleanup = null; }
  var inner = document.getElementById('wt-modal-inner');
  var overlay = document.getElementById('wt-modal-overlay');
  inner.innerHTML = html;
  overlay.style.display = 'block';
  overlay.scrollTop = 0;
  document.body.style.overflow = 'hidden';
  // Initializers are loaded once; each opening gets its own local state.
  if (page && window.WTModalPages && window.WTModalPages[page]) {
    wtModalCleanup = window.WTModalPages[page]();
  }
}
function closeWtModal() {
  if (wtModalCleanup) { wtModalCleanup(); wtModalCleanup = null; }
  var overlay = document.getElementById('wt-modal-overlay');
  overlay.style.display = 'none';
  document.getElementById('wt-modal-inner').innerHTML = '';
  document.body.style.overflow = '';
}
// Cerrar con Escape
document.addEventListener('keydown', function(e) {
  if (e.key === 'Escape') closeWtModal();
});
