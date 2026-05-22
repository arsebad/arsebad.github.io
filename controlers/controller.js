

function mover(){

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

        //pointer

    
        cuadrado.style.left = xplayer + "px";
        cuadrado.style.top = yplayer + "px";


    }

