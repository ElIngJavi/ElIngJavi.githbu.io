/* ============================================================
   typewriter.js
   Efecto de escritura animada en el hero.
   Alterna entre varias frases con una animación de escritura
   y borrado suave.
   ============================================================ */

(function () {
  var tw = document.getElementById('typewriter');
  if (!tw) return;

  var phrases = [
    'Desarrollador Jr.',
    'Soporte TI.',
    'Freelancer.',
    'Amante del código limpio.'
  ];

  var phraseIndex = 0;
  var charIndex   = 0;
  var deleting    = false;

  function typewrite() {
    var current = phrases[phraseIndex];

    if (!deleting) {
      /* Escribir carácter por carácter */
      charIndex++;
      tw.textContent = current.slice(0, charIndex);

      if (charIndex === current.length) {
        /* Pausa al terminar de escribir antes de borrar */
        deleting = true;
        setTimeout(typewrite, 1800);
        return;
      }
    } else {
      /* Borrar carácter por carácter */
      charIndex--;
      tw.textContent = current.slice(0, charIndex);

      if (charIndex === 0) {
        deleting = false;
        phraseIndex = (phraseIndex + 1) % phrases.length;
      }
    }

    /* Velocidad: borrar más rápido que escribir */
    setTimeout(typewrite, deleting ? 45 : 80);
  }

  typewrite();
})();
