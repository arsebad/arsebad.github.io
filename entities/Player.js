function Player() {

    this.x = 100;
    this.y = 100;
    this.speed = 4;

    this.update = function (actions) {

        this.x += actions.move.x * this.speed;
        this.y += actions.move.y * this.speed;
    };

    this.draw = function (ctx) {

        ctx.fillStyle = "red";
        ctx.fillRect(this.x, this.y, 50, 50);
    };
}