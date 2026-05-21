function setupInput(input, actions) {

    input.on("drag", (p) => {

        actions.move.x = 0;
        actions.move.y = 0;

        const absX = Math.abs(p.dragX);
        const absY = Math.abs(p.dragY);

        if (absX > absY) {
            actions.move.x = p.dragX > 0 ? 1 : -1;
        } else {
            actions.move.y = p.dragY > 0 ? 1 : -1;
        }
    });

    input.on("release", () => {
        actions.move.x = 0;
        actions.move.y = 0;
    });
}