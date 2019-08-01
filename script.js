// probando conexion script.js
console.log('Funciona conexion script.js');

var a = document.querySelector("a")

console.log(a);

a.addEventListener("click", e => {
    e.preventDefault();
    console.log('click');

    // creacion de los elementos
    var elemento_p = document.createElement("p");
    var btn_uno = document.createElement("button");
    var btn_dos = document.createElement("button");
    var elemento_div = document.createElement("div");

    // texto de los elementos
    elemento_p.innerText = "Esta seguro que quiere abandonar la página?";
    btn_uno.innerText = "Aceptar";
    btn_dos.innerText = "Cancelar";

    // agregar los elementos creados
    elemento_div.appendChild(elemento_p);
    elemento_div.appendChild(btn_uno);
    elemento_div.appendChild(btn_dos);
    document.body.appendChild(elemento_div);

    // funcion al hacer click en el boton "Aceptar"
    // se tiene que redirigir al usuario al href del <a>
    btn_uno.addEventListener("click", e => {
        console.log('boton aceptar');
    })

})
