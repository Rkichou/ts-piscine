interface IAnimal {
    nom: string;
    seDeplacer(): void;
}
declare class Animal {
    nom: string;
    constructor(nom: string);
    seDeplacer(): void;
}
declare class Chien extends Animal {
    constructor(nom: string);
    seDeplacer(): void;
}
declare class Chat extends Animal {
    constructor(nom: string);
    seDeplacer(): void;
}
declare function faireSeDeplacer(animaux: IAnimal[]): void;
declare const animal: Animal;
