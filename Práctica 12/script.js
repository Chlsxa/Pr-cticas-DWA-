const infoParrafo = document.getElementById("info");
const modificarBtn = document.getElementById("modificar-btn");
const guardarBtn = document.getElementById("guardar-btn");
const crearParrafoBtn = document.getElementById("crear-parrafo-btn");
const crearBotonBtn = document.getElementById("crear-boton-btn");
const contenedor = document.getElementById("contenedor");


window.onload = function(){
    const textoGuardado = localStorage.getItem("textoInfo");
    if (textoGuardado) {
        infoParrafo.textContent = textoGuardado;
    }

    const elementosGuardados = localStorage.getItem("contenedorHTML");
    if(elementosGuardados){
        contenedor.innerHTML = elementosGuardados;
    }
};

function modificarTexto(){
    const nuevoTexto = prompt("Introduce el nuevo texto: ");
    if(nuevoTexto) {
        infoParrafo.textContent = nuevoTexto;
        console.log("Texto modificado:", infoParrafo.textContent);
    }
}

function guardarCambios(){
    localStorage.setItem("textoInfo", infoParrafo.textContent); 
    localStorage.setItem("contenedorHTML", contenedor.textContent); 
    alert("Cambios han sido guardados con exito");
}

function agregarParrafo() {
    const nuevoParrafo = document.createElement("p");
    nuevoParrafo.textContent = "Este es un nuevo párrafo creado dinamicamente.";
    contenedor.appendChild(nuevoParrafo);
    console.log("Parrafo añadido:", nuevoParrafo);
}


function agregarBotonConEvento(){
    const nuevoBoton = document.createElement("button");
    nuevoBoton.textContent = "Boton Dinamico";

    nuevoBoton.addEventListener("click", () => {
        alert("¡Has hecho clic en el boton dinamico");
    });

    contenedor.appendChild(nuevoBoton);
    console.log("Boton añadido con evento:", nuevoBoton);
}

modificarBtn.addEventListener("click", modificarTexto);
guardarBtn.addEventListener("click", guardarCambios);
crearParrafoBtn.addEventListener("click", agregarParrafo);
crearBotonBtn.addEventListener("click", agregarBotonConEvento);
