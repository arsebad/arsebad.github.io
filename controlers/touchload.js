// inputManager.js

class InputManager {
    constructor(target = window) {

        this.target = target;

        this.state = {
            pointer: {
                x: 0,
                y: 0,
                down: false,
                button: null,
                dragging: false,
                startX: 0,
                startY: 0,
                deltaX: 0,
                deltaY: 0
            },

            wheel: {
                deltaX: 0,
                deltaY: 0
            },

            keys: new Set()
        };

        this.events = {};

        this.doubleClickDelay = 250;
        this.lastTap = 0;
        this.longPressTime = 500;

        this.longPressTimeout = null;

        this.init();
    }

    // =========================
    // EVENT SYSTEM
    // =========================

    on(eventName, callback) {

        if (!this.events[eventName]) {
            this.events[eventName] = [];
        }

        this.events[eventName].push(callback);
    }

    emit(eventName, data = {}) {

        if (!this.events[eventName]) return;

        for (const callback of this.events[eventName]) {
            callback(data);
        }
    }

    // =========================
    // INIT
    // =========================

    init() {

        this.target.addEventListener("pointerdown", this.pointerDown.bind(this));
        this.target.addEventListener("pointermove", this.pointerMove.bind(this));
        this.target.addEventListener("pointerup", this.pointerUp.bind(this));
        this.target.addEventListener("pointercancel", this.pointerCancel.bind(this));

        this.target.addEventListener("wheel", this.wheel.bind(this), {
            passive: true
        });

        window.addEventListener("keydown", this.keyDown.bind(this));
        window.addEventListener("keyup", this.keyUp.bind(this));
    }

    // =========================
    // POINTER
    // =========================

    pointerDown(e) {

        const p = this.state.pointer;

        p.down = true;
        p.dragging = false;

        p.button = e.button;

        p.startX = e.clientX;
        p.startY = e.clientY;

        p.x = e.clientX;
        p.y = e.clientY;

        this.emit("press", {
            x: p.x,
            y: p.y,
            button: p.button,
            originalEvent: e
        });

        // LONG PRESS

        clearTimeout(this.longPressTimeout);

        this.longPressTimeout = setTimeout(() => {

            if (p.down) {

                this.emit("longpress", {
                    x: p.x,
                    y: p.y,
                    button: p.button,
                    originalEvent: e
                });
            }

        }, this.longPressTime);
    }

    pointerMove(e) {

        const p = this.state.pointer;

        const prevX = p.x;
        const prevY = p.y;

        p.x = e.clientX;
        p.y = e.clientY;

        p.deltaX = p.x - prevX;
        p.deltaY = p.y - prevY;

        this.emit("move", {
            x: p.x,
            y: p.y,
            deltaX: p.deltaX,
            deltaY: p.deltaY,
            originalEvent: e
        });

        // DRAG

        if (p.down) {

            const distX = p.x - p.startX;
            const distY = p.y - p.startY;

            const distance = Math.hypot(distX, distY);

            if (distance > 5) {

                p.dragging = true;

                this.emit("drag", {
                    x: p.x,
                    y: p.y,
                    deltaX: p.deltaX,
                    deltaY: p.deltaY,
                    dragX: distX,
                    dragY: distY,
                    originalEvent: e
                });
            }
        }
    }

    pointerUp(e) {

        const p = this.state.pointer;

        clearTimeout(this.longPressTimeout);

        const now = Date.now();
        const elapsed = now - this.lastTap;

        // RELEASE

        this.emit("release", {
            x: p.x,
            y: p.y,
            button: p.button,
            originalEvent: e
        });

        // CLICK

        if (!p.dragging) {

            this.emit("click", {
                x: p.x,
                y: p.y,
                button: p.button,
                originalEvent: e
            });

            // DOUBLE CLICK

            if (elapsed < this.doubleClickDelay) {

                this.emit("doubleclick", {
                    x: p.x,
                    y: p.y,
                    button: p.button,
                    originalEvent: e
                });
            }

            this.lastTap = now;
        }

        // DROP

        if (p.dragging) {

            this.emit("drop", {
                x: p.x,
                y: p.y,
                button: p.button,
                originalEvent: e
            });
        }

        p.down = false;
        p.dragging = false;
    }

    pointerCancel() {

        clearTimeout(this.longPressTimeout);

        this.state.pointer.down = false;
        this.state.pointer.dragging = false;

        this.emit("cancel");
    }

    // =========================
    // WHEEL
    // =========================

    wheel(e) {

        this.state.wheel.deltaX = e.deltaX;
        this.state.wheel.deltaY = e.deltaY;

        this.emit("wheel", {
            deltaX: e.deltaX,
            deltaY: e.deltaY,
            originalEvent: e
        });
    }

    // =========================
    // KEYBOARD
    // =========================

    keyDown(e) {

        this.state.keys.add(e.code);

        this.emit("keydown", {
            key: e.key,
            code: e.code,
            originalEvent: e
        });
    }

    keyUp(e) {

        this.state.keys.delete(e.code);

        this.emit("keyup", {
            key: e.key,
            code: e.code,
            originalEvent: e
        });
    }

    // =========================
    // HELPERS
    // =========================

    isKeyDown(code) {
        return this.state.keys.has(code);
    }

    isPointerDown() {
        return this.state.pointer.down;
    }
}

export default InputManager;