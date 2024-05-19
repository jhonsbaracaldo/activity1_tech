import Instructor from '../interactive/instructor.js';

document.getElementById('FormInstructor').addEventListener('submit', function(event) {
  event.preventDefault();
  
  const name = document.getElementById('name').value;
  const lastname = document.getElementById('lastname').value;
  const cursos = document.getElementById('cursos').value;
  let people;

  // Crear una instancia del instructor
  people = new Instructor(name, lastname, cursos);

  if (people) {
    displayOutput(name, lastname, cursos);
  }
});

function displayOutput(name, lastname, cursos) {
  const outputDiv = document.getElementById('output');
  const paragraph = document.createElement('p');

  if (cursos) {
    paragraph.textContent = `Nombre: ${name}, Apellido: ${lastname}, Cursos: ${cursos}`;
  } else {
    paragraph.textContent = `Nombre: ${name}, Apellido: ${lastname}, ${'No hay información sobre el curso'}`;
  }

  outputDiv.appendChild(paragraph);
}
