"use strict";
class Animal {
    constructor(nom) {
        this.nom = nom;
    }
    seDeplacer() {
        console.log(`L'animal ${this.nom} se déplace`);
    }
}
class Chien extends Animal {
    constructor(nom) {
        super(nom);
    }
    seDeplacer() {
        console.log(`Le chien ${this.nom} court`);
    }
}
class Chat extends Animal {
    constructor(nom) {
        super(nom);
    }
    seDeplacer() {
        console.log(`Le chat ${this.nom} saute.`);
    }
}
function faireSeDeplacer(animaux) {
    for (const animal of animaux) {
        animal.seDeplacer();
    }
}
const animal = new Animal('chien');
animal.seDeplacer();
faireSeDeplacer([new Chien('Rex'), new Chat('Felix')]);
