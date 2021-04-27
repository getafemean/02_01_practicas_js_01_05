// Variables en JavaScript

// Identificadores

// - Tiene que comenzar por letra ó bien el símbolo $ ó bien por el símbolo _
// - No se pueden usar las palabras reservadas del lenguaje
// - (Buena práctica) utilizar camelCase (en variables y constantes)
// - (Buena práctica) utilizar nombres semánticos

// Declaración de variables en JavaScript

// A partir de ECMA6 es conveniente siempre declarar con let

let primerApellido; // No se define el tipo de dato

// Versión clásica

var segundoApellido; // En según que entornos desaconsable

// Variables globales (desaconsejable)

nombre = 'Juan'; // exige declarar e inicializar la variable

// Constantes

// versión clásica

var URL = 'http://...'; // Realmente no es una constante

// ECMA6 tenemos constantes como tal

const urlPedidos = 'http://...';

// urlPedidos = 'http://otra...' error en reasignación

// Se pueden declarar varias variables o constantes a la vez separadas por coma

let email, 
    codigoPostal, 
    localidad;

