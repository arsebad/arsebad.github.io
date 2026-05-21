function InputManager(target = window) {

    this.target = target;

    this.events = {};

    this.state = {
        pointer: {
            down: false,
            dragging: false,
            startX: 0,
            startY: 0,
            x: 0,
            y: 0,
            dragX: 0,
            dragY: 0
        }
    };

    this.on = function (event, cb) {

        if (!this.events[event]) {
            this.events[event] = [];
        }

        this.events[event].push(cb);
    };

    this.emit = function (event, data) {

        if (!this.events[event]) return;

        for (const cb of this.events[event]) {
            cb(data);
        }
    };

    this.pointerDown = (e) => {

        const p = this.state.pointer;

        p.down = true;
        p.dragging = false;

        p.startX = e.clientX;
        p.startY = e.clientY;

        p.x = e.clientX;
        p.y = e.clientY;

        this.emit("press", p);
    };

    this.pointerMove = (e) => {

        const p = this.state.pointer;

        p.x = e.clientX;
        p.y = e.clientY;

        if (!p.down) return;

        p.dragging = true;

        p.dragX = p.x - p.startX;
        p.dragY = p.y - p.startY;

        this.emit("drag", p);
    };

    this.pointerUp = () => {

        const p = this.state.pointer;

        p.down = false;
        p.dragging = false;

        p.dragX = 0;
        p.dragY = 0;

        this.emit("release", p);
    };

    this.init = function () {

        this.target.addEventListener("pointerdown", this.pointerDown);
        this.target.addEventListener("pointermove", this.pointerMove);
        this.target.addEventListener("pointerup", this.pointerUp);
    };

    this.init();
}