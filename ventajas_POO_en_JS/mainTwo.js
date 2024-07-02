class comment {
    constructor({
        content,
        studentName,
        studentRole = "estudiante",
    }) {
        this.content = content;
        this.studentName = studentName;
        this.studentRole = studentRole;
        this.likes = 0;
    }

    publicar() {
        console.log(this.studentName + " (" + this.StudentRole + ")");
        console.log(this.likes + " likes");
        console.log(this.content);
    }
}


// Es necesario cambiar la extensión del archivo JS por .mjs
function videoPlay(id) {
    const urlSecreta = "https:platzi.com" + id;
    console.log("Se está reproduciendo desde la url " + urlSecreta);
}

function videoStop(id) {
    const urlSecreta = "https:platzi.com" + id;
    console.log("Pausamos la reproducción del video " + urlSecreta);
}

// "export" permite definir en los módulos de Js cuales son las unicas partes (funciones, objetos, clases, etc) de este archivo JS que debemos poder acceder o ejecutar desde cualquier otro script en nuestro código. 
// export class PlatziClass {
class PlatziClass {
    constructor({
        name, 
        videoID,
    }){
        this.name = name;
        this.videoID = videoID;
    }

    reproducir(){
        videoPlay(this.videoID);
    }
    pausar() {
        videoStop(this.videoID);
    }

}

// Usando POO

// Getter y setters en JS
// Es posible crear convenciones para estblecer que atributos deben o no ser llamados. Para este contexto se usará el "_".
class Course {
    constructor({
        name,
        classes = [],
        isFree = false,
        lang = "spanish",
    }){
        // convención
        this._name = name;
        this.classes = classes;
        this.isFree = isFree;
        this.lang = lang;
    }

    get name(){
        return this._name;
    }

    // Lo siguiente permite cambiar el nombre del curso
    set name(nuevoNombrecito) {
        if (nuevoNombrecito === "Curso malito de programación") {
            console.error("Mensaje")
        } else {
            this._name = nuevoNombrecito;
        }
    }
}

// Si se quiere llamar al atributo "name" se debe usar la siguiente síntaxis
// cursoProgBasica.name

// Si se quiere cambiar el nombre del curso, se debe usar el "set" deltro de la calse y usar la siguiente síntaxis.
// this._name = "Nombre del curso";

// llamado para cambiar nombre del curso
// cursoProgBasica.changeName("Nombre del curso");

const cursoProgBasica = new Course({
    name: "Curso gratis de programación básica",
    isFree: true,
});

const cursoDefinitivoHTML = new Course({
    name: "Curso definitivo de HTML y CSS",
});

const cursoPracticoHTML = new Course({
    name: "Curso práctico de HTML y CSS",
    lang: "english",
});

class LearningPath {
    constructor({
        name,
        courses = [],
    }){
        this.name = name;
        this.courses = courses;
    }
}

const escuelaWeb = new LearningPath ({
    name: "Escuela de desarrollo Web",
    courses: [
        cursoProgBasica,
        "Curso definitivo de HTML",
        "Curso definitivo de CSS",
    ]
})

const escuelaData = new LearningPath ({
    name: "Escuela de Data Science",
    courses: [
        cursoProgBasica,
        "Curso definitivo de HTML",
        "Curso definitivo de CSS",
    ]
})

const escuelaVideoJuegos = new LearningPath ({
    name: "Escuela de VideoJuegos",
    courses: [
        cursoProgBasica,
        "Curso definitivo de HTML",
        "Curso definitivo de CSS",
    ]
})


class Student {
    constructor({
        name, 
        email, 
        username,
        twitter,
        instagram, 
        approvedCuorses = [],
        learningPaths = [],
    }) {
        this.name = name;
        this.email = email;
        this.username = username;
        this.socialMedia = {
            twitter,
            instagram,
        };
        this.approvedCuorses = approvedCuorses;
        this.learningPaths = learningPaths;
    }

    publicarComentario(commentContent) {
        const comment = new Comment({
            content: commentContent,
            studentName: this.name, 
        });
        comment.publicar();
    };
};

class FreeStudent extends Student{
    constructor(props) {
        // super(), es una palabra reservada que va a permitir referenciar o llamar al constructor de la clase mandre.
        super(props);
    };

    approveCourse(newCourse) {
        if (newCourse.isFree) {
            this.approvedCuorses.push(newCourse);
        } else {
            console.warn("Lo sentimos, " + this.name + ", solo puedes tomar cursos abiertos.");
        }
    };
};

class BasicStudent extends Student{
    constructor(props) {
        super(props);
    }

    approveCourse(newCourse) {
        if (newCourse.lang !== "english") {
            this.approvedCuorses.push(newCourse);
        } else {
            console.warn("Lo sentimos, " + this.name + ", no puedes tomar cursos en inglés.");
        }
    };
};

class ExpertStudent extends Student{
    constructor(props) {
        super(props);
    }

    approveCourse(newCourse) {
        this.approvedCuorses.push(newCourse);
    };
};


class teacherStudent extends Student{
    constructor(props) {
        super(props);
    }

    approveCourse(newCourse) {
        this.approvedCuorses.push(newCourse);
    };

    publicarComentario(commentContent) {
        const comment = new Comment({
            content: commentContent,
            studentName: this.name, 
            studentRole: "profesor"
        });

        comment.publicar();
    };
};

const freddy = new teacherStudent({
    name: "Fredy Vega",
    email: "fgep@gmail.com",
    username: "Frediert",
    twitter: "Frediert_00",
});

const juan2 = new FreeStudent({
    name: "JuanDC",
    email: "JuanDC@gmail.com",
    username: "JuanDC",
    twitter: "JuanDC",
    learningPaths: [
        escuelaWeb,
        escuelaVideoJuegos,
    ],
});

const miguelito = new BasicStudent({
    name: "Miguelito",
    email: "Miguelito@gmail.com",
    username: "miguelitoFeliz",
    instagram: "miguelito_Feliz",
    learningPaths: [
        escuelaWeb,
        escuelaVideoJuegos,
    ],
});

// Esta forma de programar resultario muy poco escalable.
// const juan1 = {
//     name: "JuanDC",
//     username: "juandc",
//     pionst: 100,
//     socialMejia: {
//         twitter: "fjuandc",
//         instagram: "fjuandc",
//         facebook: "fjuandc",
//     },
//     approvedCourses: [
//         "historia",
//         "historia 2",
//         "historia 3",
//         "historia 4",
//     ],
//     learningPaths: [
//         {
//             name: "Historia",
//             courses: [
//                 "historia",
//                 "historia 2",
//                 "historia 3",
//                 "historia 4",
//             ]
//         },
//     ]
// };

// const miguelito1 = {
//     name: "MiguelDC",
//     username: "migueldc",
//     pionst: 1000,
//     socialMejia: {
//         twitter: "migueldc",
//         instagram: "migueldc",
//         facebook: "fmigueldc",
//     },
//     approvedCourses: [
//         "historia",
//         "historia 2",
//         "historia 3",
//         "historia 4",
//         "historia del arte",
//     ],
//     learningPaths: [
//         {
//             name: "Historia",
//             courses: [
//                 "historia",
//                 "historia 2",
//                 "historia 3",
//                 "historia 4",
//             ]
//         },
//     ],
// };