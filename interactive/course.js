// interactive/course.js
export default class Course {
  constructor(title, description, duration) {
      this.title = title;
      this.description = description;
      this.duration = duration;
  }

  getCourse() {
      return `${this.title}, Descripción: ${this.description}, Duración: ${this.duration}`;
  }
}