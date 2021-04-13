function displayList() {
  var langages = ["PHP","Java Script","HTML","CSS","JAVA","Bootstrap"];
  var langagesOrdre = langages.sort() // par l'ordre alphabétique
  alert(langagesOrdre);
  document.getElementById('display').innerHTML = langagesOrdre;
}