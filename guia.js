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

/* ejercicio 6 
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
*/

/* ejercicio 7 
function inicializarEvento () {
    let b_= $("#boton4");
    b_.click(cambiarContenido);
}

function cambiarContenido (){
    let c= $("#tabla3 td"); 
    c.text("-");
}
*/

/* ejercicio 8 
function inicializarEvento () {
    let b_1= $("#boton5");
    b_1.click(hipervinculoInstagram);
    let b_2= $("#boton6");
    b_2.click(hipervinculoFacebook);
    let b_3= $("#boton7");
    b_3.click(hipervinculoX);
}

function hipervinculoInstagram(){
    let b_1= $("a");
    b_1.attr("href", "https://www.instagram.com/");
    b_1.text("Instagram");
}

function hipervinculoFacebook(){
    let b_1= $("a");
    b_1.attr("href", "https://www.facebook.com/");
    b_1.text("Facebook");
}

function hipervinculoX(){
    let b_1= $("a");
    b_1.attr("href", "https://x.com/?lang=es");
    b_1.text("X");
}
*/

/* ejercicio 9 
function inicializarEvento() {
    let x = $("#boton8");
    x.click(asociarClase);
    x = $("#boton9");
    x.click(desasociarClase);
  }
  
  function asociarClase() {
    let x = $("#tabla5 th");
    x.addClass("titulo");
    x = $("#tabla5 td");
    x.addClass("cuerpo");
  }
  
  function desasociarClase() {
    let x = $("#tabla5 th");
    x.removeClass("titulo");
    x = $("#tabla5 td");
    x.removeClass("cuerpo");
  }
    */

/* ejercicio 10 
function inicializarEvento() {
    let b1_ = $("#boton10");
    b1_.click(presionBoton1);
    b2_ = $("#boton11");
    b2_.click(presionBoton2);
  }
  
  function presionBoton1() {
    let x = $("head");
    alert(x.html());
  }
  function presionBoton2() {
    let x = $("body");
    alert(x.html());
  }
*/

/* ejercicio 11 
function inicializarEvento(){
    let x = $("strong");
    x.click(ocultarPalabra)
}

function ocultarPalabra(){
    $(this).hide();
}
*/

/* ejercicio 12 
function inicializarEvento(){
    let x = $("#tabla12 td");
    x.mouseover(mouseEntra);
    x.mouseout(mouseSale);
}

function mouseEntra(){
    $(this).css("background-color", "pink");
}

function mouseSale(){
    $(this).css("background", "purple");
}
*/

/* ejercicio 13 
function inicializarEvento(){
    let x = $("#tabla12 td");
    x.hover(mouseEntra, mouseSale);
}

function mouseEntra(){
    $(this).css("background-color", "blue");
}

function mouseSale(){
    $(this).css("background", "green");
}
*/

/* ejercicio 14 
function inicializarEvento(){
    let x = $("#recuadro");
    x.mousemove(moverMouse);
    x = $("#recuadro")
    x.mouseout(mouseSale);
}

function moverMouse(){
    let x = $("#coordenada");
  x.text("(" + event.clientX + "," + event.clientY + ")");
}

function mouseSale() {
    let x = $("#coordenada");
    x.text("Flecha fuera del recuadro");
  }
*/

/* ejercicio 15 
function inicializarEvento(){
    let b1_ = $("#boton12");
    b1_.mousedown(cambiarColor);
    b1_.mouseup(volverOriginal)
    let b2_ = $("#boton13");
    b2_.mousedown(cambiarColor);
    b2_.mouseup(volverOriginal)
}

function cambiarColor(){
    $(this).css("background-color", "blue");
}

function volverOriginal(){
    $(this).css("background-color", "#D4D0C8");
}
*/

/* ejercicio 16 
function inicializarEvento() {
    let x = $("#recuadro2");
    x.dblclick(redimensionarRecuadro)
}

let estado = 1;

function redimensionarRecuadro() {
    if (estado == 1) {
        $(this).css("width", "250px");
        $(this).css("height", "250px");
        estado = 2;
    }
    else {
        $(this).css("width", "800px");
        $(this).css("height", "70px");
        estado = 1;
    }
}
*/

/* ejercicio 17 
function inicializarEvento(){
    let t1 = $("#text1");
    t1.focus(tomaFoco);
    let t2 = $("#text2");
    t2.focus(tomaFoco)
}

function tomaFoco(){
    $(this).css("color", "red");
}
*/
/* ejercicio 18 */
/* ejercicio 19 */
/* ejercicio 20 */