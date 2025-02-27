interface IAnimal {
    nom: string;
    seDeplacer(): void;
}
declare class Animal {
    nom: string;
    constructor(nom: string);
    seDeplacer(): void;
}
declare const animal: Animal;
