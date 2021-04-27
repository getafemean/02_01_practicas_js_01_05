// Operadores lógicos en JS

// Operador lógico AND &&

let valor1 = 12;
let valor2 = 13;
let valor3 = 12;

let resultado = valor2 < valor1 && valor1 === valor3;
console.log(resultado);

// Operador lógico OR inclusivo ||

resultado = valor2 < valor1 || valor1 === valor3;
console.log(resultado);

// Operador lógico NOT ! (negación unaria)

let mayorEdad = false;

mayorEdad = !mayorEdad;
console.log(mayorEdad);

// Operador condicional (Ternario)

// expresióndecondicion (debe devolver true o false) ? valor1 : valor2;

let estado;
let aceptaTerminos = true
let edadParticipante = 13;

estado = edadParticipante >= 18 && aceptaTerminos ? 'Adulto' : 'Menor';

console.log(estado);

// Precedencia de operadores

// Ante dudas usar tabla https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Operators/Operator_Precedence

// Romper la precedencia con paréntesis ()

let valor10 = 5;
let valor11 = 10;
let valor12 = 4;

resultado = (valor10 + valor11) / valor12;
console.log(resultado);