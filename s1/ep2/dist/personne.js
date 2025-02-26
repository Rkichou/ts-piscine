"use strict";
function afficherPersonne(person) {
    return "bonjour je m'appelle  " + person.name + " et j'ai " + person.age + " ans";
}
function afficherPersonneAvancee(person) {
    if (person.adresse) {
        return `Bonjour, je m'appelle ${person.name} (ID: ${person.id}), j'ai ${person.age} ans et j'habite au ${person.adresse.rue}, ${person.adresse.ville}.`;
    }
    else {
        return `Bonjour, je m'appelle ${person.name} (ID: ${person.id}) et j'ai ${person.age} ans.`;
    }
}
let personne2 = { id: 1, name: "Alice", age: 30, adresse: { rue: "123 Rue Principale", ville: "Paris" } };
let personne3 = { id: 2, name: "Bob", age: 25 };
console.log(afficherPersonneAvancee(personne2));
console.log(afficherPersonneAvancee(personne3));
