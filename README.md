# Javier Carranza — Portafolio Personal

Portafolio profesional desarrollado con HTML, CSS y JavaScript vanilla.  
Desplegado en GitHub Pages: [elingjavi.github.io](https://elingjavi.github.io)

---

## Estructura del proyecto

```
portfolio/
├── index.html              # Estructura HTML principal
│
├── css/
│   ├── base.css            # Tokens de diseño, reset, layout global
│   ├── navbar.css          # Barra de navegación fija
│   ├── hero.css            # Sección hero y particles
│   ├── sections.css        # Stats, Sobre mí, Redes, Proyectos, Experiencia, Contacto
│   ├── components.css      # Botones, cards, cursor, skill pills
│   └── responsive.css      # Media queries (tablet ≤900px, móvil ≤600px)
│
├── js/
│   ├── particles.js        # Librería particles.js (no modificar)
│   ├── particles-config.js # Configuración de partículas del hero
│   ├── cursor.js           # Cursor personalizado con trail
│   ├── animations.js       # Fade-in con IntersectionObserver
│   ├── typewriter.js       # Efecto de escritura animada en el hero
│   ├── stats.js            # Contador animado de estadísticas
│   └── main.js             # Año dinámico y barra de scroll
│
└── assets/
    ├── img/                # Imágenes y fotos del sitio
    │   ├── profile.jpg
    │   ├── profile2.jpg
    │   ├── MariHev2.jpg
    │   ├── pagina.PNG
    │   ├── email.png
    │   ├── lk.png
    │   ├── gt.png
    │   └── ubi.png
    └── docs/
        └── CV_Javier_Carranza.pdf
```

---

## Tecnologías utilizadas

- **HTML5** — estructura semántica
- **CSS3** — variables, grid, flexbox, animaciones
- **JavaScript** — vanilla ES6, sin frameworks
- **particles.js** — fondo animado del hero
- **Formspree** — manejo del formulario de contacto
- **GitHub Pages** — despliegue gratuito

---

## Cómo ejecutar localmente

```bash
# Opción 1: extensión Live Server en VS Code (recomendado)
# Clic derecho en index.html → "Open with Live Server"

# Opción 2: servidor Python
python -m http.server 8080
# Abrir http://localhost:8080
```

---

## Pasos para migrar imágenes

Mover los archivos de la carpeta `Fotos/` a `assets/img/`:

```bash
# Desde la raíz del proyecto
mv Fotos/profile.jpg  assets/img/
mv Fotos/profile2.jpg assets/img/
mv Fotos/MariHev2.jpg assets/img/
mv Fotos/pagina.PNG   assets/img/
mv Fotos/email.png    assets/img/
mv Fotos/lk.png       assets/img/
mv Fotos/gt.png       assets/img/
mv Fotos/ubi.png      assets/img/
```

---

## Contacto

- **Email:** javierchernandez201@gmail.com  
- **LinkedIn:** [linkedin.com/in/javierhrz](https://linkedin.com/in/javierhrz)  
- **GitHub:** [@ElIngJavi](https://github.com/ElIngJavi)
