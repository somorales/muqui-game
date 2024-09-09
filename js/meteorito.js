class Meteorito {
    constructor(posicionX) {
      // .todos los muquis se crearan con estos valores
      this.x = posicionX;
      this.y = -700;
      this.h = 150;
      this.w = 90;
      this.ubicacionSpeed = 10; // velocidad inicial
      
  
      // al crear el muqui:
  
      // 1. añadir el muqui al DOM
      this.nodeMeteorito = document.createElement("img");
      this.nodeMeteorito.src = "./imagenes/meteorito.png";
      gameBoxNode.append(this.nodeMeteorito);
  
      // 2. ajustamos sus dimensiones y posiciones
      this.nodeMeteorito.style.width = `${this.w}px`;
      this.nodeMeteorito.style.height = `${this.h}px`;
      this.nodeMeteorito.style.position = "absolute";
      this.nodeMeteorito.style.top = `${this.y}px`;
      this.nodeMeteorito.style.left = `${this.x}px`;
  
  
      }

      automaticMovement() {
        this.y += this.ubicacionSpeed

        this.nodeMeteorito.style.top = `${this.y}px` 
      }
    
    
    }

