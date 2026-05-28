function getCollisionInfo(
    Ax, Ay, Aw, Ah,
    Bx, By, Bw, Bh
) {
    const isColliding =
        Ax < Bx + Bw &&
        Ax + Aw > Bx &&
        Ay < By + Bh &&
        Ay + Ah > By;

    if (!isColliding) {
        return null;
    }

    const overlapX = Math.min(
        Ax + Aw - Bx,   // desde izquierda
        Bx + Bw - Ax    // desde derecha
    );

    const overlapY = Math.min(
        Ay + Ah - By,   // desde arriba
        By + Bh - Ay    // desde abajo
    );

    // eje de resolución (el menor es el correcto)
    const resolveAxis = overlapX < overlapY ? "x" : "y";

    return {
        overlapX,
        overlapY,
        resolveAxis
    };
}


function resolveCollision(
    Ax, Ay, Aw, Ah,
    Bx, By, Bw, Bh
) {
    const info = getCollisionInfo(Ax, Ay, Aw, Ah, Bx, By, Bw, Bh);

    if (!info) {
        return { x: Ax, y: Ay, collided: false };
    }

    let newX = Ax;
    let newY = Ay;

    if (info.resolveAxis === "x") {
        if (Ax < Bx) {
            newX = Bx - Aw; // viene desde la izquierda
        } else {
            newX = Bx + Bw; // viene desde la derecha
        }
    } else {
        if (Ay < By) {
            newY = By - Ah; // viene desde arriba
        } else {
            newY = By + Bh; // viene desde abajo
        }
    }

    return {
        x: newX,
        y: newY,
        collided: true
    };
}