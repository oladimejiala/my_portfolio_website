const hamburger = document.querySelector('.hamburger');
const menu = document.querySelector('.menu');

hamburger.addEventListener('click', function() {
  this.classList.toggle('active');
  menu.classList.toggle('active');
});
