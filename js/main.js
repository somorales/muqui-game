// aca se une todo

// pantallas
const splashScreenNode = document.querySelector("#splash-screen");
const gameScreenNode = document.querySelector("#game-screen");
const gameOverScreenNode = document.querySelector("#game-over-screen");
const ganasteScreenNode = document.querySelector("#ganaste-screen")
const muqui1Node = document.querySelector("#muqui1")
const muqui2Node = document.querySelector("#muqui2")
const muqui3Node = document.querySelector ("#muqui3")
const muquiTristeNode = document.querySelector ("#muqui-triste")


// boton
const startBtnNode = document.querySelector("#start-btn");
const reiniciarBotonNode = document.querySelector("#reiniciar-btn");
const nextMundoBotonNode = document.querySelector("#nuevo-mundo-btn");

// game box
const gameBoxNode = document.querySelector("#game-box");

// variables del juego
let meteoritosArray = [];

let gameIntervalId = null;

let meteoritoIntervalId = null;

let muquiObj = null;

let naveEspacialObj = null;

let direccionJugador = null;

let piedraObj1= null;

let piedraObj2= null;

let piedraObj3= null;

// *Funciones globales del juego
function startGame() {

    if(direccionJugador===null){
        return;
    }
  // 1.cambiar pantalla
  splashScreenNode.style.display = "none";
  gameScreenNode.style.display = "flex";

  gameBoxNode.classList.add("vibrando")

  

  //// 2. añadir todos los elementos inicial del juego

  muquiObj = new Muqui(direccionJugador,850,500);
  piedraObj1 = new Piedra(1200,200);
  piedraObj2 = new Piedra (200,600);
  piedraObj3 = new Piedra (600,250);
  

  gameIntervalId = setInterval(() => {
    gameLoop();
  }, Math.round(1000 / 60));

  

  meteoritoIntervalId = setInterval(() => {
    addMeteorito();
  }, 700);
}

//funciones necesarias para integrar a la funcion global del juego

function gameLoop() {
  meteoritosArray.forEach((cadaMeteorito) => {
    cadaMeteorito.automaticMovement();
  });

  detectarColisionMuquiMeteoritos();
  detectarColisionPiedras();
  detectarColisionNave();
  
}


function addMeteorito() {
  let randomPosicionX = Math.floor(Math.random() * 900); // entre -150 y 0

  let nuevoMeteorito = new Meteorito(randomPosicionX);
  meteoritosArray.push(nuevoMeteorito);
}


function detectarColisionMuquiMeteoritos() {
  if (meteoritosArray.length === 0) {
    return; // no ejecutar la funcion si el array está vacio
  }

  meteoritosArray.forEach((cadaMeteorito) => {
    if (
      muquiObj !== null &&
      muquiObj.x < cadaMeteorito.x + cadaMeteorito.w &&
      muquiObj.x + muquiObj.w > cadaMeteorito.x &&
      muquiObj.y < cadaMeteorito.y + cadaMeteorito.h &&
      muquiObj.y + muquiObj.h > cadaMeteorito.y
    ) {
      gameOver();
    }
  });
}

function gameOver() {
  // 1. limpiar los intervalos
  clearInterval(gameIntervalId);
  clearInterval(meteoritoIntervalId);

  // vuelve al empezar todo de  nuevo

  gameBoxNode.innerHTML = "";

  meteoritosArray = [];

  gameIntervalId = null;

  meteoritoIntervalId = null;

  muquiObj = null;

  naveEspacialObj = null;
  piedraObj1 = null;
  piedraObj2 = null;
  piedraObj3 = null;

  gameScreenNode.style.display = "none";
  gameOverScreenNode.style.display = "flex";

  let direccionJugadorTriste = null

  if(direccionJugador==="./imagenes/muqui1-casco.png"){
   direccionJugadorTriste= "./imagenes/muqui1-triste.png"
  }

  muquiTristeNode.src = direccionJugadorTriste

  if(direccionJugador==="./imagenes/muqui2-casco.png"){
    direccionJugadorTriste= "./imagenes/muqui2-triste.png"
   }
 
   muquiTristeNode.src = direccionJugadorTriste

   if(direccionJugador==="./imagenes/muqui3-casco.png"){
    direccionJugadorTriste= "./imagenes/muqui3-triste.png"
   }
 
   muquiTristeNode.src = direccionJugadorTriste
    


}

function detectarColisionNave() { //colicionar solo en la parte de abajo de la
  if (
    muquiObj !== null &&
    naveEspacialObj !== null &&
    muquiObj.x < naveEspacialObj.x + naveEspacialObj.w &&
    muquiObj.x + muquiObj.w > naveEspacialObj.x &&
    muquiObj.y < naveEspacialObj.y + naveEspacialObj.h &&
    muquiObj.y + muquiObj.h > naveEspacialObj.y
  ) {

    salida();
    
  }
}

function nuevoMundo() {


  gameBoxNode.style.backgroundImage = `url("../imagenes/mundo-selva.png")`;


  ganasteScreenNode.style.display = "none";
  gameScreenNode.style.display = "flex";

  let direccionJugadorSelva = null

  if(direccionJugador==="./imagenes/muqui3-casco.png"){
   direccionJugadorSelva= "./imagenes/muqui3-selva.png"
  }

  if(direccionJugador==="./imagenes/muqui2-casco.png"){
    direccionJugadorSelva= "./imagenes/muqui2-selva.png"
   }

   if(direccionJugador==="./imagenes/muqui1-casco.png"){
    direccionJugadorSelva= "./imagenes/muqui1-selva.png"
   }
   muquiObj = new Muqui(direccionJugadorSelva,450,600);
   

}

function salida (){

  let salidaNaveIntervalId = setInterval(() => {
    if (naveEspacialObj===null){
        return
    }

       naveEspacialObj.salidaNave();
       muquiObj.salidaMuqui()

       if  (naveEspacialObj.y < -400){

        clearInterval(salidaNaveIntervalId)

        ganaste ()
       }
      }, 150);


}

function ganaste(){

    clearInterval(gameIntervalId);
     clearInterval(meteoritoIntervalId);

  // vuelve al empezar todo de  nuevo

  gameBoxNode.innerHTML = "";

  meteoritosArray = [];

  gameIntervalId = null;

  meteoritoIntervalId = null;

  muquiObj = null;

  naveEspacialObj = null;

  gameScreenNode.style.display = "none";
  ganasteScreenNode.style.display = "flex";

}


function reiniciarJuego(){
  gameOverScreenNode.style.display = "none";
  startGame();
}


function detectarColisionPiedras() { //colicionar solo en la parte de abajo de la
    if (
      muquiObj !== null &&
      piedraObj1 !== null &&
      muquiObj.x < piedraObj1.x + piedraObj1.w &&
      muquiObj.x + muquiObj.w > piedraObj1.x &&
      muquiObj.y < piedraObj1.y + piedraObj1.h &&
      muquiObj.y + muquiObj.h > piedraObj1.y
    ) {
  
     piedraObj1.eliminarPiedra()
     piedraObj1= null
      
    }
    if (
        muquiObj !== null &&
        piedraObj2 !== null &&
        muquiObj.x < piedraObj2.x + piedraObj2.w &&
        muquiObj.x + muquiObj.w > piedraObj2.x &&
        muquiObj.y < piedraObj2.y + piedraObj2.h &&
        muquiObj.y + muquiObj.h > piedraObj2.y
      ) {
    
       piedraObj2.eliminarPiedra()
       piedraObj2= null
        
      }
      if (
        muquiObj !== null &&
        piedraObj3 !== null &&
        muquiObj.x < piedraObj3.x + piedraObj3.w &&
        muquiObj.x + muquiObj.w > piedraObj3.x &&
        muquiObj.y < piedraObj3.y + piedraObj3.h &&
        muquiObj.y + muquiObj.h > piedraObj3.y
      ) {
    
       piedraObj3.eliminarPiedra()
       piedraObj3= null
        
      }

      mostrarNave()
  }

  function mostrarNave(){
    if(
        piedraObj1 === null && piedraObj2 === null && piedraObj3 === null && naveEspacialObj === null
    ){
        naveEspacialObj = new NaveEspacial();
    }
  }


//* EVENT LISTENERS
startBtnNode.addEventListener("click", startGame);

reiniciarBotonNode.addEventListener("click", reiniciarJuego);

nextMundoBotonNode.addEventListener("click",nuevoMundo);

muqui1Node.addEventListener("click",()=>{

    direccionJugador="./imagenes/muqui1-casco.png"
    muqui2Node.classList.remove("muqui-seleccionado")
    muqui3Node.classList.remove("muqui-seleccionado")
    muqui1Node.classList.add("muqui-seleccionado")
})

muqui2Node.addEventListener("click",()=>{

    direccionJugador="./imagenes/muqui2-casco.png"
    muqui1Node.classList.remove("muqui-seleccionado")
    muqui3Node.classList.remove("muqui-seleccionado")
    muqui2Node.classList.add("muqui-seleccionado")
})

muqui3Node.addEventListener("click",()=>{

    direccionJugador="./imagenes/muqui3-casco.png"

    muqui1Node.classList.remove("muqui-seleccionado")// para remover las selecciones no necesarias 
    muqui2Node.classList.remove("muqui-seleccionado")

    muqui3Node.classList.add("muqui-seleccionado")
})





/* 
 Planificación 
  1. tiene que pretar el boton estar y cambiar de pantalla de inicio a pantalla de juego 
  2. tiene que aparecer el mundo espacial con muqui y la nave
  3. tienen que aparecer los meteoritos aleatorios en el espacio
  4. colision de muqui con los meteoritos.
  5. muqui se mueve en todas las dimesiones del espacio y evita los meteoritos.
  6. muqui es interceptado por los meteoritos y pierde 1 vida.
  7. muqui tiene 3 vidas o vuelve a iniciar el juego.(pantalla de fin de juego)
  8. muqui llega a la nave espacial y pasa al otro mundo.
 */
