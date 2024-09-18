let botonElem=document.getElementById('boton-cita');
let citaElem= document.getElementById('cita');
let autorElem = document.getElementById('autor');

function generarEnteroAleatorio(min,max) {
    return Math.floor(Math.random()*(max - min)+min);
}

let entero= generarEnteroAleatorio(0,citas.length)
console.log(entero)


function citaAleatoria () {
    let entero= generarEnteroAleatorio(0,citas.length)
    citaElem.innerText=`"${citas[entero].texto}"`;
    autorElem.innerText=citas[entero].autor;    
}
citaAleatoria()

botonElem.addEventListener('click', citaAleatoria)
