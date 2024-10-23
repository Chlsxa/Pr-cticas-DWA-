let productos = [
    {nombre: "Laptop", precio: 800, categoria: "Electrónica"},
    {nombre: "Bicicleta", precio: 300, categoria: "Deportes"},
    {nombre: "Teléfono", precio: 500, categoria: "Electrónica"},
    {nombre: "Zapatillas", precio: 100, categoria: "Deportes"},
];

function filtrarProductosPorCategoria(categoria, ...ListaProductos){
    let filtrados = ListaProductos.filter(productos => productos.categoria === categoria);
    let precios = filtrados.map(productos => productos.precio);

    return{
        categoria,
        productosFiltrados: filtrados,
        precios: [...precios]
    };
}

let resultados = filtrarProductosPorCategoria("Electrónica", ...productos);

console.log(resultados);