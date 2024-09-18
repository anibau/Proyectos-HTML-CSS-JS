const button=document.getElementById("boton-color");
//console.log(button)
const color=document.getElementById('Color');
//console.log(color)
function generarColor() {

    let digitos="0123456789ABCDEF"
    let colorHex= "#";

    for(let i=0; i<6; i++){
        let indiceAleatorio= Math.floor(Math.random()*16);
        colorHex+= digitos[indiceAleatorio];
    }
    return colorHex
}
button.addEventListener('click', function(){
    let colorAleatorio=generarColor();
    //actualizar el texto
    color.textContent= colorAleatorio;
    //actualizar el color
    document.body.style.backgroundColor= colorAleatorio
})