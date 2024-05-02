let light = document.getElementById('circle');

document.getElementById('button').addEventListener('click', () => {
  light.classList.remove('flash-animation');
  setTimeout(function(){
  light.classList.add('flash-animation');
  },500);
});

let eject = document.getElementById('photo');

document.getElementById('button').addEventListener('click', () => {
  eject.classList.remove('eject-photo');
  setTimeout(function(){
  eject.classList.add('eject-photo');
  },500);
});