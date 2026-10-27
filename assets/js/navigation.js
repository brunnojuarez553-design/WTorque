// Support direct links to existing modal views without introducing new URL paths.
(function () {
  const views = {
    '#reprogramacion': openRepro,
    '#servicios': openServicios,
    '#proyectos': openHallOfFame,
    '#preguntas-frecuentes': openFaq,
    '#contacto': openContacto
  };
  function openLinkedView() {
    if (views[location.hash]) views[location.hash]();
  }
  window.addEventListener('hashchange', openLinkedView);
  openLinkedView();
})();
