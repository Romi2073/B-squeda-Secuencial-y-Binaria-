/* 1.- Crear una función que encuentre el número más repetido en un array.
Ejemplo Input -> [3,6,1,8,2,3,6,3,2,5,6]
Salida -> 6 */ 

let Input = [3, 6, 1, 8, 2, 3, 6, 3, 2, 5, 6];

function numeroRepetido(array) {
    let contador = 0;
    let numeros = [];
    let listanumeros = [];

    for (let i = 0; i < array.length; i++) {
        if (array[i + 1] === array[i]) {
            contador++;
        } else {
            numeros.push(array[i]);
            listanumeros.push(contador);
            contador = 1;
        }
    }

    let numeroMasRepetido = numeros[listanumeros.indexOf(Math.max(...listanumeros))];
    return numeroMasRepetido;
}

const resultado = numeroRepetido(Input);
console.log(resultado);

