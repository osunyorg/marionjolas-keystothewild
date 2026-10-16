

var zombieHeadImg = document.createElement('img');
zombieHeadImg.id = 'zombieHeadImg';
zombieHeadImg.src = '/assets/img/0.png';
var menuContainer = document.querySelector(
  '#document-header .primary-menu .container'
); 

menuContainer.appendChild(zombieHeadImg);

if (document.body.classList.contains('page__home')) {

zombieHeadImg.classList.add('centered');
  
var MAX_SCROLL = 100;

  window.addEventListener('scroll', function () {
  if (window.scrollY <= MAX_SCROLL){
    zombieHeadImg.classList.add('centered');
  } else {
    zombieHeadImg.classList.remove('centered');
  }
});
  
} else {
  
}

var RANGE = 5;

function getIndexFromMouseX(mouseX) {
  var width = window.innerWidth;
  var center = width / 2;


  var normalized = (mouseX - center) / center;
  var clamped = Math.max(-1, Math.min(1, normalized));

  return Math.round(clamped * RANGE);
}


window.addEventListener('mousemove', function (event) {
  var index = getIndexFromMouseX(event.clientX);
  zombieHeadImg.src = '/assets/images/Zombies/' + index + '.png';
});