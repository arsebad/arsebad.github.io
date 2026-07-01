class Jugador extends Entidad {
    constructor(x, y) {
        super(x, y);
        this.vida = 100;
        this.velocidad = 3;
        this.estado = 0;
        this.ataque = 100;
        this.entidad.setAttribute("id", "jugador");
        this.time = 0;
    }

    definirHitbox() {
        let valorHB =  [
        HBx = this.x + 5,
        HBy = this.y + 5,
        HBalto = 5,
        HBancho = 5
        ]

        return valorHB;
    }

    actualizarUbicacion(x, y){
        super.ActualizarUbicacion(x, y);
    }

    limitarAlMundo(ancho, alto) {

        if (this.x < 0) this.x = 0;
        if (this.y < 0) this.y = 0;

        if (this.x > ancho) this.x = ancho;
        if (this.y > alto) this.y = alto;
    }

    moverteclado(){

        if (teclas.ArrowLeft) {
            //movimiento izquierda
            this.x -= this.velocidad
            this.estado = 11
        }

         if (teclas.ArrowDown) {
            //movimiento abajo
            this.y += this.velocidad
            this.estado = 1
        }

         if (teclas.ArrowUp) {
            //movimiento arriba
            this.y -= this.velocidad
            this.estado = 1
        }

         if (teclas.ArrowRight) {
            //movimiento derecha
            this.x += this.velocidad
            this.estado = 12
        }

    }

    movertactil() {

        xplayer = this.x;
        yplayer = this.y;

        if (!isPressed) return;

           if (inputx === null || inputy === null) return;

        let origendireccion = xplayer


        let playerScreenX = xplayer - xcamera;
        let playerScreenY = yplayer - ycamera;


        let dx = inputx - playerScreenX;
        let dy = inputy - playerScreenY;


        let distancia = Math.hypot(dx, dy);


        if(distancia < deadZone)return;


        let nx = dx / distancia;
        let ny = dy / distancia;

        let xnewvelocidad = nx * this.velocidad;
        let ynewvelocidad = ny * this.velocidad;

        this.x = (xplayer += xnewvelocidad);
        this.y = (yplayer += ynewvelocidad);

        if (origendireccion > this.x) {
            estadoPlayer = 11
        } else if (origendireccion < this.x) {
            estadoPlayer = 12
        }   else {
            estadoPlayer = 1
        }


    }

    actualizarEstado(){
        if (keys.KeyZ) {
            this.estado = 2;
        }

        if (keys.KeyX) {
            this.estado = 3;
        }
    }



    actualizarAccion(estado, time){

    let spritesN = 0;
    let spritesW = 128;

    switch (estado) {

        case 1:
            this.entidad.style.backgroundImage = "url('assets/img/player/Walk.png')";
            spritesN = 8;

        break;

        case 2:
            this.entidad.style.backgroundImage = "url('assets/img/player/Attack_1.png')";
            spritesN = 8;
            break;
        
        case 3:
            this.entidad.style.backgroundImage = "url('assets/img/player/Jump.png')";
            spritesN = 12;
            break;

        case 11:
            this.entidad.style.backgroundImage = "url('assets/img/player/RunLeft.png')";
            spritesN = 8;
            break;

        case 12:
            this.entidad.style.backgroundImage = "url('assets/img/player/RunRight.png')";
            spritesN = 8;
            
            break;

        default:
            this.entidad.style.backgroundImage = "url('assets/img/player/Idle.png')";
            spritesN = 6;
            break;
    }

    this.animaSprite(spritesN, spritesW, time);

    }

    animaSprite(spritesN, spritesW, time){

        let velocidadAnimacion = 100;
        if(this.estado = 0)velocidadAnimacion = 50; 

        if(time - lastUpdate > velocidadAnimacion){

            currentFrame++;

            if(currentFrame >= spritesN){
                currentFrame = 0;
            }

            const posicionX = -(currentFrame * spritesW);

            this.entidad.style.backgroundPosition = `${posicionX}px 0px`;

            lastUpdate = time;
        }
    }

    actualizar(time) {
        this.moverteclado();
        this.actualizarUbicacion(this.x, this.y);
        this.actualizarEstado();
        this.actualizarAccion(this.estado, time);
    }

}




/*
hitbox para ataque: se crea en automatico en estado de ataque

hitbox de objeto: mas importante el de bot, luego left y right, finalmente top
*/