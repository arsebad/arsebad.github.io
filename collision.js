function checkCollision(objA, objB) {
    const a = objA.el.getBoundingClientRect();
    const b = objB.el.getBoundingClientRect();

    collisionState.isColliding =
        a.left < b.right &&
        a.right > b.left &&
        a.top < b.bottom &&
        a.bottom > b.top;
}