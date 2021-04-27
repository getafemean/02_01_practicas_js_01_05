// Estructuras en JS

// Estructura condicional if

// Sintaxis
// if (expresión condicional) {
    // código a ejecutar si se cumple la condición
// }

let nombre = 'Lucía';
let edad = 21;
let mayorEdad;

if (edad >= 18) {
    mayorEdad = true;
    console.log(nombre + ' es mayor edad');
}

// if (edad < 18)
//     console.log(nombre + ' es menor edad'); No se suele emplear el alivio de llaves

// Estructura if else

let a = 10;
let b = 20;

if(a > b) {
    console.log('a es mayor que b');
} else {
    console.log('a es menor o igual que b');
}

// Estructura if else if

a = b;

if(a > b) {
    console.log('a es mayor que b');
} else if (a === b) {
    console.log('a es igual a b');
} else {
    console.log('a es menor que b');
}

// Estructura condicional switch

let diaSemana = 2;

switch (diaSemana) {
    case 1:
        console.log('Hoy es lunes');
        break;
    case 2:
        console.log('Hoy es martes');
        break;
    case 3:
        console.log('Hoy es miércoles');
        break;
    case 4:
        console.log('Hoy es jueves');
        break;
    case 5:
        console.log('Hoy es viernes');
        break;
    case 6:
        console.log('Hoy es sábado');
        break;
    case 7:
        console.log('Hoy es domingo');
        break;
    default:
        console.log('Día de la semana no válido');
}

let mes = 'octubre';

switch (mes) {
    case 'enero':
    case 'febrero':
    case 'marzo':
        console.log('Estamos en el primer trimestre');
        break;
    case 'abril':
    case 'mayo':
    case 'junio':
        console.log('Estamos en el segundo trimestre');
        break;
    case 'julio':
    case 'agosto':
    case 'septiembre':
        console.log('Estamos en el tercer trimestre');
        break;
    case 'octubre':
    case 'noviembre':
    case 'diciembre':
        console.log('Estamos en el cuarto trimestre');
        break;
    default:
        console.log('Mes no válido');
}
