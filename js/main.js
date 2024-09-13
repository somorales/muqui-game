// aca se une todo

// pantallas
const splashScreenNode = document.querySelector("#splash-screen");
const gameScreenNode = document.querySelector("#game-screen");
const gameOverScreenNode = document.querySelector("#game-over-screen");
const ganasteScreenNode = document.querySelector("#ganaste-screen");
const muqui1Node = document.querySelector("#muqui1");
const muqui2Node = document.querySelector("#muqui2");
const muqui3Node = document.querySelector("#muqui3");
const muquiTristeNode = document.querySelector("#muqui-triste");
const muquiFelizNode = document.querySelector("#muqui-feliz");
const audioNode = document.querySelector("#sonido") 
const audioNaveNode = document.querySelector("#sonido1")

// boton
const startBtnNode = document.querySelector("#start-btn");
const reiniciarBotonNode = document.querySelector("#reiniciar-btn");
const nextMundoBotonNode = document.querySelector("#nuevo-mundo-btn");

// game box
const gameBoxNode = document.querySelector("#game-box");

// variables del juego
let meteoritosArray = [];

let meteoritos2Array = [];

let gameIntervalId = null;

let meteoritoIntervalId = null;

let meteorito2IntervalId = null;

let muquiObj = null;

let naveEspacialObj = null;

let direccionJugador = null;

let piedraObj1 = null;

let piedraObj2 = null;

let piedraObj3 = null;

let piedraObj4 = null;

let piedraObj5 = null;

let muquiPerdioJuego = false;
let subioANave = false;

// *Funciones globales del juego
function startGame() {
  if (direccionJugador === null) {
    return;
  }
  // 1.cambiar pantalla
  splashScreenNode.style.display = "none";
  gameScreenNode.style.display = "flex";

  gameBoxNode.classList.add("vibrando");
  audioNode.currentTime = 0; // reproducuir audio desde el inicio 
  audioNode.play()

  muquiPerdioJuego = false;

  //// 2. añadir todos los elementos inicial del juego

  muquiObj = new Muqui(direccionJugador, 850, 550);
  piedraObj1 = new Piedra(1200, 200);
  piedraObj2 = new Piedra(200, 600);
  piedraObj3 = new Piedra(600, 300);
  piedraObj4 = new Piedra(1200, 600);
  piedraObj5 = new Piedra(250, 200);

  gameIntervalId = setInterval(() => {
    gameLoop();
  }, Math.round(1000 / 60));

  meteoritoIntervalId = setInterval(() => {
    addMeteorito();
  }, 700);

  meteorito2IntervalId = setInterval(() => {
    addMeteorito2();
  }, 4000);
}

//funciones necesarias para integrar a la funcion global del juego
function gameLoop() {
  meteoritosArray.forEach((cadaMeteorito) => {
    cadaMeteorito.automaticMovement();
  });
  meteoritos2Array.forEach((cadaMeteorito) => {
    cadaMeteorito.automaticMovement();
  });

  if(subioANave === false){
    detectarColisionMuquiMeteoritos();
    detectarColisionMuquiMeteoritos2();
  }
  detectarColisionPiedras();
  detectarColisionNave();
}

function addMeteorito() {
  let randomPosicionX = Math.floor(Math.random() * 1300); // entre -150 y 0

  let nuevoMeteorito = new Meteorito(randomPosicionX);
  meteoritosArray.push(nuevoMeteorito);
}

function addMeteorito2(){
    let randomPosicionX = Math.floor(Math.random() * 1300); // entre -150 y 0

  let nuevoMeteorito = new Meteorito2(randomPosicionX);
  meteoritos2Array.push(nuevoMeteorito);
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

function detectarColisionMuquiMeteoritos2() {
    if (meteoritos2Array.length === 0) {
      return; // no ejecutar la funcion si el array está vacio
    }
  
    meteoritos2Array.forEach((cadaMeteorito) => {
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
  muquiPerdioJuego = true;
  subioANave = false;
  // 1. limpiar los intervalos
  clearInterval(gameIntervalId);
  clearInterval(meteoritoIntervalId);

  // vuelve al empezar todo de  nuevo

  gameBoxNode.innerHTML = "";

  meteoritosArray = [];

  meteoritos2Array = [];

  gameIntervalId = null;

  meteoritoIntervalId = null;

  muquiObj = null;

  naveEspacialObj = null;
  piedraObj1 = null;
  piedraObj2 = null;
  piedraObj3 = null;
  piedraObj4 = null;
  piedraObj5 = null;

  gameScreenNode.style.display = "none";
  gameOverScreenNode.style.display = "flex";

  let direccionJugadorTriste = null;

  if (direccionJugador === "./imagenes/muqui1-casco.png") {
    direccionJugadorTriste = "./imagenes/muqui1-triste.png"
    
  }

  muquiTristeNode.src = direccionJugadorTriste;

  if (direccionJugador === "./imagenes/muqui2-casco.png") {
    direccionJugadorTriste = "./imagenes/muqui2-triste.png";
  }

  muquiTristeNode.src = direccionJugadorTriste;

  if (direccionJugador === "./imagenes/muqui3-casco.png") {
    direccionJugadorTriste = "./imagenes/muqui3-triste.png";
  }

  
  muquiTristeNode.src = direccionJugadorTriste;
  muquiTristeNode.classList.add("vibrando2");

}

function detectarColisionNave() {
  //colicionar solo en la parte de abajo de la
  if (
    muquiObj !== null &&
    naveEspacialObj !== null &&
    muquiObj.x < naveEspacialObj.x + naveEspacialObj.w &&
    muquiObj.x + muquiObj.w > naveEspacialObj.x &&
    muquiObj.y < naveEspacialObj.y + naveEspacialObj.h &&
    muquiObj.y + muquiObj.h > naveEspacialObj.y
  ) {
    audioNaveNode.currentTime = 0; // reproducuir audio desde el inicio 
    audioNaveNode.play()
    subioANave = true
    salida();
  }
}

function nuevoMundo() {
  gameBoxNode.style.backgroundImage = `url("./imagenes/mundo-selva.png")`;

  ganasteScreenNode.style.display = "none";
  gameScreenNode.style.display = "flex";

  let direccionJugadorSelva = null;

  if (direccionJugador === "./imagenes/muqui3-casco.png") {
    direccionJugadorSelva = "./imagenes/muqui3-selva.png";
  }

  if (direccionJugador === "./imagenes/muqui2-casco.png") {
    direccionJugadorSelva = "./imagenes/muqui2-selva.png";
  }

  if (direccionJugador === "./imagenes/muqui1-casco.png") {
    direccionJugadorSelva = "./imagenes/muqui1-selva.png";
  }
  muquiObj = new Muqui(direccionJugadorSelva, 450, 650);
}

function salida() {
  let salidaNaveIntervalId = setInterval(() => {
    if (naveEspacialObj === null) {
      return;
    }

    naveEspacialObj.salidaNave();
    muquiObj.salidaMuqui();

    if (naveEspacialObj.y < -400) {
      clearInterval(salidaNaveIntervalId);

      ganaste();
    }
  }, 150);
}

function ganaste() {
  clearInterval(gameIntervalId);
  clearInterval(meteoritoIntervalId);

  // vuelve al empezar todo de  nuevo
  gameBoxNode.innerHTML = "";
  muquiPerdioJuego = false;

  meteoritosArray = [];

  meteoritos2Array = [];

  gameIntervalId = null;

  meteoritoIntervalId = null;

  muquiObj = null;

  naveEspacialObj = null;

  muquiFelizNode.src = direccionJugador;
  muquiFelizNode.classList.add("vibrando2")

  gameScreenNode.style.display = "none";
  ganasteScreenNode.style.display = "flex";
}

function reiniciarJuego() {
  gameOverScreenNode.style.display = "none";
  startGame();
}

function detectarColisionPiedras() {
  //colicionar solo en la parte de abajo de la
  if (muquiPerdioJuego) {
    return;
  }
  if (
    muquiObj !== null &&
    piedraObj1 !== null &&
    muquiObj.x < piedraObj1.x + piedraObj1.w &&
    muquiObj.x + muquiObj.w > piedraObj1.x &&
    muquiObj.y < piedraObj1.y + piedraObj1.h &&
    muquiObj.y + muquiObj.h > piedraObj1.y
  ) {
    piedraObj1.eliminarPiedra();
    piedraObj1 = null;
  }

  if (
    muquiObj !== null &&
    piedraObj2 !== null &&
    muquiObj.x < piedraObj2.x + piedraObj2.w &&
    muquiObj.x + muquiObj.w > piedraObj2.x &&
    muquiObj.y < piedraObj2.y + piedraObj2.h &&
    muquiObj.y + muquiObj.h > piedraObj2.y
  ) {
    piedraObj2.eliminarPiedra();
    piedraObj2 = null;
  }

  if (
    muquiObj !== null &&
    piedraObj3 !== null &&
    muquiObj.x < piedraObj3.x + piedraObj3.w &&
    muquiObj.x + muquiObj.w > piedraObj3.x &&
    muquiObj.y < piedraObj3.y + piedraObj3.h &&
    muquiObj.y + muquiObj.h > piedraObj3.y
  ) {
    piedraObj3.eliminarPiedra();
    piedraObj3 = null;
  }

  if (
    muquiObj !== null &&
    piedraObj4 !== null &&
    muquiObj.x < piedraObj4.x + piedraObj4.w &&
    muquiObj.x + muquiObj.w > piedraObj4.x &&
    muquiObj.y < piedraObj4.y + piedraObj4.h &&
    muquiObj.y + muquiObj.h > piedraObj4.y
  ) {
    piedraObj4.eliminarPiedra();
    piedraObj4 = null;
  }

  if (
    muquiObj !== null &&
    piedraObj5 !== null &&
    muquiObj.x < piedraObj5.x + piedraObj5.w &&
    muquiObj.x + muquiObj.w > piedraObj5.x &&
    muquiObj.y < piedraObj5.y + piedraObj5.h &&
    muquiObj.y + muquiObj.h > piedraObj5.y
  ) {
    piedraObj5.eliminarPiedra();
    piedraObj5 = null;
  }

  mostrarNave();
}

function mostrarNave() {
  if (
    piedraObj1 === null &&
    piedraObj2 === null &&
    piedraObj3 === null &&
    piedraObj4 === null &&
    piedraObj5 === null &&
    naveEspacialObj === null
  ) {
    naveEspacialObj = new NaveEspacial();
  }
}

//* EVENT LISTENERS
startBtnNode.addEventListener("click", startGame);

reiniciarBotonNode.addEventListener("click", reiniciarJuego);

nextMundoBotonNode.addEventListener("click", nuevoMundo);

muqui1Node.addEventListener("click", () => {
  direccionJugador = "./imagenes/muqui1-casco.png";
  muqui2Node.classList.remove("muqui-seleccionado");
  muqui3Node.classList.remove("muqui-seleccionado");
  muqui1Node.classList.add("muqui-seleccionado");
});

muqui2Node.addEventListener("click", () => {
  direccionJugador = "./imagenes/muqui2-casco.png";
  muqui1Node.classList.remove("muqui-seleccionado");
  muqui3Node.classList.remove("muqui-seleccionado");
  muqui2Node.classList.add("muqui-seleccionado");
});

muqui3Node.addEventListener("click", () => {
  direccionJugador = "./imagenes/muqui3-casco.png";

  muqui1Node.classList.remove("muqui-seleccionado"); // para remover las selecciones no necesarias
  muqui2Node.classList.remove("muqui-seleccionado");

  muqui3Node.classList.add("muqui-seleccionado");
});

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
