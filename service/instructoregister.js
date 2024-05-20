import Instructor from '../interactive/instructor.js';
// Elimina la importación de coleccionCursos de './registerCourse.js'

// Recuperar la lista de cursos del localStorage
const coleccionCursos = JSON.parse(localStorage.getItem('cursos')) || [];

document.addEventListener('DOMContentLoaded', () => {
    // Obtener la lista de cursos al cargar la página
    obtenerListaCursos();

    // Agregar evento al botón para mostrar la lista de cursos
    document.getElementById('mostrarCursosButton').addEventListener('click', () => {
        mostrarCursos();
    });

    document.getElementById('FormInstructor').addEventListener('submit', (event) => {
        event.preventDefault();
        
        const name = document.getElementById('name').value;
        const lastname = document.getElementById('lastname').value;
        const cursoSeleccionado = document.getElementById('cursos').value; // Asegúrate de que el ID sea correcto
        let instructor;

        // Crear una instancia del instructor
        instructor = new Instructor(name, lastname, cursoSeleccionado);

        if (instructor) {
            // Mostrar la información del instructor
            displayOutput(name, lastname, cursoSeleccionado);
        }
    });
});

function obtenerListaCursos() {
    // Obtener la lista de cursos guardados
    // Comentamos esta parte porque ya tenemos la lista de cursos desde el localStorage
    // const coleccionCursos = document.querySelectorAll('#coleccion-cursos li');
    const selectCurso = document.getElementById('cursos');

    // Limpiamos las opciones anteriores, si las hay
    selectCurso.innerHTML = '';

    // Agregar cada nombre de curso como opción en el campo de selección de cursos
    coleccionCursos.forEach(curso => {
        const option = document.createElement('option');
        option.text = curso.title; // Asegúrate de utilizar el atributo correcto para el título del curso
        selectCurso.add(option);
    });
}

function mostrarCursos() {
    const listaCursos = document.getElementById('listaCursos');
    listaCursos.innerHTML = ''; // Limpiamos la lista antes de agregar los cursos nuevamente

    // Agregamos cada curso como un elemento de lista
    coleccionCursos.forEach(curso => {
        const li = document.createElement('li');
        li.textContent = curso.title; // Asegúrate de utilizar el atributo correcto para el título del curso
        listaCursos.appendChild(li);
    });
}

function displayOutput(name, lastname, cursoSeleccionado) {
    const outputDiv = document.getElementById('output');
    const paragraph = document.createElement('p');

    if (cursoSeleccionado) {
        paragraph.textContent = `Nombre: ${name}, Apellido: ${lastname}, Curso: ${cursoSeleccionado}`;
    } else {
        paragraph.textContent = `Nombre: ${name}, Apellido: ${lastname}, No hay información sobre el curso`;
    }

    outputDiv.appendChild(paragraph);
}
