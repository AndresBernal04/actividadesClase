
// 1. Verificar la vinculación correcta

console.log("Estoy conectado a mi Html");

// Ejercicios de condicionales

/*
1.) Verificación de elegibilidad para votar:
Escribe un programa que solicite la edad de un usuario y verifique si es elegible para votar en las elecciones. Debe ser mayor de 18 años y ser ciudadano colombiano.
*/


/*
    1. El problema
    2. Analizarlo 
    3. Diseñar  
    4. Codificar                         
*/


/*
let -> Puede variar
const -> No puede variar
*/

// let ciudadania = prompt("Ingresa si o no, si eres ciudadano Colombiano");


let edad = parseInt(prompt("Por favor ingresa tu edad"));

let es_ciudadano = confirm("¿Eres ciudadano Colombiano?");

console.log(edad, /*ciudadania,*/ es_ciudadano);


// Condicional -> if 
// Operador lógico && (and) -> implica que se tengan que cumplir todas las condiciones.

if (edad >= 18 && es_ciudadano == true){
    alert("Eres apto para votar en las próximas elecciones")
} else{
    alert("No eres apto para votar en las próximas elecciones")
}


// El else me incluye todas las opciones restantes que no están cumpliendo con las condiciones