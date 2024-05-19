import people from './people.js';


export default class student extends people {
  constructor(name, lastname, document, cursosa) {
    super(name, lastname, document); 
    this.cursosa = cursosa;
  }

  getCurso1() {
    return this.cursosa;
  }
}
