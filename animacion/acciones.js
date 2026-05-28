function actualizarAccion(estado, time){

    let spritesN = 0;
    let spritesW = 128;

switch (estado) {

    case 1:
        player.style.backgroundImage = "url('assets/img/player/Walk.png')";
        spritesN = 8;

    break;

    case 2:
        player.style.backgroundImage = "url('assets/img/player/Attack_1.png')";
        spritesN = 6;
        break;

    case 11:
        player.style.backgroundImage = "url('assets/img/player/RunLeft.png')";
        spritesN = 8;
        break;

    case 12:
        player.style.backgroundImage = "url('assets/img/player/RunRight.png')";
        spritesN = 8;
        
        break;

    default:
        player.style.backgroundImage = "url('assets/img/player/Idle.png')";
        spritesN = 6;
        break;
}

animaSprite(spritesN, spritesW, time);


estadoPlayer = 0

}