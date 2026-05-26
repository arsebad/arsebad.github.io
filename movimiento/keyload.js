

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

