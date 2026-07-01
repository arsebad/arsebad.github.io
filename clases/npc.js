class NPC extends Entidad {
    constructor(x, y){
        super(x, y);
        this.vida = 10;
        this.velocidad = 2;
        this.entidad.setAttribute("id", "jugador");
        this.time = 0;
    }

    actualizarUbicacionNPC(x, y){
        this.actualizarUbicacion(x,y)
    }

    
}