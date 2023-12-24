var slides = document.getElementsByClassName("slides");
var dots = document.getElementsByClassName("dot");
var currentSlide = 0;

document.getElementById("next").addEventListener("click", () => {
  changeSlide(currentSlide + 1);
});

document.getElementById("prev").addEventListener("click", () => {
  changeSlide(currentSlide - 1);
});

function changeSlide(moveTo) {
  if (moveTo >= slides.length) {
    moveTo = 0;
  }
  if (moveTo < 0) {
    moveTo = slides.length - 1;
  }
  slides[currentSlide].classList.toggle("active");
  dots[currentSlide].classList.toggle("activeDot");
  slides[moveTo].classList.toggle("active");
  dots[moveTo].classList.toggle("activeDot");
  currentSlide = moveTo;
}

document.querySelectorAll(".dot").forEach((bullet, bulletIndex) => {
  bullet.addEventListener("click", () => {
    if (currentSlide !== bulletIndex) {
      changeSlide(bulletIndex);
    }
  });
});

window.onload = setInterval(function () {
  changeSlide(currentSlide + 1);
}, 3000);
