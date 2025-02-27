enum Direction {
    Nord,
    Sud, 
    Est,
    Ouest
}

function vecteurDirection(direction: Direction): [number, number] {
    switch (direction) {
        case Direction.Nord:
            return [0, 1];
        case Direction.Sud:
            return [0, -1];
        case Direction.Est:
            return [1, 0];
        case Direction.Ouest:
            return [-1, 0];
        default:
            throw new Error("Direction inconnue");
    }
}

function deplacer(
    point: [number, number],
    direction: Direction
): [number, number] {
    const [dx, dy] = vecteurDirection(direction);
    return [point[0] + dx, point[1] + dy];
}

const pointInitial: [number, number] = [5, 5];

const nouveauPointNord = deplacer(pointInitial, Direction.Nord);
console.log(`Nouveau point après déplacement vers le Nord: [${nouveauPointNord[0]}, ${nouveauPointNord[1]}]`);

const nouveauPointEst = deplacer(pointInitial, Direction.Est);
console.log(`Nouveau point après déplacement vers l'Est: [${nouveauPointEst[0]}, ${nouveauPointEst[1]}]`);

const nouveauPointSud = deplacer(pointInitial, Direction.Sud);
console.log(`Nouveau point après déplacement vers le Sud: [${nouveauPointSud[0]}, ${nouveauPointSud[1]}]`);

const nouveauPointOuest = deplacer(pointInitial, Direction.Ouest);
console.log(`Nouveau point après déplacement vers l'Ouest: [${nouveauPointOuest[0]}, ${nouveauPointOuest[1]}]`);