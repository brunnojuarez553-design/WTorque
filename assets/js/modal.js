
// ═══ MODAL UNIVERSAL — reemplaza blob window.open ═══════════════════
function openWtModal(html) {
  var inner = document.getElementById('wt-modal-inner');
  var overlay = document.getElementById('wt-modal-overlay');
  inner.innerHTML = html;
  overlay.style.display = 'block';
  overlay.scrollTop = 0;
  document.body.style.overflow = 'hidden';
  // Ejecutar scripts inyectados dentro del modal
  Array.from(inner.querySelectorAll('script')).forEach(function(oldScript) {
    var newScript = document.createElement('script');
    newScript.textContent = oldScript.textContent;
    oldScript.parentNode.replaceChild(newScript, oldScript);
  });
}
function closeWtModal() {
  var overlay = document.getElementById('wt-modal-overlay');
  overlay.style.display = 'none';
  document.getElementById('wt-modal-inner').innerHTML = '';
  document.body.style.overflow = '';
}
// Cerrar con Escape
document.addEventListener('keydown', function(e) {
  if (e.key === 'Escape') closeWtModal();
});
