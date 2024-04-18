window.addEventListener('scroll', function() {
    var navbar = document.getElementById('deNev');
    if (window.pageYOffset > 0) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
});
function toggleMenu() {
  var menu = document.querySelector('.smolNev');
  menu.classList.toggle('open');
}

function Parametres() {
  var navbar = document.getElementById('deNev');
  var menu = document.querySelector('.minou');
  var nev = document.querySelector('.smolNev');
  nev.classList.toggle('hide');
  menu.classList.toggle('open');
  navbar.classList.toggle('hide')
}


function Darkk() {
  var menu = document.querySelector('.tikk');
  menu.classList.toggle('yus');
  var menu = document.querySelector('.notikk');
  menu.classList.toggle('nop');  
}



function drkon(){
  var root = document.documentElement;
  root.style.setProperty('--prim','black');
  root.style.setProperty('--txt','white');
  root.style.setProperty('--fltr','rgba( 0, 0, 0, .8)')

  var menu = document.querySelector('.tik');
  menu.classList.toggle('yus');
  var menu = document.querySelector('.notik');
  menu.classList.toggle('nop');
}

function drkof(){
  var root = document.documentElement;
  root.style.setProperty('--prim','white');
  root.style.setProperty('--txt','black');
  root.style.setProperty('--fltr','rgba( 0, 0, 0, 0)')

  var menu = document.querySelector('.tik');
  menu.classList.toggle('yus');
  var menu = document.querySelector('.notik');
  menu.classList.toggle('nop');
}



function isElementInViewport(el) {
  const rect = el.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

function handleScroll() {
  const box = document.getElementById('me');

  if (isElementInViewport(box)) {
    box.classList.add('visible'); 
  }

  const boxx = document.getElementById('stdiz');

  if (isElementInViewport(boxx)) {
    boxx.classList.add('visible'); 
  }
}


window.addEventListener('scroll', handleScroll);