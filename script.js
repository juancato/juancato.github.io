// Obtenemos el header y la posición del nombre
const header = document.getElementById('sticky-header');
const nameSection = document.querySelector('h1');

// Verificamos la posición al hacer scroll
window.addEventListener('scroll', function() {
  // Verificamos si hemos pasado el nombre (h1) al hacer scroll
