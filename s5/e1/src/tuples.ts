

function creerScore({joueur, score} :{joueur : string, score : number }) : [string, number]{
    return [joueur, score];
}

function afficherScore(score: [string, number]){
    console.log(`Le joueur ${score[0]} a un score de ${score[1]}`);
}

let score = creerScore({joueur: "Sarah", score: 50});
afficherScore(score);