class NaveEspacial {
    constructor() {
      // .todos los muquis se crearan con estos valores
      this.x = 100;
      this.y = -50;
      this.h = 140;
      this.w =110;
      this.ubicacionSpeed = 5; // velocidad inicial
      this.flotarSpeed = 1.5;    //velociadad flotante
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
      this.ubicarNave()
  
      };

     // hacer que la nave baje hasta la posicion inicial 

      ubicarNave() {

       const naveIntervalo = setInterval(() => {

            this.y += this.ubicacionSpeed

        this.nodeNaveEspacial.style.top = `${this.y}px` 

        if(this.y >= this.posicionFinal){
            clearInterval(naveIntervalo);

            this.flotar()
        }
          }, 5);

    }
    // que la nave quede flotando 

    flotar() {

        let deboSumar= true

        const naveFlotando = setInterval (()=> {

            if (deboSumar){

                this.y += this.flotarSpeed 
        
                this.nodeNaveEspacial.style.top = `${this.y}px` 

                deboSumar= false

            } else{

                this.y -= this.flotarSpeed 
        
                this.nodeNaveEspacial.style.top = `${this.y}px` 

                deboSumar = true
            }

        }, 200)
    }


    salidaNave() {

        this.y -= 10

        this.nodeNaveEspacial.style.top = `${this.y}px` 
    }

}




  
    
  