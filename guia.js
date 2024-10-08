let x = $(document);
x.ready(inicializarEvento);

/* con document se le pasa todo el documento DOM, una vez que se cargó en la variable x, se llama a la funcion*/

function inicializarEvento () {
    let p = $("#parrafo1");
    p.click(alerta)
}

function alerta() {
    alert("se presiono el parrafo 1")
}