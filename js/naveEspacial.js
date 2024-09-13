class NaveEspacial {
  constructor() {
    this.x = 300;
    this.y = -300;
    this.h = 110;
    this.w = 290;
    this.ubicacionSpeed = 5; // velocidad inicial
    this.flotarSpeed = 1.5; //velociadad flotante
    this.posicionFinal = 100;

  

    // 1. añadir el muqui al DOM
    this.nodeNaveEspacial = document.createElement("img");
    this.nodeNaveEspacial.src = "./imagenes/nave-espacial.png";
    gameBoxNode.append(this.nodeNaveEspacial);

    // 2. ajustamos sus dimensiones y posiciones
    this.nodeNaveEspacial.style.width = `${this.w}px`;
    this.nodeNaveEspacial.style.height = `${this.h}px`;
    this.nodeNaveEspacial.style.position = "absolute";
    this.nodeNaveEspacial.style.top = `${this.y}px`;
    this.nodeNaveEspacial.style.left = `${this.x}px`;
    this.ubicarNave();
  }

  // hacer que la nave baje hasta la posicion inicial

  ubicarNave() {
    const naveIntervalo = setInterval(() => {
      this.y += this.ubicacionSpeed;

      this.nodeNaveEspacial.style.top = `${this.y}px`;

      if (this.y >= this.posicionFinal) {
        clearInterval(naveIntervalo);

        this.flotar();
      }
    }, 10);
  }
  // que la nave quede flotando

  flotar() {
    let deboSumar = true;

    const naveFlotando = setInterval(() => {
      if (deboSumar) {
        this.y += this.flotarSpeed;

        this.nodeNaveEspacial.style.top = `${this.y}px`;

        deboSumar = false;
      } else {
        this.y -= this.flotarSpeed;

        this.nodeNaveEspacial.style.top = `${this.y}px`;

        deboSumar = true;
      }
    }, 100);
  }

  salidaNave() {
    this.y -= 10;

    this.nodeNaveEspacial.style.top = `${this.y}px`;
  }
}
