

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



document.addEventListener("keydown", (event)=> {
    if(!keys[event.code] ){
        actualizarEstado(event.code);
    }

    keys[event.code] = true;
})

