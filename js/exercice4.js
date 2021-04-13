function flagСolors(){
  var colorNumber = document.getElementById("colorNumber").value.toLowerCase(); 
  // toLowerCase - tout en minuscules finalement, même si l'utilisateur écrit avec une majuscule
  switch (colorNumber) {
    case 'blanc': 
    alert('Non. Blanc est en deuxième.');
      break;
    case 'rouge': 
    alert('Non. Rouge est en dernier.');
      break;
    case 'blue': 
    alert('Bien joué !');
      break;
    default: 
    alert('Cette couleur n\'est pas présente');
  }
}
function clearInput() {
  let emptyField=""
  document.getElementById('colorNumber').value = emptyField;
}