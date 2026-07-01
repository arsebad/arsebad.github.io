

document.addEventListener("keydown", (event)=>{
    if (event.key in teclas) {
        teclas [event.key] = true;
    }
} );


document.addEventListener("keyup", (event)=>{
    if (event.key in teclas) {
        teclas [event.key] = false;
    }
} );


document.addEventListener("keydown", (event) => {
    if (keys[event.code]) return;

    keys[event.code] = true;
    jugador.actualizarEstado(event.code);
});

document.addEventListener("keyup", (event) => {
    keys[event.code] = false;
});




