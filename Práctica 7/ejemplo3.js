//Objeto que contiene propiedades con otros objetos

const estudiante ={
    nombre: "Chelsea",
    edad: 18,
    direccion:
    {
        calle: "Residencial San Francisco",
        cuidad: "San Miguel"
    },
    materia: ["Matemáticas", "Programación", "Fisíca"]
};

//Acceso de las propiedades anidadas
console.log(estudiante.direccion. cuidad);
console.log(estudiante.materia[2]);