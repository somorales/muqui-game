// aca se une todo

// pantallas
const splashScreenNode = document.querySelector("#splash-screen")
const gameScreenNode = document.querySelector("#game-screen")
const gameOverScreenNode = document.querySelector("#game-over-screen")

// boton 
const startBtnNode = document.querySelector("#start-btn")

// game box
const gameBoxNode = document.querySelector("#game-box")


// variables del juego
// todas las variables que van a usarse en el juego 




// *Funciones globales del juego
function startGame(){


   // 1.cambiar pantalla 
    splashScreenNode.style.display = "none"
    gameScreenNode.style.display = "flex"

    //// 2. añadir todos los elementos inicial del juego

   const muquiObj = new Muqui()
    const naveEspacialObj = new NaveEspacial ()
    naveEspacialObj.ubicarNave()
}


//* EVENT LISTENERS
startBtnNode.addEventListener("click", startGame)
 



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


  