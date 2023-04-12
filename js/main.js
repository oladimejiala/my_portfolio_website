let slideIndex = 1;

function showSlide(n) {
  let slides = document.getElementsByClassName("slide");
  let buttons = document.getElementsByClassName("slider-nav")[0].getElementsByTagName("button");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (let i = 0; i < slides.length; i++) {
    slides[i].classList.remove("active");
  }
  for (let i = 0; i < buttons.length; i++) {
    buttons[i].classList.remove("active");
  }
  slides[slideIndex - 1].classList.add("active");
  buttons[slideIndex - 1].classList.add("active");
}

showSlide(slideIndex);

setInterval(function() {
  slideIndex++;
  showSlide(slideIndex);
}, 5000);
