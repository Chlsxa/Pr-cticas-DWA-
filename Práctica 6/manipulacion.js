//obtener elemento por ID

let parrafo = document.getElementById(miParrafo);
console.log(parrafo.textContent);

let boton = document.getElementById("miBoton");
boton.addEventListener("Click", function(){
    parrafo.textContent = "Texto Actualizado";
    console.log(parrafo.textContent);
})