// Each opening receives fresh local state; event handlers remain available to the existing markup.
window.WTModalPages = window.WTModalPages || {};
window.WTModalPages['faq'] = function () {

function toggleFaq(btn) {
  const answer = btn.nextElementSibling;
  const isOpen = btn.classList.contains('open');
  document.querySelectorAll('.faq-q.open').forEach(b => {
    b.classList.remove('open');
    b.nextElementSibling.classList.remove('open');
  });
  if (!isOpen) {
    btn.classList.add('open');
    answer.classList.add('open');
  }
}

Object.assign(window, { toggleFaq });
return function () {  };
};
