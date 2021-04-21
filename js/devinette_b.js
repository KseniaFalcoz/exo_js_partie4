var solution = Math.floor(Math.random() * 10) + 1;
console.log(solution);
var tentative = 0;

while ((essai != solution) && (tentative < 5)) { // pas plus de 5 essais
    tentative++;
    var essai = prompt("Entrez un nombre entre 1 et 10 pour deviner le nombe aléatoire.");
    if (essai < solution) {
        alert(essai + " est trop petit");
    } else if (essai > solution) {
        alert(essai + " est trop grand");
    }
} if (essai == solution) {
    alert("Bravo vous avez trouvé en : " + tentative + " tentative");
} else {
    alert("Game over");
}




/*
var solution = Math.floor(Math.random() * 10) + 1;
console.log(solution);
var proposition = 0;

for (var i = 0; i < 5; i++) {  // pas plus de 5 essais
    var essai = prompt("Entrez un nombre entre 1 et 10 pour deviner le nombe aléatoire.");
    proposition++;
    if (essai > solution) {
        console.log(essai + "trop grand");
    } else if (essai < solution) {
        console.log(essai + "trop petit");
    } else if (essai == solution) {
        alert("Bravo vous avez trouvé en : " + proposition + " tentative");
    } break;
} if (proposition == 5) {
    alert("Game over");
}
*/