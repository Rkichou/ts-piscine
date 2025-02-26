interface Adresse {
    rue: string;
    ville: string;
}
interface Person {
    readonly id: number;
    name: string;
    age: number;
    adresse?: Adresse;
}
declare function afficherPersonne(person: Person): string;
declare function afficherPersonneAvancee(person: Person): string;
declare let personne2: Person;
declare let personne3: Person;
