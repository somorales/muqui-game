class NaveEspacial {
    constructor() {
      // .todos los muquis se crearan con estos valores
      this.x = 100;
      this.y = -50;
      this.h = 120;
      this.w = 90;
      this.gravitySpeed = 5; // velocidad
      this.posicionFinal= 250
  
      // al crear el muqui:
  
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
  
  
      };

     // hacer que la nave baje hasta la posicion inicial 

      ubicarNave() {

       const naveIntervalo = setInterval(() => {

            this.y += this.gravitySpeed

        this.nodeNaveEspacial.style.top = `${this.y}px` 

        if(this.y >= this.posicionFinal){
            clearInterval(naveIntervalo);
        }
          }, 20);

    }

}




  
    
  