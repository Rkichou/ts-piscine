

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

let vecteur = vecteurDirection(Direction.Nord);
console.log(`Le vecteur est [${vecteur[0]}, ${vecteur[1]}]`);

let vecteur2 = vecteurDirection(Direction.Est);
console.log(`Le vecteur est [${vecteur2[0]}, ${vecteur2[1]}]`);

let vecteur3 = vecteurDirection(Direction.Sud);
console.log(`Le vecteur est [${vecteur3[0]}, ${vecteur3[1]}]`);

let vecteur4 = vecteurDirection(Direction.Ouest);
console.log(`Le vecteur est [${vecteur4[0]}, ${vecteur4[1]}]`);