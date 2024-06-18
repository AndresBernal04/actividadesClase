
console.log("Este es mi ejercicio 2")

// Ejercicios de condicionales
/*
2.) Calculadora de descuento:
Crea un programa que solicite al usuario el precio original de un producto y el porcentaje de descuento que se aplicará. Luego, calcula y muestra el precio final después del descuento. 

    1. Descuento del 20%
    2. Descuento del 50%
    3. Descuento del 70%
*/


const precio_original = parseFloat(prompt("Ingresa el valor base del producto"));


// back slash = AltGr + ? 
// \n salto de línea



const descuento = prompt("Define el descuento que quieres aplicar: \n 1 -> para descuento del 20% \n 2 -> para descuento del 50% \n 3 -> para descuento del 70%"); 

let precio_final = 0;


// switch -> un condicional cuando tengo varios casos posibles
switch(descuento){

    case "1":
        precio_final = precio_original - (precio_original*0.2);

        alert("El precio con descuento de tu producto es: " + precio_final);

        break;


    case "2":
        precio_final = precio_original - precio_original*0.5;

        alert("El precio con descuento de tu producto es: " + precio_final);

        break;


    case "3":
        precio_final = precio_original - precio_original*0.7;
    
        alert("El precio con descuento de tu producto es: " + precio_final);
    
        break;


    default:
        alert("Ingresa una opción válida.");
}


