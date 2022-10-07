// function getFromESP_getNom () {
//     var xhttp = new XMLHttpRequest();
//     xhttp.onreadystatechange = function () {
//         if (this.readyState == 4 && this.status == 200) {
//             document.getElementById("nom").innerHTML = this.responseText + " Celisus";
//             document.getElementById("color").style.backgroundColor = "red";
//         }
//     };
//     xhttp.open("GET", "getNomEsp", true);
//     xhttp.send();
// }

// setInterval(function getNomSysteme(){
//     var xhttp = new XMLHttpRequest();
//     xhttp.onreadystatechange = function() {
//         if(this.status == 200) {
//         document.getElementById("temp").innerHTML = this.responseText;
//         }
//     };
//     xhttp.open("GET", "lireTemp", true);
//     xhttp.send();
//    }, 5000);

function doAction(actionToDo) {
    var params = String("actionToDo") + String("=") + String(actionToDo);
    var xhttp = new XMLHttpRequest();
    xhttp.open("POST", "ActionToDo", true);
    xhttp.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
    xhttp.send(params);
}

   