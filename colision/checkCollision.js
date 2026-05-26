function checkcollision(
    AobjX, AobjY, AobjWidth, AobjHeight,
    BobjX, BobjY, BobjWidth, BobjHeight
){

    if (
        AobjX + AobjWidth > BobjX &&
        AobjY + AobjHeight > BobjY &&
        AobjX < BobjX + BobjWidth &&
        AobjY < BobjY + BobjHeight
    ) {

        let overlapLeft = (AobjX + AobjWidth) - BobjX;
        let overlapRight = (BobjX + BobjWidth) - AobjX;

        let overlapTop = (AobjY + AobjHeight) - BobjY;
        let overlapBottom = (BobjY + BobjHeight) - AobjY;

        let minOverlap = Math.min(
            overlapLeft,
            overlapRight,
            overlapTop,
            overlapBottom
        );

        if (minOverlap === overlapTop) {

            AobjY = BobjY - AobjHeight;

        } else if (minOverlap === overlapBottom) {

            AobjY = BobjY + BobjHeight;

        } else if (minOverlap === overlapLeft) {

            AobjX = BobjX - AobjWidth;

        } else if (minOverlap === overlapRight) {

            AobjX = BobjX + BobjWidth;

        }

    }

    return {
        x: AobjX,
        y: AobjY
    };
}