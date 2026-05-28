

function moverteclado(){

        if (teclas.ArrowLeft) {
            //movimiento izquierda
            xplayer -= velocidad
            estadoPlayer = 11
        }

         if (teclas.ArrowDown) {
            //movimiento abajo
            yplayer += velocidad
            estadoPlayer = 1
        }

         if (teclas.ArrowUp) {
            //movimiento arriba
            yplayer -= velocidad
            estadoPlayer = 1
        }

         if (teclas.ArrowRight) {
            //movimiento derecha
            xplayer +=velocidad
            estadoPlayer = 12
        }

    }


    function movertactil() {
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

        let xnewvelocidad = nx * velocidad;
        let ynewvelocidad = ny * velocidad;

        xplayer += xnewvelocidad;
        yplayer += ynewvelocidad;

        if (origendireccion > xplayer) {
            estadoPlayer = 11
        } else if (origendireccion < xplayer) {
            estadoPlayer = 12
        }   else {
            estadoPlayer = 1
        }


    }

