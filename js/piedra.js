class Piedra {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.h = 60;
    this.w = 60;
    this.ubicacionSpeed = 5; // velocidad inicial
    this.flotarSpeed = 1.5; //velociadad flotante

    // 1. añadir el muqui al DOM
    this.nodePiedra = document.createElement("img");
    this.nodePiedra.src = "./imagenes/piedra.png";
    gameBoxNode.append(this.nodePiedra);

    // 2. ajustamos sus dimensiones y posiciones
    this.nodePiedra.style.width = `${this.w}px`;
    this.nodePiedra.style.height = `${this.h}px`;
    this.nodePiedra.style.position = "absolute";
    this.nodePiedra.style.top = `${this.y}px`;
    this.nodePiedra.style.left = `${this.x}px`;
    this.flotar();
  }

  flotar() {   // efecto de flotar sumando y restando en y 
    let deboSumar = true;

    const naveFlotando = setInterval(() => {
      if (deboSumar) {
        this.y += this.flotarSpeed;

        this.nodePiedra.style.top = `${this.y}px`;

        deboSumar = false;
      } else {
        this.y -= this.flotarSpeed;

        this.nodePiedra.style.top = `${this.y}px`;

        deboSumar = true;
      }
    }, 50);
  }

  eliminarPiedra() {
    this.nodePiedra.remove();
  }
}
