let estudiantes = [
    {nombre: "Ana", nota: 8},
    {nombre: "Carlos", nota: 9},
    {nombre: "Luis", nota: 7}
];

let estudiantesModificados = estudiantes.map(estudiantes =>
    estudiantes.nombre === "Luis"
    ? {...estudiantes, nota: 9}
    : {...estudiantes}
);

console.log(estudiantesModificados);

console.log(estudiantes);