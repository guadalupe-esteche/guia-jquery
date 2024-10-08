let x = $(document);
x.ready(inicializarEvento);

/* con document se le pasa todo el documento DOM, una vez que se cargó en la variable x, se llama a la funcion*/

/* ejercicio 2
function inicializarEvento () {
    let p = $("#parrafo1");
    p.click(alerta)
}

function alerta() {
    alert("se presiono el parrafo 1")
}
*/

/* ejercicio 3 */
function inicializarEvento () {
    let fila1 = $("#primerFila");
    fila1.click(presionFila1);
    let fila2 = $("#segundaFila");
    fila2.click(presionFila2)
}

function presionFila1 (){
    fila1.css("background-color", "pink");
}

function presionFila2 (){
    fila2.css("background-color", "purple")
}
