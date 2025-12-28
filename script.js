/* =====================================================
   ESTE BLOQUE SE EJECUTA CUANDO EL HTML YA CARGÓ
   (SOLUCIÓN AL PROBLEMA DE NETLIFY / PRODUCCIÓN)
===================================================== */
document.addEventListener("DOMContentLoaded", () => {
  /* ================= FONDO DE ESTRELLAS ================= */

  /*
    - Busca el div con id="stars"
    - Crea 100 estrellas dinámicamente
    - Evita errores si el elemento no existe
  */

  const starsContainer = document.getElementById("stars");

  // Verificación defensiva (clave en producción)
  if (starsContainer) {
    for (let i = 0; i < 100; i++) {
      const star = document.createElement("div");

      // Clase CSS que define tamaño + animación
      star.className = "star";

      // Posición aleatoria dentro de la pantalla
      star.style.left = Math.random() * 100 + "%";
      star.style.top = Math.random() * 100 + "%";

      // Delay aleatorio para el efecto twinkle
      star.style.animationDelay = Math.random() * 3 + "s";

      starsContainer.appendChild(star);
    }
  }

  /* ================= SCROLL SUAVE ================= */

  /*
    - Aplica solo a links internos (#)
    - Previene salto brusco
    - Hace scroll animado
  */

  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();

      const target = document.querySelector(this.getAttribute("href"));

      if (target) {
        target.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    });
  });
}); // ⬅️ FIN DOMContentLoaded

/* =====================================================
   CARRUSEL DE GAMIFICACIÓN
   (FUNCIONES GLOBALES → SE LLAMAN DESDE HTML)
===================================================== */

// Slides del carrusel de gamificación
const slides = [
  {
    img: "img/kahoot-1.jpeg",
    text: "Actividad gamificada con Kahoot en el aula",
  },
  {
    img: "img/Calificación_Kahoot-2.jpeg",
    text: "Evaluación con Kahoot y feedback inmediato",
  },
  {
    img: "img/podio_Kahoot.jpeg",
    text: "Podio virtual para motivar a los estudiantes",
  },
];

let currentSlide = 0;

// Mostrar / ocultar carrusel
function toggleCarousel() {
  const carousel = document.getElementById("gamification-carousel");
  carousel.classList.toggle("hidden");
}

// Actualiza imagen + texto
function updateSlide() {
  document.getElementById("carousel-image").src = slides[currentSlide].img;
  document.getElementById("carousel-caption").innerText =
    slides[currentSlide].text;
}

// Siguiente slide
function nextSlide(event) {
  event.stopPropagation(); // evita cerrar el card
  currentSlide = (currentSlide + 1) % slides.length;
  updateSlide();
}

// Slide anterior
function prevSlide(event) {
  event.stopPropagation();
  currentSlide = (currentSlide - 1 + slides.length) % slides.length;
  updateSlide();
}

/* =====================================================
   CARRUSEL DE APRENDIZAJE REAL
===================================================== */

const realSlides = [
  {
    img: "img/CURSO1.png",
    text: "Trabajo práctico en aula con acompañamiento docente",
  },
  {
    img: "img/curso2.png",
    text: "Proyectos colaborativos para fomentar el trabajo en equipo",
  },
  {
    img: "img/Grupo_Final.png",
    text: "Asistencia y retroalimentación en proyectos colaborativos",
  },
];

let realCurrentSlide = 0;

// Mostrar / ocultar carrusel
function toggleRealCarousel() {
  document.getElementById("real-carousel").classList.toggle("hidden");
}

// Actualiza imagen + texto
function updateRealSlide() {
  document.getElementById("real-carousel-image").src =
    realSlides[realCurrentSlide].img;

  document.getElementById("real-carousel-caption").innerText =
    realSlides[realCurrentSlide].text;
}

// Siguiente slide
function nextRealSlide(event) {
  event.stopPropagation();
  realCurrentSlide = (realCurrentSlide + 1) % realSlides.length;
  updateRealSlide();
}

// Slide anterior
function prevRealSlide(event) {
  event.stopPropagation();
  realCurrentSlide =
    (realCurrentSlide - 1 + realSlides.length) % realSlides.length;
  updateRealSlide();
}
