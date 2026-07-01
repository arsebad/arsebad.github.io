    const teclas = {
        ArrowLeft: false,
        ArrowDown: false,
        ArrowUp: false,
        ArrowRight: false,

    };      

    const keys = {
    KeyZ: false,
    KeyX: false
        }






      
    const mundo = new Mundo();
    const jugador = new Jugador(100, 100);
    const sonido = new Musica("assets/audio/sound_0.mp3");


    mundo.obtenerjugador(jugador);
  

    let xcamera = 0;
    let ycamera = 0;

    let currentFrame = 0;
    let lastUpdate = 0;

    const botonReproducir = new Boton("multimedia", "reproducir", "reproducir");
    const botonPausa = new Boton("multimedia", "pausa", "pausar");


    botonReproducir.boton.addEventListener("click", () => {
        sonido.reproducir();
    });

    botonPausa.boton.addEventListener("click", () => {
        sonido.pausar();
    });

function loop(time) {
    mundo.actualizar();
    jugador.actualizar(time);



    


    requestAnimationFrame(loop);
}

    requestAnimationFrame(loop);
