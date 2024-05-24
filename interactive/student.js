import people from './people.js';


export default class student extends people {
  constructor(name, lastname, document, instructor) {
    super(name, lastname, document); 
    this.instructor = instructor;
  }

  getCurso1() {
    return this.instructor;
  }
}
