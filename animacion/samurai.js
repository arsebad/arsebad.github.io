

function animaSprite(spritesN, spritesW, time){

    const velocidadAnimacion = 100;

    if(time - lastUpdate > velocidadAnimacion){

        currentFrame++;

        if(currentFrame >= spritesN){
            currentFrame = 0;
        }

        const posicionX = -(currentFrame * spritesW);

        player.style.backgroundPosition = `${posicionX}px 0px`;

        lastUpdate = time;
    }
}