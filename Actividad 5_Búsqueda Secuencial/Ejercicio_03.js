/*3.- Crear una función que busque el número más grande en un arreglo.
Ejemplo input - > [1,4,7,2,4,1,9,4,0,2,4,5,12]
Salida -> 12*/ 

function numeroMax(array) {
    let max = array[0];
    for (let i = 0; i < array.length; i++) {
        if (max < array[i]) {
            max = array[i];
        }
    }

    return max;
}

const input = [1, 4, 7, 2, 4, 1, 9, 4, 0, 2, 4, 5, 12];
const salida = numeroMax(input);

console.log(salida);
