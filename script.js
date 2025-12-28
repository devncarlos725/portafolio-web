/* ================= FONDO DE ESTRELLAS ================= */

/*
 Genera estrellas de forma aleatoria en el fondo.
 Cantidad: 100
 Posición: aleatoria en pantalla
 Animación: parpadeo (twinkle)
*/

const starsContainer = document.getElementById("stars");

for (let i = 0; i < 100; i++) {
  const star = document.createElement("div");

  // Asigna la clase CSS que define tamaño y animación
  star.className = "star";

  // Posición aleatoria en pantalla
  star.style.left = Math.random() * 100 + "%";
  star.style.top = Math.random() * 100 + "%";

  // Retraso aleatorio para que no parpadeen todas juntas
  star.style.animationDelay = Math.random() * 3 + "s";

  starsContainer.appendChild(star);
}

/* ================= SCROLL SUAVE ================= */

/*
 Mejora la experiencia de usuario:
 cuando se hace click en enlaces internos (#),
 el desplazamiento es animado y no brusco
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

/* ================= CARRUSEL GAMIFICACIÓN ================= */

// Slides del carrusel
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

// Cambiar imagen
function updateSlide() {
  document.getElementById("carousel-image").src = slides[currentSlide].img;
  document.getElementById("carousel-caption").innerText =
    slides[currentSlide].text;
}

// Slide siguiente
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

/* ================= CARRUSEL APRENDIZAJE REAL ================= */

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

function toggleRealCarousel() {
  document.getElementById("real-carousel").classList.toggle("hidden");
}

function updateRealSlide() {
  document.getElementById("real-carousel-image").src =
    realSlides[realCurrentSlide].img;

  document.getElementById("real-carousel-caption").innerText =
    realSlides[realCurrentSlide].text;
}

function nextRealSlide(event) {
  event.stopPropagation();
  realCurrentSlide = (realCurrentSlide + 1) % realSlides.length;
  updateRealSlide();
}

function prevRealSlide(event) {
  event.stopPropagation();
  realCurrentSlide =
    (realCurrentSlide - 1 + realSlides.length) % realSlides.length;
  updateRealSlide();
}
