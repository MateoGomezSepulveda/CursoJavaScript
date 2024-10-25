// Escribe un programa que imprima los números del 1 al 100. Sin embargo, para múltiplos de 3, imprime "Fizz" en lugar del número, y para múltiplos de 5, imprime "Buzz". Para números que son múltiplos de 3 y 5, imprime "FizzBuzz".

for (let i = 1; i <= 10; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        console.log("FizzBuzz"); // Múltiplo de 3 y 5
    } else if (i % 3 === 0) {
        console.log("Fizz"); // Múltiplo de 3
    } else if (i % 5 === 0) {
        console.log("Buzz"); // Múltiplo de 5
    } else {
        console.log(i); // Número
    }
}

// Crea una función que tome una cadena como argumento y devuelva la misma cadena invertida.

function reverseString(str) {
    return str.split('').reverse().join('');
}

// Llamar a la función con un ejemplo
const originalString = "Hola Mundo";
const reversedString = reverseString(originalString);

// Imprimir el resultado en la consola
console.log("Cadena original:", originalString);
console.log("Cadena revertida:", reversedString);


// Escribe una función que cuente cuántas vocales hay en una cadena dada.

function findMax(arr) {
    return Math.max(...arr);
}

// Ejemplo de uso
console.log(findMax([1, 2, 3, 4, 5])); // 5
console.log(findMax([-10, -5, -3, -1])); // -1


// Crear una función que sume todos los números en un array.

function sumArray(arr) {
    return arr.reduce((accumulator, current) => accumulator + current, 0);
}

// Ejemplo de uso
console.log(sumArray([1, 2, 3, 4, 5])); // 15
console.log(sumArray([-1, -2, -3])); // -6


// Crear una función que cuente el número de vocales en una cadena.

function countVowels(str) {
    const vowels = 'aeiouAEIOU';
    let count = 0;

    for (let char of str) {
        if (vowels.includes(char)) {
            count++;
        }
    }
    return count;
}

// Ejemplo de uso
console.log(countVowels("Hola Mundo")); // 4
console.log(countVowels("xyz")); // 0

