// Obtenemos el header y la posición del nombre
const header = document.getElementById('sticky-header');
const nameSection = document.querySelector('h1');

// Verificamos la posición al hacer scroll
window.addEventListener('scroll', function() {
  // Verificamos si hemos pasado el nombre (h1) al hacer scroll
  const scrollPosition = window.scrollY;

  // Si la posición del scroll es mayor que la distancia desde el top del título
  if (scrollPosition > nameSection.offsetTop) {
    // Añadimos la clase 'visible' para mostrar el header
    header.classList.add('visible');
  } else {
    // Si no, eliminamos la clase 'visible' para ocultarlo
    header.classList.remove('visible');
  }
});
