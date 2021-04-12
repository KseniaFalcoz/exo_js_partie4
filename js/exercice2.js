var animals = ["Crocodile", "Elephant", "Tiger"];
//    document.getElementById("display").innerHTML = animals;  *afficher immédiatement*
var newAnimal; // créer une variable vide

function displayMassif() {
    var animals = ["Crocodile", "Elephant", "Tiger"];
    alert(animals);
    document.getElementById("display").innerHTML = animals;

}
function addStart() {
    newAnimal = document.getElementsByTagName("input")[0].value;
    animals.unshift(newAnimal); // ajouter au début du tableau
    document.getElementById("display").innerHTML = animals;
}
function addEnd() {
    newAnimal = document.getElementsByTagName("input")[0].value;
    animals.push(newAnimal); // ajouter à la fin du tableau
    document.getElementById("display").innerHTML = animals;
}