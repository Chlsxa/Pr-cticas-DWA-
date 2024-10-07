var nuevaTareaInput = document.getElementById("nuevaTarea");
var agregarBtn = document.getElementById("agregarBtn");
var listaTareas = document.getElementById("listaTareas");

agregarBtn.addEventListener("click", function(){
    var textoTarea = nuevaTareaInput.value;

    if(textoTarea !== ""){
        var nuevaTarea = document.createElement("li");
        nuevaTarea.classList.add("tarea");

        var spanTexto = document.createElement("span");
        spanTexto.textContent = textoTarea;
        nuevaTarea.appendChild(spanTexto);

        var divBotones = document.createElement("div");

        var eliminarBtn = document.createElement("button");
        eliminarBtn.classList.add("eliminarBtn");
        eliminarBtn.textContent = "Eliminar";

        eliminarBtn.addEventListener("click", function(){
            listaTareas.removeChild(nuevaTarea);
        });

        var modificarBtn = document.createElement("button");
        modificarBtn.classList.add("modificarBtn");
        modificarBtn.textContent = "Modificar";

        modificarBtn.addEventListener("click", function(){
            if (modificarBtn.textContent === "Modificar"){
                modificarBtn.textContent = "Guardar";

                var inputModificacion = document.createElement("input");
                inputModificacion.type = "text";
                inputModificacion.value = spanTexto.textContent;
                nuevaTarea.replaceChild(inputModificacion, spanTexto);
            } else {
                modificarBtn.textContent = "Modificar";

                var nuevoTexto = nuevaTarea.firstChild.value;
                spanTexto.textContent = nuevoTexto;

                nuevaTarea.replaceChild(spanTexto, nuevaTarea.firstChild);
            }
        });

        divBotones.appendChild(modificarBtn);
        divBotones.appendChild(eliminarBtn);

        nuevaTarea.appendChild(divBotones);
        listaTareas.appendChild(nuevaTarea);

        nuevaTareaInput.value = "";
    } else {
        alert("Por favor, ingresa una tarea.");
    }
});
