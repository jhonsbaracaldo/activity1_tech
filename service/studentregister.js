import student from '../interactive/student.js';

document.getElementById('Formstudent').addEventListener('submit', function(event) {
  event.preventDefault();
  
  const name = document.getElementById('name').value;
  const lastname = document.getElementById('lastname').value;
  const cursosa = document.getElementById('cursos').value;
  let people;

  // Crear una instancia del animal
  people = new student(name, lastname, cursosa); // Supongamos que siempre es un perro

  if (people) {
    displayOutput(name, lastname, cursosa); // Pasar tanto el nombre como el apellido y los cursos a displayOutput
  }
});

function displayOutput(name, lastname, cursosa) {
  const outputDiv = document.getElementById('output');
  const paragraph = document.createElement('p');
  paragraph.textContent = `Nombre: ${name}, Apellido: ${lastname}, Cursos: ${cursosa}`; // Mostrar nombre, apellido y cursos
  outputDiv.appendChild(paragraph);
}
