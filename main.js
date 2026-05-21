const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");

canvas.width = innerWidth;
canvas.height = innerHeight;

// globals (sin módulos)
const actions = {
    move: { x: 0, y: 0 }
};

const input = new InputManager(canvas);
setupInput(input, actions);

const player = new Player();

function loop() {

    player.update(actions);

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    player.draw(ctx);

    requestAnimationFrame(loop);
}

loop();