/*4.- Crear una función que busque el número más pequeño en el arreglo.
Ejemplo input - > [1,4,5,-1,-7,2,3,9]
Salida -> -7*/ 

function numeroMin(array) {
    let min = array[0];
    for (let i = 0; i < array.length; i++) {
        if (min > array[i]) {
            min = array[i];
        }
    }

    return min;
}

const input = [1,4,5,-1,-7,2,3,9];
const salida = numeroMin(input);

console.log(salida);
