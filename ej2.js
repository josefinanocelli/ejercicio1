/*Dado dos numero y un operador (+, -, *, /) calcule e informe el resultado de la  operacion
indicada entre ambos numeros
*/

'use strict'

let numero1 = parseFloat(prompt('Ingrese el primer numero'));
let numero2 = parseFloat(prompt('Ingrese el segundo numero')); 
let operador = prompt('Ingrese el operador');
let resultado;

if (operador == '+'){
    resultado = numero1 + numero2;
    console.log(' el resultado es:' , resultado);
}else if (operador == '-'){
    resultado = numero1 - numero2;
    console.log(' el resultado es:' , resultado);
}else if (operador == '*'){
    resultado = numero1 * numero2;
    console.log(' el resultado es:' , resultado);
}else if (operador == '/'){
    resultado = numero1 / numero2;
    console.log(' el resultado es:' , resultado);
} else 
    console.log ('El operador ingresado es invalido');