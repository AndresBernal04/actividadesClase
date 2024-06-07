
// 1. Verificar si está bien vinculado

console.log("Holi");

// Cuando se va a manipular elementos de html desde su js, SIEMPRE, lo primero quie debe hacer es traer los elementos

// 2. Traer los elementos de html

// VARIABLES GLOBALES -> la declaramnos para usar en todo el código
let numero1;
let numero2;
let pantalla;

// 3. Asignarle a mis variables los elementos de html
// document -> me accede al html
// getElementById -> me trae el elemendo por su ID
numero1 = document.getElementById("numero1").value;
numero2 = document.getElementById("numero2").value;
pantalla = document.getElementById("pantalla"); 


function suma(){
    // .value -> me da el valor de mi input
    numero1 = document.getElementById("numero1").value;
    numero2 = document.getElementById("numero2").value;


    // VARIABLE LOCAL -> sólo funcioa en la función suma()
    let resultado_suma = parseInt(numero1) + parseInt(numero2);
    // textContent -> me modifica el contenido de texto de mi elemento
    pantalla.textContent = resultado_suma;
}


function resta(){
    numero1 = document.getElementById("numero1").value;
    numero2 = document.getElementById("numero2").value;
    let resultado_resta = parseInt(numero1) - parseInt(numero2);
    pantalla.textContent = resultado_resta;
}


function multiplicacion(){
    numero1 = document.getElementById("numero1").value;
    numero2 = document.getElementById("numero2").value;
    let resultado_multiplicacion = parseInt(numero1) * parseInt(numero2);
    pantalla.textContent = resultado_multiplicacion;
}


function division(){

    numero1 = document.getElementById("numero1").value;
    numero2 = document.getElementById("numero2").value;
    let resultado_division = parseFloat(numero1) / parseFloat(numero2);
    // toFixed -> me muestra la cantidad de decimales que desee
    // Math.ceil -> redondea por encima
    // Math.around -> redondea números
    pantalla.textContent = resultado_division.toFixed(2);
}