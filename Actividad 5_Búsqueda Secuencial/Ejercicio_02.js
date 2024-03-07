/* 2.- Crear una función que encuentre las letras en un arreglo de números y regrese un nuevo arreglo de letras.
Ejemplo input -> [8,‘e’,7,2,‘a’,‘d’,‘f’,2,3,1,4,3]
Salida → [‘e’,‘a’,‘d’,‘f’] */


function encontrarletras(array) {
    let letras = array.filter(elemento => typeof elemento === 'string' && elemento.length === 1);

    return letras;
}

const input = [8,'e',7,2,'a','d','f',2,3,1,4,3];
const salida = encontrarletras(input);

console.log(input);
console.log(salida);