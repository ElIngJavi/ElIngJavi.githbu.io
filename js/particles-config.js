/* ============================================================
   particles-config.js
   Configuración de particles.js para el fondo del hero.
   Requiere que particles.js esté cargado antes.
   ============================================================ */

window.addEventListener('load', function () {
  if (typeof particlesJS === 'undefined') return;

  particlesJS('particles-js', {
    particles: {
      number: { value: 70, density: { enable: true, value_area: 900 } },
      color: { value: '#38bdf8' },
      shape: { type: 'circle' },
      opacity: {
        value: 0.22,
        random: true,
        anim: { enable: true, speed: 0.6, opacity_min: 0.05, sync: false }
      },
      size: { value: 2.5, random: true, anim: { enable: false } },
      line_linked: {
        enable: true,
        distance: 150,
        color: '#38bdf8',
        opacity: 0.10,
        width: 1
      },
      move: {
        enable: true,
        speed: 0.9,
        direction: 'none',
        random: true,
        straight: false,
        out_mode: 'out',
        bounce: false
      }
    },
    interactivity: {
      detect_on: 'canvas',
      events: {
        onhover: { enable: true, mode: 'grab' },
        onclick: { enable: true, mode: 'push' },
        resize: true
      },
      modes: {
        grab: { distance: 180, line_linked: { opacity: 0.3 } },
        push: { particles_nb: 3 }
      }
    },
    retina_detect: true
  });
});
