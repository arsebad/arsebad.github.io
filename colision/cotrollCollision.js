        checkCollision(
            { x: xplayer, y: yplayer, w: cuadrado.offsetWidth, h: cuadrado.offsetHeight },
            { x: xnpc, y: ynpc, w: npc.offsetWidth, h: npc.offsetHeight }
        );

        if (collisionState.isColliding) {
            cuadrado.style.display = "none";
            return;
        }