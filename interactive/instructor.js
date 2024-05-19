// Instructor.js
import People from './people.js'; // Cambio de people a People
import Course from './course.js'; // Cambio de Course a Course (en minúscula según el archivo)

export default class Instructor extends People { // Cambio de instructor a Instructor
  constructor(name, lastname, document, course) { // Cambio de Course a course
    super(name, lastname, document);
    this.course = course; // Cambio de Course a course
  }

  getCourse() {
    return this.course;
  }
  setCourse(course) {
    this.course = course;
  }

  getCourseDetails() {
    if (this.course instanceof Course) {
      return this.course.getCourseDetails();
    } else {
      return 'No hay información sobre el curso.';
    }
  }
}
