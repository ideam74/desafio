
console.log("*******************************");
console.log("Classificador de Nível de Herói");
console.log("*******************************");

console.log("\n");

let nome = "Spider Man";
let XP = 9900;
let nivelXP = " ";

if (XP < 1000) {
    nivelXP = "Ferro";
} else if (XP < 2000) {
    nivelXP = "Bronze";
} else if (XP < 5000) {
    nivelXP = "Prata";
} else if (XP < 7000) {
    nivelXP = "Ouro";
} else if (XP < 8000) {
    nivelXP = "Platina";
} else if (XP < 9000) {
    nivelXP = "Ascendente";
} else if (XP < 10000) {
    nivelXP = "Imortal";
} else {
    nivelXP = "Radiante";
}

console.log("O herói de nome " + nome + " está no nível de " + nivelXP);