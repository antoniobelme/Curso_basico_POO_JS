import { PlatziClass } from "./main.mjs"; 

const clase67 = new PlatziClass({
    name: "JS: orientado a objetos, basadps en prototipos",
    videoID: "sdfg",
});

clase67.reproducir();
clase67.pausar();

clase67.reproducir();
clase67.pausar();

clase67.reproducir();
clase67.pausar();


class Course {
    constructor({
      name,
      classes = [],
    }) {
      this._name = convertirMayuscula(name);
      this.classes = classes;
    }
  
    get name() {
      return this._name;
    }
  
    set name(nuevoNombrecito) {
      if (typeof nuevoNombrecito === 'string') {
        if (nuevoNombrecito !== '') {
          this._name = convertirMayuscula(nuevoNombrecito);
        }
      } else {
        console.error('El nombre debe ser una cadena de texto.');
      }
    }
  }
  
function convertirMayuscula(palabra) {
    return palabra
    .split(' ')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' '); 
}

const courseName = "curso de programación básica";
const nombreMaysuculas = new Course({ name: courseName });
nombreMaysuculas.name
console.log(nombreMaysuculas.name);




class Person {
  constructor(name, age) {
      this._name = name;
      this._age = age;
  }

  // Getter para la propiedad name
  get name() {
      return this._name;
  }

  // Setter para la propiedad name
  set name(newName) {
      if (typeof newName === 'string') {
          this._name = newName;
      }
  }

  // Getter para la propiedad age
  get age() {
      return this._age;
  }

  // Setter para la propiedad age
  set age(newAge) {
      if (typeof newAge === 'number' && newAge > 0) {
          this._age = newAge;
      }
  }
}

const person = new Person('Ana', 30);
console.log(person.name); // John

person.name = 'Jane';
console.log(person.name); // Jane

person.age = 35;
console.log(person.age);  // 35

person.age = -10; // No se cambia debido a la validación en el setter
console.log(person.age);  // 35