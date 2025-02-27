declare function creerScore({ joueur, score }: {
    joueur: string;
    score: number;
}): [string, number];
declare function afficherScore(score: [string, number]): void;
declare let score: [string, number];
