let isPressed = false;



let lastx = 0;
let lasty = 0;

const deadZone = 4;


window.addEventListener("pointerdown", (event)=> {
    isPressed = true
    lastx = event.clientX;
    lasty = event.clientY;

        for (let key in teclas) {
        teclas[key] = true;
    }
})

window.addEventListener("pointermove", (event)=> {
    if(!isPressed)return;

    const dx = event.clientX - lastx;
    const dy = event.clientY - lasty;


    for (let key in teclas) {
    teclas[key] = false;
    }

    if(Math.abs(dx) < deadZone && math.abs(dy) < deadZone) return;

 if (Math.abs(dx) >= Math.abs(dy)) {
    if (dx > 0) teclas.ArrowRight = true;
    if (dx < 0) teclas.ArrowLeft = true;
} else {
    if (dy > 0) teclas.ArrowDown = true;
    if (dy < 0) teclas.ArrowUp = true;
}

    if(dx > 0) teclas.ArrowRight = true;
    if(dy > 0) teclas.ArrowDown = true;
    if(dx < 0) teclas.ArrowLeft = true;
    if(dy < 0) teclas.ArrowUp = true;

    lastx = event.clientX;
    lasty =  event.clientY;

})

window.addEventListener("pointerup", (event)=> {
    isPressed = false;

    for (let key in teclas) {
        teclas[key] = false;
    }

})

