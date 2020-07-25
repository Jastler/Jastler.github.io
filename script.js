let nav_burder = document.querySelector(".burger");
let menu = document.querySelector(".header-menu")
let body = document.querySelector("body")

nav_burder.onclick = function () {
  nav_burder.classList.toggle('active');
  menu.classList.toggle('active');
  body.classList.toggle('lock')
}
