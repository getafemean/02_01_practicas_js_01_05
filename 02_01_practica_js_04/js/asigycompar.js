// Operadores de asignación y comparación

// Operadores de asignación

// Asignación =

// Asignación de adición +=

let puntuacion1 = 4;
let puntuacion2 = 9;

puntuacion1 +=  puntuacion2;
console.log(puntuacion1);

// -= *= /= %=

// Operadores de comparación

// Operador de igualdad ==

let ciudad = 'Getafe';
let termino = 'getafe';

let hayCoincidencia = ciudad == termino;
console.log(hayCoincidencia);

// No es estricta con los tipos de datos

let valor1 = 3;
let valor2 = '3';

hayCoincidencia = valor1 == valor2;
console.log(hayCoincidencia);

// Operador de igualdad estricta === (comprueba también la igualdad de tipos)

hayCoincidencia = valor1 === valor2;
console.log(hayCoincidencia);

// Operador de desigualdad !=

// Operador de desigualdad estricta !==

hayCoincidencia = valor1 !== valor2;
console.log(hayCoincidencia);

// Operador mayor que >

valor1 = 8.4;
valor2 = 3;

resultado = valor1 > valor2;
console.log(resultado);

// Operador menor que <

// Operador mayor o igual que >=

// Operador menor o igual que <=

