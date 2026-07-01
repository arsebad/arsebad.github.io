class Mundo {
    constructor(jugador) { //que informacion necesita para exisitir
        this.xCamara = 0;
        this.yCamara = 0;
        this.margen = 200;
        


        this.mundo = document.createElement("div");
        document.getElementById("juego").appendChild(this.mundo);
        
        this.mundo.classList.add("mundo");
        this.mundo.setAttribute("id", "mundo");
        
    };

    obtenerjugador(jugador) {
        this.jugador = jugador;
        return this.jugador;
    }   

    obtenerAncho(){  
        this.ancho = this.mundo.offsetWidth;
    }

    obtenerAlto(){
        this.alto = this.mundo.offsetHeight;
    }

    


        actualizarCamara() {

        const screenWidth = window.innerWidth;
        const screenHeight = window.innerHeight;

        const xplayer = this.jugador.x;
        const yplayer = this.jugador.y;

        const xcamera = this.xCamara;
        const ycamera = this.yCamara;

        const margen = this.margen;

        if (xplayer - xcamera > screenWidth - margen) {
            this.xCamara = xplayer - (screenWidth - margen);
        }

        if (xplayer - xcamera < margen) {
            this.xCamara = xplayer - margen;
        }

        if (yplayer - ycamera > screenHeight - margen) {
            this.yCamara = yplayer - (screenHeight - margen);
        }

        if (yplayer - ycamera < margen) {
            this.yCamara = yplayer - margen;
        }

        const worldWidth = this.obtenerAncho();
        const worldHeight = this.obtenerAlto();

        this.xCamara = Math.max(0, this.xCamara);
        this.yCamara = Math.max(0, this.yCamara);

        this.xCamara = Math.min(this.xCamara, worldWidth - screenWidth);
        this.yCamara = Math.min(this.yCamara, worldHeight - screenHeight);
    }

    aplicarCamara() {
        this.mundo.style.left = -this.xCamara + "px";
        this.mundo.style.top = -this.yCamara + "px";
    }

    actualizar() {

        const w = this.obtenerAncho();
        const h = this.obtenerAlto();

        this.jugador.limitarAlMundo(w, h);

        this.actualizarCamara();
        this.aplicarCamara();
    }



    actualizarCamara(jugador) {
        this.mundo.style.left = -xcamera + "px";
        this.mundo.style.top = -ycamera + "px";
    }
}