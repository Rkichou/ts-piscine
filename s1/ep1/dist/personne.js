"use strict";
function afficherPersonne(person) {
    return "bonjour je m'appelle  " + person.name + " et j'ai " + person.age + " ans";
}
let person = { name: "Alice", age: 30 };
console.log(afficherPersonne(person));
