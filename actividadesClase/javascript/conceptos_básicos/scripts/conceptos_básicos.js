
// 1. Lo primero es verificar que la vinculación es correcta
//  ENVIAMOS UN MENSAJE

console.log("HELLO WORLD - Estoy vinculado con mi HTML");

// 1. VARIABLES EN JS

/* Definición de variable: espacio de memoria -> cajita que me guarda información en forma de datos -> diferentes tipos:
Numérico (2, 2.3, 4.34545354)
Boleanos, arreglos, texto (strings), objetos*/

// Definimos para usarlo constantemente

/*
    VARIABLES EN JS

        (VAR NO SE USA)
        1. Var -> nos guarda datos que pueden cambiar en el tiempo (en desuso)

        2. Let -> nos guarda datos que pueden cambiar en el tiempo
        3. Const -> -> nos guarda datos constantes -> NO CAMBIAN EN EL TIEMPO
*/

// 2. DECLARACIÓN DE VARIABLES

/* 
    1. Definir el tipo de variable (let o const)
    2. Darle nombre a la variable
    3. Definir lo que se va a guardar*/

let nombre_variable = "nombre";


// Numéricos

let numero = 5;
const pi = 3.14;


// Texto -> Strings

let texto = "hola";
const nombre = "Andrés";


// Booleanos -> verdadero o falso

let es_verdadero = true;
const es_falso = false;


// Arreglos -> guardan más de un dato -> DEL MISMO TIPO
// Se reconocen por el uso de corchetes [] y los datos se separan por comas

let arreglo_numeros = [1, 3, 5, 7, 9];
const arreglo_nombres = ["Andrés", "Sofía", "María"];


// POO -> programación orientada a objetos
// Objeto -> son datos que representan en CÓDIGO, elementos o cosas de la vida real para que podamos darle instruncciones lógicas

// Todos los elementos de la vida real los podemos definir en términos de características (atributos (código)), de acciones (métodos (código))

/*
    [] -> corchetes con los arreglos de datos
    {} -> llaves los tipos de datos objeto 
    () -> métodos -> funciones

    estructura -> clave valor -> los atributos y métodos se separan por comas

    Puedo acceder no sólo al objeto completo, sino a sus propiedades y a sus métodos, de forma específica

    Cómo?:

*/
 

const persona1 = {
    // clave: valor
    // Atributos
    nombre: "Andrés",
    edad: 20,
    altura: "180 cm",
    nacionalidad: "Colombiano",
    // Métodos -> funciones
    saludar: function(){
        console.log("Hola desarrolladores")
    },
    despedir: function(){
        console.log("Hasta luego, desarrolladores")
    }
}

let productos = {
    nombre: "Computador",
    precio: 10000,
    cantidad: 20,
    descripcion: "es muy rápido",

    comprar: function(){
        console.log("comprando producto")
    }
}


// ============================ FUNCIONES ============================

/*
¿CÓMO SE USAN LAS FUNCIONES EN JS

    1. Declaración típica de funciones
    2. Funciones anónimas -> funciones sin nombre
    3. Funciones flecha -> los estándares modernos de programación en js

    4. Funciones incorporadas -> que ya vienen establecidas dentro de js, para que nosotros los podamos usar

*/

// 1. DECLARACIÓN BÁSICA DE FUNCIONES
/*
    function nombre_funcion(){
        lógica dentro de la función
    } 
*/

function saludar(){
    console.log("Holiiiiiii");
}


// 2. FUNCIONES ANÓNIMAS
let despedida = function(){
    console.log("Chauuuuuuu")
}


// 3. FUNCIONES FLECHA -> Forma moderna
let suma = () => {
    console.log(5+4);
}


// 4. FUNCIONES INCORPORADAS
    /*
        alert -> enviar un mensaje al usuario
        prompt -> pedir datos al usuario
        parseInt -> convertir un dato a entero
        parseFloat -> convertir dato a flotante (decimal)
        console -> envía mensaje a la consola del desarrollador
        Math -> nos permite hacer operaciones matemáticas más complejas
    */

