class Meteorito {
    constructor(posicionX) {
     
      this.x = posicionX;
      this.y = -800;
      this.h = 80;
      this.w = 25;
      this.ubicacionSpeed = 5; // velocidad inicial
      
  
      
  
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

