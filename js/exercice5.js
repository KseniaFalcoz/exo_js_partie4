function displayList() {
    var city = ["Paris","Annecy","Nice","Bordeaux","Étretat"];
    for (var i = 0; i < city.length; i++) {
    console.log(city[i]);
    document.getElementById("list").innerHTML = city;
    }
}