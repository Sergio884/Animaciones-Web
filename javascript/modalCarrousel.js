// script.js
const carousel = document.querySelector(".carousel");
const grid = document.querySelector(".grid");
const modal = document.querySelector(".modal");
const modalImg = document.querySelector(".modal-img");
const closeBtn = document.querySelector(".close-btn");
const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");

let images = Array.from(grid.querySelectorAll("img"));
let currentIndex = 0;

// Abrir modal con imagen ampliada
function openModal(index) {
  modalImg.src = images[index].src;
  modal.style.display = "block";
  currentIndex = index;
}

// Cerrar modal
function closeModal() {
  modal.style.display = "none";
}

// Event listeners para abrir y cerrar el modal
grid.addEventListener("click", (e) => {
  if (e.target.tagName === "IMG") {
    const index = images.indexOf(e.target);
    openModal(index);
  }
});

closeBtn.addEventListener("click", closeModal);
modal.addEventListener("click", (e) => {
  if (e.target === modal) {
    closeModal();
  }
});

// Navegación del carrusel dentro del modal
document.addEventListener("keydown", (e) => {
  if (modal.style.display === "block") {
    if (e.key === "ArrowRight") {
      navigateCarousel(1);
    } else if (e.key === "ArrowLeft") {
      navigateCarousel(-1);
    }
  }
});

// Función para navegar el carrusel dentro del modal
function navigateCarousel(direction) {
  currentIndex = (currentIndex + direction + images.length) % images.length;
  modalImg.src = images[currentIndex].src;
}

// Event listeners para los controles de flecha en el modal
prevBtn.addEventListener("click", () => navigateCarousel(-1));
nextBtn.addEventListener("click", () => navigateCarousel(1));
