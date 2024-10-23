function procesarUsuario(nombre, edad, ...otrosDatos){
    let usuarioFormateado = {
        nombre,
        edad,

        infoAdicional: { ...otrosDatos}
    };
    return usuarioFormateado;
}

let usuario = procesarUsuario("Maria", 30, "Ingenieria", "España", "marzo 2024");

console.log(usuario);