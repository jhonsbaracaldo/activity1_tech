import Instructor from '../interactive/instructor.js';
import Student from '../interactive/student.js';
import Course from '../interactive/course.js';

document.addEventListener('DOMContentLoaded', () => {
    // Función para mostrar la lista de cursos guardados en el localStorage
    function mostrarCursos() {
        const cursosGuardados = JSON.parse(localStorage.getItem('cursos')) || [];
        const listaCursos = document.getElementById('listaCursos');
        const selectCursos = document.getElementById('cursos');

        listaCursos.innerHTML = '';
        selectCursos.innerHTML = ''; // Limpiar opciones previas

        cursosGuardados.forEach(curso => {
            const li = document.createElement('li');
            li.textContent = `${curso.title} - ${curso.description}`;
            listaCursos.appendChild(li);

            const option = document.createElement('option');
            option.value = curso.title;
            option.textContent = curso.title;
            selectCursos.appendChild(option);
        });
    }

    // Obtener la lista de cursos al cargar la página
    mostrarCursos();

    // Evento para enviar el formulario de estudiante
    document.getElementById('Formstudent').addEventListener('submit', (event) => {
        event.preventDefault();

        const studentName = document.getElementById('name').value;
        const studentLastname = document.getElementById('lastname').value;
        const selectedCourseTitle = document.getElementById('cursos').value;

        const cursosGuardados = JSON.parse(localStorage.getItem('cursos')) || [];
        const cursoSeleccionado = cursosGuardados.find(curso => curso.title === selectedCourseTitle);

        if (cursoSeleccionado) {
            const instructor = new Instructor(cursoSeleccionado.instructorName, cursoSeleccionado.instructorLastname, cursoSeleccionado.title);
            const student = new Student(studentName, studentLastname, instructor);

            registrarEstudiante(student);
            mostrarEstudiante(student);
        } else {
            alert('Curso no encontrado.');
        }
    });

    // Función para registrar el estudiante en el localStorage
    function registrarEstudiante(student) {
        const estudiantesGuardados = JSON.parse(localStorage.getItem('estudiantes')) || [];
        estudiantesGuardados.push(student);
        localStorage.setItem('estudiantes', JSON.stringify(estudiantesGuardados));
    }

    // Función para mostrar la información del estudiante registrado recientemente
    function mostrarEstudiante(student) {
        const output = document.getElementById('output');
        output.innerHTML = `
            <p>Estudiante: ${student.name} ${student.lastname}</p>
            <p>Curso: ${student.instructor.course}</p>
            <p>Docente: ${student.instructor.name} ${student.instructor.lastname}</p>
        `;
    }

    // Evento para mostrar todos los estudiantes registrados
    document.getElementById('mostrarEstudiantesButton').addEventListener('click', () => {
        mostrarEstudiantes();
    });

    // Función para mostrar todos los estudiantes registrados
    function mostrarEstudiantes() {
        const estudiantesGuardados = JSON.parse(localStorage.getItem('estudiantes')) || [];
        const listaEstudiantes = document.getElementById('listaEstudiantes');
        listaEstudiantes.innerHTML = '';

        estudiantesGuardados.forEach(student => {
            const li = document.createElement('li');
            li.innerHTML = `
                <p>Estudiante: ${student.name} ${student.lastname}</p>
                <p>Curso: ${student.instructor.course}</p>
                <p>Docente: ${student.instructor.name} ${student.instructor.lastname}</p>
            `;
            listaEstudiantes.appendChild(li);
        });
    }

    // Mostrar la lista de estudiantes al cargar la página
    mostrarEstudiantes();
});
