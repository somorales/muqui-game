class Meteorito2 {
    constructor(posicionX) {
     
      this.x = posicionX;
      this.y = -1600;
      this.h = 80;
      this.w = 25;
      this.ubicacionSpeed = 10; // velocidad inicial
      
  
      
  
      // 1. añadir el muqui al DOM
      this.nodeMeteorito2 = document.createElement("img");
      this.nodeMeteorito2.src = "./imagenes/meteorito2.png";
      gameBoxNode.append(this.nodeMeteorito2);
  
      // 2. ajustamos sus dimensiones y posiciones
      this.nodeMeteorito2.style.width = `${this.w}px`;
      this.nodeMeteorito2.style.height = `${this.h}px`;
      this.nodeMeteorito2.style.position = "absolute";
      this.nodeMeteorito2.style.top = `${this.y}px`;
      this.nodeMeteorito2.style.left = `${this.x}px`;
  
  
      }

      automaticMovement() {
        this.y += this.ubicacionSpeed

        this.nodeMeteorito2.style.top = `${this.y}px` 
      }
    
    
    }