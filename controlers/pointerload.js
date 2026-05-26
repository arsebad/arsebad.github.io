let isPressed = false;



let inputx = 0;
let inputy = 0;


let starttouchx = 0;
let starttouchy = 0;

const deadZone = 10;



window.addEventListener("pointerdown", (event)=> {
    isPressed = true
    starttouchx = event.clientX;
    starttouchy = event.clientY;
})

window.addEventListener("pointermove", (event)=> {
    if(!isPressed)return;

   inputx = event.clientX;
   inputy = event.clientY;
})

window.addEventListener("pointerup", (event)=> {
    isPressed = false;

    inputx = 0;
    inputy = 0;

    starttouchx = 0;
    starttouchy = 0;

    return;

})

window.addEventListener("pointercancel", (event) => {
    isPressed = false;
});

