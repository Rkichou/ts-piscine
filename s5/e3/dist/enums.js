"use strict";
var Direction;
(function (Direction) {
    Direction[Direction["Nord"] = 0] = "Nord";
    Direction[Direction["Sud"] = 1] = "Sud";
    Direction[Direction["Est"] = 2] = "Est";
    Direction[Direction["Ouest"] = 3] = "Ouest";
})(Direction || (Direction = {}));
function vecteurDirection(direction) {
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
function deplacer(point, direction) {
    const [dx, dy] = vecteurDirection(direction);
    return [point[0] + dx, point[1] + dy];
}
const pointInitial = [5, 5];
const nouveauPointNord = deplacer(pointInitial, Direction.Nord);
console.log(`Nouveau point après déplacement vers le Nord: [${nouveauPointNord[0]}, ${nouveauPointNord[1]}]`);
const nouveauPointEst = deplacer(pointInitial, Direction.Est);
console.log(`Nouveau point après déplacement vers l'Est: [${nouveauPointEst[0]}, ${nouveauPointEst[1]}]`);
const nouveauPointSud = deplacer(pointInitial, Direction.Sud);
console.log(`Nouveau point après déplacement vers le Sud: [${nouveauPointSud[0]}, ${nouveauPointSud[1]}]`);
const nouveauPointOuest = deplacer(pointInitial, Direction.Ouest);
console.log(`Nouveau point après déplacement vers l'Ouest: [${nouveauPointOuest[0]}, ${nouveauPointOuest[1]}]`);
