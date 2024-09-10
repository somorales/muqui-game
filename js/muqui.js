class Muqui {
  constructor(imagen,x,y) {
    // .todos los muquis se crearan con estos valores
    this.x = x;
    this.y = y;
    this.h = 120;
    this.w = 90;
    this.speed = 20;

    // al crear el muqui:

    // 1. añadir el muqui al DOM
    this.nodeMuqui = document.createElement("img");
    this.nodeMuqui.src = imagen;
    gameBoxNode.append(this.nodeMuqui);

    // 2. ajustamos sus dimensiones y posiciones
    this.nodeMuqui.style.width = `${this.w}px`;
    this.nodeMuqui.style.height = `${this.h}px`;
    this.nodeMuqui.style.position = "absolute";
    this.nodeMuqui.style.top = `${this.y}px`;
    this.nodeMuqui.style.left = `${this.x}px`;

    window.addEventListener("keydown", (event) => {
      if (event.key === "ArrowRight") {
        // console.log("moviendo a la derecha")
        this.muquiMovimiento("right");
      } else if (event.key === "ArrowLeft") {
        // console.log("moviendo a la izquierda")
        this.muquiMovimiento("left");
      } else if (event.key === "ArrowUp") {
        this.muquiMovimiento("up");
      } else if (event.key === "ArrowDown"){
        this.muquiMovimiento("down")
      }
      

    });
  }

  muquiMovimiento(direccion) {
    if (direccion === "right") {
      this.x += this.speed; // left es la posicion en X left + es ir a la derecha - es ir a la izquierda
      this.nodeMuqui.style.left = `${this.x}px`;
    } else if (direccion === "left") {
      this.x -= this.speed;
      this.nodeMuqui.style.left = `${this.x}px`;
    } else if (direccion === "up") {
        this.y -= this.speed;
        this.nodeMuqui.style.top = `${this.y}px`
    } else if (direccion === "down") {
        this.y += this.speed;
        this.nodeMuqui.style.top = `${this.y}px`
    }
  }

}
