import Course from '../interactive/course.js';
// Eliminar esta línea duplicada
// import Course from './course.js';

document.addEventListener('DOMContentLoaded', () => {
    const coleccionCursos = JSON.parse(localStorage.getItem('cursos')) || [];

    document.getElementById('formulario').addEventListener('submit', (event) => {
        event.preventDefault();

        const title = document.getElementById('titulo').value;
        const description = document.getElementById('descripcion').value;
        const duration = document.getElementById('duracion').value;

        const newCourse = new Course(title, description, duration);
        coleccionCursos.push(newCourse); // Agregamos el nuevo curso a la colección

        localStorage.setItem('cursos', JSON.stringify(coleccionCursos)); // Guardamos la colección en el localStorage

        alert('Datos del curso guardados: ' + newCourse.getCourse());

        mostrarColeccion(); // Actualizamos la visualización de la colección

        document.getElementById('formulario').reset();
    });

    function mostrarColeccion() {
        const coleccionLista = document.getElementById('coleccion-cursos');
        coleccionLista.innerHTML = '';
        coleccionCursos.forEach(course => {
            const li = document.createElement('li');
            li.textContent = course.getCourse();
            coleccionLista.appendChild(li);
        });
    }

    // Mostrar los cursos al cargar la página
    mostrarColeccion();
});
