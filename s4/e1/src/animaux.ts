
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

const animal = new Animal('chien');
animal.seDeplacer();