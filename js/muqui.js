class Muqui {

    constructor() {
  
      // .todos los muquis se crearan con estos valores
      this.x = 450;
      this.y = 300;
      this.h = 120;
      this.w = 90;
      this.gravitySpeed = 2;
      
  
  
      // al crear el muqui:
  
      // 1. añadir el muqui al DOM
      this.nodeMuqui = document.createElement("img")
      this.nodeMuqui.src = "./imagenes/muqui.png" 
      gameBoxNode.append(this.nodeMuqui)
  
      // 2. ajustamos sus dimensiones y posiciones
      this.nodeMuqui.style.width = `${this.w}px`
      this.nodeMuqui.style.height = `${this.h}px`
      this.nodeMuqui.style.position = "absolute" 
      this.nodeMuqui.style.top = `${this.y}px`
      this.nodeMuqui.style.left = `${this.x}px`
  
  
    }
}