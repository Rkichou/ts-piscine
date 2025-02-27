

abstract class Forme {
    abstract calculerSurface(): number;
}

class Rectangle extends Forme {
    constructor(private largeur: number, private hauteur: number) {
        super();
    }

    calculerSurface(): number {
        return this.largeur * this.hauteur;
    }
}

class Cercle extends Forme {
    constructor(private rayon: number) {
        super();
    }

    calculerSurface(): number {
        return Math.PI * this.rayon * this.rayon;
    }
}

const rect = new Rectangle(10, 5);
console.log(rect.calculerSurface());
const cercle = new Cercle(5);
console.log(cercle.calculerSurface());