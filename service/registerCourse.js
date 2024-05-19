import Course from '../interactive/course';


function saveCourse() {
    const title = document.getElementById('titulo').value;
    const description = document.getElementById('descripcion').value;
    const duration = document.getElementById('duracion').value;
    
    const newCourse = new Course(title, description, duration);
    alert('Datos del curso guardados: ' + newCourse.getCourse());
}


document.getElementById('formulario').addEventListener('submit', (event) => {
    event.preventDefault(); 
    saveCourse(); 
});