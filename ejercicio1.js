/*

Enunciacion:
Dada una cadena de texto, darle la vuelta e invertir el orden de sus caracteres, 
sin usar metodos propios del lenguaje,
solo estructuras de control.

Ejemplos:
invertir ('victor') // Devuelve: 'rotciv'
invertir ('robles') // Devuelve: 'selbor'

Como hacerlo:

- Funcion con parametro "texto"
- Crear una variable para guardar la cadena invertida
- Bucle que recorra el string y guarde los caracteres en la variable


FORMA 1 - 

function invertir(texto) {

    let invertido = "";

    for (let letra of texto){
        console.log(letra);
    }
}

invertir("victorroblesweb.com")

*/

function invertir(texto) {
    
    let invertido = "";

    for(let letra of texto){
        invertido = letra + invertido;
    }
    return invertido;
}

function invertir(texto) {
    return texto.split("").reverse().join('');
}


console.log("Texto invertido:", invertir("victorroblesweb.com"))