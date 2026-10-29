
// ─── VIDEO IMMEDIATE PLAY ─────────────────────────
(function(){
  const v = document.getElementById('heroVideo');
  if(v){
    v.load();
    const tryPlay = () => v.play().catch(()=>{});
    if(document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', tryPlay);
    } else {
      tryPlay();
    }
  }
})();

// ─── GALERÍA CAROUSELS ────────────────────────────
(function(){
  const carousels = [
    { track: 'track-4runner', dots: 'dots-4runner', total: 9 },
    { track: 'track-raptor',  dots: 'dots-raptor',  total: 7 },
    { track: 'track-golf',    dots: 'dots-golf',    total: 6 },
  ];

  carousels.forEach(({ track, dots, total }) => {
    const trackEl = document.getElementById(track);
    const dotsEl  = document.getElementById(dots);
    let current = 0;

    // build dots
    for (let i = 0; i < total; i++) {
      const d = document.createElement('div');
      d.className = 'gdot' + (i === 0 ? ' active' : '');
      d.onclick = () => goTo(i);
      dotsEl.appendChild(d);
    }

    function goTo(n) {
      current = (n + total) % total;
      trackEl.style.transform = `translateX(-${current * 100}%)`;
      dotsEl.querySelectorAll('.gdot').forEach((d, i) => d.classList.toggle('active', i === current));
    }

    // arrow buttons
    const wrap = trackEl.parentElement;
    wrap.querySelectorAll('.garrow').forEach(btn => {
      btn.addEventListener('click', e => {
        e.stopPropagation();
        goTo(current + parseInt(btn.dataset.dir));
      });
    });

    // touch / swipe
    let startX = 0, startY = 0, dragging = false, moved = false;

    wrap.addEventListener('touchstart', e => {
      startX = e.touches[0].clientX;
      startY = e.touches[0].clientY;
      dragging = true; moved = false;
    }, { passive: true });

    wrap.addEventListener('touchmove', e => {
      if (!dragging) return;
      const dx = e.touches[0].clientX - startX;
      const dy = e.touches[0].clientY - startY;
      if (!moved && Math.abs(dx) > Math.abs(dy)) moved = true;
    }, { passive: true });

    wrap.addEventListener('touchend', e => {
      if (!dragging) return;
      dragging = false;
      if (!moved) return;
      const dx = e.changedTouches[0].clientX - startX;
      if (Math.abs(dx) > 40) goTo(dx < 0 ? current + 1 : current - 1);
    });

    // tap to open lightbox (solo si no fue swipe y no fue flecha)
    wrap.addEventListener('click', e => {
      if (moved) return;
      if (e.target.closest('.garrow')) return;
      const img = trackEl.querySelectorAll('.gslide img')[current];
      if (img) openLightbox(img);
    });
  });
})();

// ─── LIGHTBOX ─────────────────────────────────────
function openLightbox(img) {
  document.getElementById('lightboxImg').src = img.src;
  document.getElementById('lightbox').classList.add('open');
  document.body.style.overflow = 'hidden';
}
function closeLightbox() {
  document.getElementById('lightbox').classList.remove('open');
  document.body.style.overflow = '';
}
document.addEventListener('keydown', e => { if(e.key === 'Escape') closeLightbox(); });

// ─── FAQ TOGGLE ───────────────────────────────────
function toggleFaq(btn) {
  const answer = btn.nextElementSibling;
  const isOpen = btn.classList.contains('open');
  // close all
  document.querySelectorAll('.faq-q.open').forEach(b => {
    b.classList.remove('open');
    b.nextElementSibling.classList.remove('open');
  });
  if (!isOpen) {
    btn.classList.add('open');
    answer.classList.add('open');
  }
}

// ─── HAMBURGER ────────────────────────────────────
const hamburger = document.getElementById('navHamburger');
const drawer = document.getElementById('navDrawer');
hamburger.addEventListener('click', () => {
  drawer.classList.toggle('open');
  const open = drawer.classList.contains('open');
  const spans = hamburger.querySelectorAll('span');
  if(open) {
    spans[0].style.transform='rotate(45deg) translate(4px,5px)';
    spans[1].style.opacity='0';
    spans[2].style.transform='rotate(-45deg) translate(4px,-5px)';
  } else {
    spans[0].style.transform=''; spans[1].style.opacity=''; spans[2].style.transform='';
  }
});

// ─── REVEAL ON SCROLL ─────────────────────────────
const obs = new IntersectionObserver(entries => {
  entries.forEach(e => { if(e.isIntersecting) { e.target.classList.add('visible'); obs.unobserve(e.target); } });
}, { threshold: 0.08 });
document.querySelectorAll('.reveal').forEach(el => obs.observe(el));

// Animar barras de habilidades al hacer scroll
const skillObs = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if(e.isIntersecting) {
      e.target.classList.add('animated');
      skillObs.unobserve(e.target);
    }
  });
}, { threshold: 0.3 });
document.querySelectorAll('.reveal-skill').forEach(el => skillObs.observe(el));

// Cerrar drawer al hacer click en links de ancla
document.querySelectorAll('.drawer-link[href^="#"]').forEach(link => {
  link.addEventListener('click', () => {
    document.getElementById('navDrawer').classList.remove('open');
    const spans = document.getElementById('navHamburger').querySelectorAll('span');
    spans[0].style.transform=''; spans[1].style.opacity=''; spans[2].style.transform='';
  });
});
