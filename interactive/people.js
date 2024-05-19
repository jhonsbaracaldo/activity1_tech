export default class people {
  constructor(name,lastname,document) {
    this.name = name;
    this.lastname =lastname;
    this.document =document;
  }

  getName() {
    return `${this.name} ${this.lastname} ${this.document}`;
}

}
