const natalia = {
    name: "Natalia",
    age: 20,
    cursosAprobados: [
        "Curso definitivo de HTML y CSS",
        "Curso práctico de HTML y CSS",
    ],

    // Hay dos formas de agregar un metodo a un objeto
    // aprobados: function(){

    // },
    // LA otra forma

    aprobarCursos(NuevoCurso) {
        // this. hace referencia al atributo dentro del mismo objeto, reemplazando el nombre del objeto por la palabra reservada.
        this.cursosAprobados.push(NuevoCurso);
    },
};

// Hacer que Natalia apruebe otro curso

natalia.cursosAprobados.push("Curso de Responsive Design");
natalia.aprobarCursos("Curso de CSS Grid");

// Creación del prototipo

function Student(name, age, cursosAprobados) {
    this.name = name;
    this.age = age;
    this.cursosAprobados = cursosAprobados;

    //Esta es una forma de crear metodos en el prototipo.
    // this.cursosAprobados = function (NuevoCurso) {
    //     this.cursosAprobados.push(NuevoCurso);
    // }
}

// Esta es otra forma de crear un metodo en el prototipo fuera del mismo.

Student.prototype.aprobarCursos = function (NuevoCurso) {
    this.cursosAprobados.push(NuevoCurso);
};

// Creación de una instancia del prototipo

const juanita = new Student(
    "Juanita Alejanda",
    20,
    [
        "Curso de Introducción a la producción de Videojuegos",
        "Curso de Responsive Design",
    ]
);

// prototipos con la sintaxis de clases

class Student2 {
    // se pueden recibir un parametro en vez de varios parametros, este puede ser un objeto.
    // se pueden recibir parametros con valores por defecto como un array vacío.
    constructor({
        name, 
        age, 
        cursosAprobados
    }){
        this.name = name;
        this.age = age;
        this.cursosAprobados = cursosAprobados;
    }

    aprobarCurso(NuevoCurso){
        this.cursosAprobados.push(NuevoCurso);
    }
}

const miguelito = new Student2(
    // Cuando se llame al objeto miguelito, no se envian varios parametros, mas bien se envia un objeto literal.
    {
        name: "Miguel",
        age:  28,
        cursosAprobados: [
            "Curso de Introducción a la producción de Videojuegos",
            "Curso de Responsive Design",
        ]
    }
)