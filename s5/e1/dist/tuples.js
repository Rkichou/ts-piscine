"use strict";
function creerScore({ joueur, score }) {
    return [joueur, score];
}
function afficherScore(score) {
    console.log(`Le joueur ${score[0]} a un score de ${score[1]}`);
}
let score = creerScore({ joueur: "Sarah", score: 50 });
afficherScore(score);
