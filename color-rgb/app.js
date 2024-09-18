//primero se accede a los elementos a utilizar para la funcion
const inputRojo=document.getElementById("rojo");
const inputVerde=document.getElementById("verde");
const inputAzul=document.getElementById("azul");

const textoRojo=document.getElementById("texto-rojo");
const textoVerde=document.getElementById("texto-verde");
const textoAzul=document.getElementById("texto-azul");

//luego recien se declara nuevas variables con los datos necesarios de los elementos accedidos

let rojo= inputRojo.value;
let verde= inputVerde.value;
let azul= inputAzul.value;
// actualiza el texto de parrajos con el valor de input
textoRojo.innerText= rojo;
textoVerde.innerText= verde;
textoAzul.innerText=  azul;

function actualizarColor (rojo, verde, azul) {
    let colorRgb= `rgb(${rojo}, ${verde}, ${azul})`;
    document.body.style.backgroundColor= colorRgb
}
// escuchar con addEcentListener para conectar EVENTO + TARGET + FUNCION
inputRojo.addEventListener('change', (obj) => {
    rojo= obj.target.value;
    textoRojo.innerText= rojo;
    actualizarColor(rojo,verde,azul)
});
inputVerde.addEventListener('change', () => {
    verde= inputVerde.value;
    textoVerde.innerText= verde;
    actualizarColor(rojo,verde,azul)
});
inputAzul.addEventListener('change', (obj) => {
    azul= obj.target.value;
    textoAzul.innerText= azul;
    actualizarColor(rojo,verde,azul)
});