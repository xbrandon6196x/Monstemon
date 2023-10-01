let ataqueJugador
let ataqueEnemigo
let resultadoPelea
let vidasJugador = 3
let vidasEnemigo = 3


function inicarJuego(){
    let seccionSeleccionarAtaque = document.getElementById('selecciona-poder')
    seccionSeleccionarAtaque.style.display = 'none'

    let seccionReiniciar = document.getElementById('reiniciar')
    seccionReiniciar.style.display = 'none'
    
    let botonMascotaJugador = document.getElementById('seleccionarMascotaBoton')
    botonMascotaJugador.addEventListener('click', seleccionarMascotaJugador)

    let botonTIJERA = document.getElementById('tijera')
    botonTIJERA.addEventListener('click', ataqueTIJERA)
    let botonPIEDRA = document.getElementById('piedra')
    botonPIEDRA.addEventListener('click', ataquePIEDRA)
    let botonPAPEL = document.getElementById('papel') 
    botonPAPEL.addEventListener('click', ataquePAPEL)

    let botonReiniciar = document.getElementById('reiniciar')
    botonReiniciar.addEventListener('click',reiniciarJuego)
}   

function seleccionarMascotaJugador () 
{
    let seccionSeleccionarAtaque = document.getElementById('selecciona-poder')
    seccionSeleccionarAtaque.style.display = 'flex'

    let seccionSeleccionarMascota = document.getElementById('selecciona-mascota')
    seccionSeleccionarMascota.style.display = 'none'

    let inputHipodoge = document.getElementById('hipodoge')
    let inputCapipepo = document.getElementById('capipepo')
    let inputRatigueya = document.getElementById('ratigueya')
    let spanMascotaJugador = document.getElementById('spanMascotaJugador')
    
    if(inputHipodoge.checked)
    { 
        spanMascotaJugador.innerHTML = 'Hipodoge'
    }
    else if(inputCapipepo.checked)
    {
        spanMascotaJugador.innerHTML = 'Capipepo'
    }
    else if(inputRatigueya.checked)
    {  
        spanMascotaJugador.innerHTML = 'Ratigueya'
    }
    else
    {
        alert("Selecciona alguna mascota para comenzar")
    }
    seleccionarMascotaEnemigo()

}

function seleccionarMascotaEnemigo()
{
    let mascotaAleatorio = aleatorio(1,3)
    let spanMascotaEnemigo = document.getElementById('spanMascotaEnemigo')

    if(mascotaAleatorio == 1)
    {
        spanMascotaEnemigo.innerHTML = 'Hipodoge'
    }
    else if (mascotaAleatorio == 2)
    {
        spanMascotaEnemigo.innerHTML = 'Capipepo'
    }
    else {
        spanMascotaEnemigo.innerHTML = 'Ratigueya'
    }
}

function ataqueTIJERA()
{
    ataqueJugador = 'TIJERA'
    ataqueEnemigoAleatorio() 
}

function ataquePIEDRA()
{
    ataqueJugador = 'PIEDRA'
    ataqueEnemigoAleatorio() 
}

function ataquePAPEL()
{
    ataqueJugador = 'PAPEL'
    ataqueEnemigoAleatorio() 
}


function ataqueEnemigoAleatorio()
{
    let ataqueAleatorio = aleatorio(1,3)

    if (ataqueAleatorio == 1)
    {
        ataqueEnemigo = 'TIJERA'
    }
    else if(ataqueAleatorio  == 2)
    {
        ataqueEnemigo = 'PAPEL'
    }
    else
    {
        ataqueEnemigo = 'PIEDRA'
    }
    pelea()
    crearMensaje()
}


function crearMensaje ()
{
    let mensajeSeccion = document.getElementById('mensajes')
    let parrafo = document.createElement('p')

    parrafo.innerHTML = 'Tu mascota ataco con ' + ataqueJugador +', la mascota del enemigo ataco con ' + ataqueEnemigo +' El resultado es ' + resultadoPelea

    mensajeSeccion.appendChild(parrafo)
}

function pelea()
{
    let spanVidaJ = document.getElementById('spanVidasMascota')
    let spanVidaE = document.getElementById ('spanVidasEnemigo')

    if(ataqueJugador == ataqueEnemigo)
    {
        resultadoPelea = 'EMPATE'
    }
    else if(ataqueJugador == 'PIEDRA' && ataqueEnemigo == 'TIJERA')
    {
        resultadoPelea = 'GANASTE'
        vidasEnemigo--
        spanVidaE.innerHTML = vidasEnemigo
    }
    else if(ataqueJugador == 'TIJERA' && ataqueEnemigo == 'PAPEL')
    {
        resultadoPelea = 'GANASTE'
        vidasEnemigo--
        spanVidaE.innerHTML = vidasEnemigo
    }
    else if(ataqueJugador == 'PAPEL' && ataqueEnemigo == 'PIEDRA')
    {
        resultadoPelea = 'GANASTE'
        vidasEnemigo--
        spanVidaE.innerHTML = vidasEnemigo
    }
    else 
    {
        resultadoPelea = 'PERDISTE'
        vidasJugador--
        spanVidaJ.innerHTML = vidasJugador
    }
    //Revisar vidas

    if (vidasJugador === 0 || vidasEnemigo === 0)
    {
        finalizarJuego()
    } 
}

function finalizarJuego ()
{
    let seccionReiniciar = document.getElementById('reiniciar')
    seccionReiniciar.style.display = 'flex'

    let mensajeFinal = document.getElementById('selecciona-poder')
    let parrafoFinal = document.createElement('p')

    let botonPIEDRA = document.getElementById('piedra')
    let botonTIJERA = document.getElementById('tijera')
    let botonPAPEL = document.getElementById('papel')

    botonPIEDRA.disabled = true
    botonTIJERA.disabled = true
    botonPAPEL.disabled = true

    if(vidasJugador === 0)
    {
        parrafoFinal.innerHTML = 'PERDISTE 😢 Mejor suerte la proxima'
        mensajeFinal.appendChild(parrafoFinal)
    }
    else if(vidasEnemigo === 0)
    {
        parrafoFinal.innerHTML = 'GANASTEEEEE, QUE SUERTE BROOO 😊🍀'
        mensajeFinal.appendChild(parrafoFinal)
    }
}

function reiniciarJuego ()
{
    location.reload()
}

function aleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min
    )
}

window.addEventListener('load', inicarJuego)

