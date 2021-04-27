// Tipos de datos en JS

// Tipado de datos en JS es débil y dinámico

let email = 'juan@juan.com'; // Inferencia de tipo por la cual la variable toma el tipo de dato del valor

console.log(typeof email);

email = 20; // No da ningún tipo de error porque es débil y dinámica

console.log(typeof email);

// Tipos primitivos

// string o cadena de caracteres (comillas dobles o comillas simples)

let ciudad = 'Villa de \nMadrid';

console.log(ciudad);

let calle = 'Avenida de O\'Donell';

// number números en todos los tipos disponibles (flotante se identifica con .) *Aunque ya existen Bigint

let resultado = 8.6;

// boolean (true o false)

let mayorEdad = false;

// undefined (tipo-valor)

let marca; // valor undefined cuando aún no ha sido inicializado

console.log(typeof marca);

// null (tipo-valor)

let localidad = null; // "Tiene valor pero aún no tenemos definido el tipo"

// Tipos compuestos

// Arrays

let frutas = ['manzanas','peras','plátanos'];

console.log(typeof frutas);

// Objetos

let jugador = { // Declaración de literales es con sintaxis de llaves
    nombre: 'Cristiano',
    apellidos: 'Ronaldo',
    numeroGoles: 0
}

console.log(typeof jugador)