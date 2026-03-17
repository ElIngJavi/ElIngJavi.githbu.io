/* ============================================================
   cursor.js
   Cursor personalizado con punto y anillo con lag suave.
   Agranda el cursor al pasar sobre elementos interactivos.
   ============================================================ */

(function () {
  const cursor      = document.getElementById('cursor');
  const cursorTrail = document.getElementById('cursor-trail');

  if (!cursor || !cursorTrail) return;

  let mouseX = 0, mouseY = 0;
  let trailX  = 0, trailY  = 0;

  /* Mueve el punto exacto al ratón */
  document.addEventListener('mousemove', function (e) {
    mouseX = e.clientX;
    mouseY = e.clientY;
    cursor.style.transform = `translate(${mouseX}px, ${mouseY}px)`;
  });

  /* Anillo sigue con lag suave (lerp 12%) */
  function animateTrail() {
    trailX += (mouseX - trailX) * 0.12;
    trailY += (mouseY - trailY) * 0.12;
    cursorTrail.style.transform = `translate(${trailX}px, ${trailY}px)`;
    requestAnimationFrame(animateTrail);
  }
  animateTrail();

  /* Efecto hover sobre elementos interactivos */
  const interactiveSelectors = 'a, button, .skill, .project-card, .social-card, .job';
  document.querySelectorAll(interactiveSelectors).forEach(function (el) {
    el.addEventListener('mouseenter', function () { cursor.classList.add('cursor-hover'); });
    el.addEventListener('mouseleave', function () { cursor.classList.remove('cursor-hover'); });
  });

  /* Ocultar cursor al salir de la ventana */
  document.addEventListener('mouseleave', function () {
    cursor.style.opacity = '0';
    cursorTrail.style.opacity = '0';
  });

  document.addEventListener('mouseenter', function () {
    cursor.style.opacity = '1';
    cursorTrail.style.opacity = '1';
  });
})();
