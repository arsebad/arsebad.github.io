

function moverteclado(){

        if (teclas.ArrowLeft) {
            //movimiento izquierda
            xplayer -= velocidad
        }

         if (teclas.ArrowDown) {
            //movimiento abajo
            yplayer += velocidad
        }

         if (teclas.ArrowUp) {
            //movimiento arriba
            yplayer -= velocidad
        }

         if (teclas.ArrowRight) {
            //movimiento derecha
            xplayer +=velocidad
        }

    }


    function movertactil() {
        if (!isPressed) return;

           if (inputx === null || inputy === null) return;


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


    }

