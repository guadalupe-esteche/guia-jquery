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

/* ejercicio 3 
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
*/

/*ejercicio 4 
function inicializarEvento () {
    let li = $("li");
    li.click(presionElemento);
}

function presionElemento (){
    let li = $(this);
    li.hide();
}
*/

/* ejercicio 5 
function inicializarEvento () {
    let li = $("#tabla1 tr");
    li.click(presionElemento);
}

function presionElemento (){
    let li = $(this)
    li.css("background-color", "pink");
}
*/

/* ejercicio 6 */
function inicializarEvento () {
    let p = $("#boton1");
    p.click(tamañoPequeño);
    let m = $("#boton2");
    m.click(tamañoMediano);
    let g = $("#boton3");
    g.click(tamañoGrande);
}

function tamañoPequeño(){
    let p = $("descripcion_noticia")
    p.css("font-size", "5px")
}
function tamañoMediano(){
    let m = $("descripcion_noticia")
    m.css("font-size", "15px")
}
function tamañoGrande(){
    let g = $("descripcion_noticia")
    g.css("font-size", "30px")
}

