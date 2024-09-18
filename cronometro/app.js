const botonInicioPausa = document.getElementById('boton-inicio-pausa');
const botonReiniciar= document.getElementById('boton-reiniciar');
const cronometro=document.getElementById('cronometro');

let [horas, minutos, segundos]=[0,0,0];
let intervaloTiempo;
let estadoCronometro='pausado';

function actualizarCronometro() {
    segundos++;

    if( segundos/60=== 1) {
        segundos= 0;
        minutos++;
        if (minutos/60=== 1) {
            minutos= 0;
            horas++;
        }
    }
    const formatoSegundos= asignarFormato(segundos);
    const formatoMinutos= asignarFormato(minutos);
    const formatoHoras= asignarFormato(horas);

    cronometro.innerText= `${formatoHoras}:${formatoMinutos}:${formatoSegundos}`;

   
}

function asignarFormato(estado) {
   return estado<10 ? '0'+estado : estado;
}

botonInicioPausa.addEventListener('click', function(){
    if (estadoCronometro==='pausado') {
        intervaloTiempo=window.setInterval(actualizarCronometro,1000);
        botonInicioPausa.innerHTML='<i class="bi bi-pause-fill"></i>';
        botonInicioPausa.classList.remove('iniciar');
        botonInicioPausa.classList.add('pausar');
        estadoCronometro= 'iniciado'

    } else {
        if (estadoCronometro='iniciado') {
            
            window.clearInterval(intervaloTiempo);
            botonInicioPausa.innerHTML='<i class="bi bi-play-fill"></i>';
            botonInicioPausa.classList.remove('pausar');
            botonInicioPausa.classList.add('iniciar');
            estadoCronometro='pausado'

        }

    }
    

})

botonReiniciar.addEventListener('click', function() {
    window.clearInterval(intervaloTiempo);

    horas=0;
    minutos= 0;
    segundos= 0;

    cronometro.innerText= '00:00:00';
    botonInicioPausa.innerHTML= '<i class="bi bi-play-fill"></i>';
    botonInicioPausa.classList.remove('pausar');
    botonInicioPausa.classList.add('iniciar');
    estadoCronometro='pausado'
})