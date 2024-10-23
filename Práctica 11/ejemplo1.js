function mezclarListas(...Listas){

    let combinadasSinDuplicados = [...new Set([].concat(...Listas))];
    return combinadasSinDuplicados;
}

let lista1 = [1,2,3];
let lista2 = [3,4,5];
let lista3 = [5,6,7];

console.log(mezclarListas(lista1, lista2, lista3));