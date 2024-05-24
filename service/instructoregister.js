import Instructor from '../interactive/instructor.js';

document.addEventListener('DOMContentLoaded', () => {
    // Función para mostrar la lista de cursos guardados en el localStorage
    function mostrarCursos() {
        const cursosGuardados = JSON.parse(localStorage.getItem('cursos')) || [];
        const listaCursos = document.getElementById('listaCursos');
        listaCursos.innerHTML = '';
        cursosGuardados.forEach(curso => {
            const li = document.createElement('li');
            li.textContent = curso.title; // Asegúrate de que 'title' es el campo correcto del curso
            listaCursos.appendChild(li);
        });
    }

    // Obtener la lista de cursos al cargar la página
    mostrarCursos();

    // Recuperar la información del localStorage para el instructor
    const nombre = localStorage.getItem('nombre');
    const email = localStorage.getItem('email');

    // Verificar si se encontraron los datos en el localStorage
    if (nombre && email) {
        // Establecer los valores recuperados en los elementos HTML
        document.getElementById('titulo').innerText = nombre;
        document.getElementById('descripcion').innerText = email;
    } else {
        console.log('Los datos no se encontraron en el localStorage.');
    }

    // Agregar evento al botón para mostrar la lista de cursos
    document.getElementById('mostrarCursosButton').addEventListener('click', () => {
        mostrarCursos();
    });

    // Evento para enviar el formulario de instructor
    document.getElementById('FormInstructor').addEventListener('submit', (event) => {
        event.preventDefault();

        const name = document.getElementById('name').value;
        const lastname = document.getElementById('lastname').value;
        const cursoSeleccionado = document.getElementById('cursos').value; // Asegúrate de que el ID sea correcto

        // Crear una instancia del instructor
        const instructor = new Instructor(name, lastname, cursoSeleccionado);

        if (instructor) {
            // Mostrar la información del instructor
            displayOutput(name, lastname, cursoSeleccionado);
        }
    });

    // Función para mostrar la información del instructor
    function displayOutput(name, lastname, cursoSeleccionado) {
        const output = document.getElementById('output');
        output.innerHTML = `
            <p>Nombre: ${name}</p>
            <p>Apellido: ${lastname}</p>
            <p>Curso Seleccionado: ${cursoSeleccionado}</p>
        `;
    }
});
