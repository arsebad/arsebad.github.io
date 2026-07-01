class Musica {
    constructor(ruta){
        this.sonido = new Audio(ruta);

        this.sonido.loop = true;
        this.sonido.volume = 0.5;

        
    }

    reproducir(){
        this.sonido.play();
    }

    pausar(){
        this.sonido.pause();
    }
    
}

    


