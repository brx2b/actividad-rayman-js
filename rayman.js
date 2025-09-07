let nombreJugador="Brx2b";
let personajeSeleccionado="Rayman";
let vidasIniciales=5;
let puntaje=0;
let coleccinables=0; //lums

vidasIniciales-=1;//pierde 1 vida

coleccinables+=50;//colecciona 50 lums

puntaje+=150; //aumenta 150 puntos

function mostrarDatosRayman(){

document.getElementById("rayman").innerHTML=`

Jugador: ${nombreJugador} <br>
Personaje: ${personajeSeleccionado} <br>
Vidas restantes: ${vidasIniciales} <br>
Lumns totales: ${coleccinables} <br>
Puntaje final: ${puntaje} <br>
`;
}
console.log("Jugador: "+nombreJugador)
console.log("Personaje: "+personajeSeleccionado)
console.log("Vidas restantes: "+vidasIniciales)
console.log("Lumns totales: "+coleccinables)
console.log("Puntaje final: "+puntaje)