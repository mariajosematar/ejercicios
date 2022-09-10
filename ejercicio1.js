/*

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
