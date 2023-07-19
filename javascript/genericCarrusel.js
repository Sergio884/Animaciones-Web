const slide = document.querySelector('.carousel-slide');
const prevButton = document.querySelector('.carousel-prev');
const nextButton = document.querySelector('.carousel-next');

let slidePosition = 0;
let slidesVisible = 2;
const slideMargin = parseInt(getComputedStyle(slide.children[0]).marginRight);
let slideWidth = 0;
let maxSlidePosition = 0;

function updateSlideWidth() {
  slideWidth = slide.children[0].offsetWidth + slideMargin;
}

function updateSlidesVisible() {
  const containerWidth = slide.parentElement.offsetWidth;
  slidesVisible = Math.floor(containerWidth / slideWidth);
  maxSlidePosition = slide.children.length - slidesVisible;
}

function updateSlidePosition() {
  slide.style.transform = `translateX(-${slidePosition * slideWidth}px)`;
}

function moveSlide() {
  updateSlideWidth();
  updateSlidesVisible();
  updateSlidePosition();
}

prevButton.addEventListener('click', () => {
  if (slidePosition === 0) return;
  slidePosition--;
  updateSlidePosition();
});

nextButton.addEventListener('click', () => {
  if (slidePosition === maxSlidePosition) return;
  slidePosition++;
  updateSlidePosition();
});

window.addEventListener('resize', moveSlide);
moveSlide();