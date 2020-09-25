let nav_burder = document.querySelector(".burger");
let menu = document.querySelector(".header-menu");
let body = document.querySelector("body");

nav_burder.onclick = function () {
  nav_burder.classList.toggle('active');
  menu.classList.toggle('active');
  body.classList.toggle('lock');
};

let home_btn = document.querySelector('.home-btn');
let popup = document.querySelector('.popup');


home_btn.onclick = function (){
  popup.classList.add('show');

};

let popup__close = document.querySelector('.popup__close');

popup__close.onclick = function () {
  popup.classList.remove('show')
};


/*$('a.modal_btn').click(function (e){
  e.preventDefault();
  var destinationPopup = $(this).arrt("href");
  $(destinationPopup).addClass('show')
})*/