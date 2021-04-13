function devinette(){
    let a = document.getElementById("colorNumber").value;
    let x = 50;

  switch(true) {
    case(a > x) :
    alert('Non, ce nombre est plus grand que prévu.');
        break;
    case(a < x) :
    alert('Non, ce nombre est plus petit que prévu.')
        break;
    case(a == x) :
    alert('Tu as deviné !')
        break;
    default: 
    alert('Entrez un chiffre !');
    }
}
function clearInput() {
  let emptyField=""
  document.getElementById('colorNumber').value = emptyField;
}