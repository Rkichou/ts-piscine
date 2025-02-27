
interface IAnimal {
    nom: string;
    seDeplacer(): void;
}

class Animal {
    constructor(public nom: string) {}

    seDeplacer(): void{
        console.log(`L'animal ${this.nom} se déplace`);
    }
}

class Chien extends Animal {
    constructor(nom: string) {
        super(nom);
    }

    seDeplacer(): void {
        console.log(`Le chien ${this.nom} court`);
    }
}

class Chat extends Animal {
    constructor(nom: string) {
        super(nom);
    }

    seDeplacer(): void {
        console.log(`Le chat ${this.nom} saute.`);
    }
}

function faireSeDeplacer(animaux: IAnimal[]){
    for(const animal of animaux){
        animal.seDeplacer();
    }
}

const animal = new Animal('chien');
animal.seDeplacer();
faireSeDeplacer([new Chien('Rex'), new Chat('Felix')]);