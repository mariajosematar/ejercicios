/*

Enunciacion: Dada una palabra, buscarla en una frase y devolver cuantas veces aparece en ella.
La fradse y la palabra deben ser parametros de una funcion.

Ejemplos: 

coincidencias("hola soy una palabra en una frase, PALABRA.", "palabra") // Devuelve: 2
coincidencias("soy la frase", "victor") // dEVUELVE 0

Como hacerlo:

- Funcion con dos parametros "frase" y "busqueda"
- Poner string en minusculas y limpiarlo
- Comprobar si la busqueda esta incluida en la frase
- Crear un array de palabras de la frase
- Mapear esas palabras y hacer un contador de cada una
- Devolver el contador de la busqueda

*/

function coincidencias(frase, busqueda){
    let texto_limpio = frase.toLowerCase().replace(/[!¡.,-]/gi, ''); 
    let resultado = 0;

    if(texto_limpio.includes(busqueda)){

        let palabras = texto_limpio.split(" ");
        let mapa = {};

        for(let palabra of palabras){
            if (mapa[palabra]){
                mapa[palabra]++;
            }else{
                mapa[palabra] = 1;
            }
        }
        /*
        console.log(palabras);
        console.log(mapa);
        */


       resultado = mapa[busqueda];

    }else{
        resultado = 0;
    }
    return resultado;

}
console.log(
    "Numero de coincidencias en la frase: ",
coincidencias("Hola, que tal, soy Maji Matar. maji maji","matar"),
coincidencias("Esta es mi frase","holi")
);