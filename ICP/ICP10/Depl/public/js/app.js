var app = angular.module('ToDoList', []);
function predict() {
    var imageurl = document.getElementById("imageurl").value;
    var url = "https://mighty-scrubland-60373.herokuapp.com/predict?image="+imageurl;
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open( "GET",url, false ); // false for synchronous request
    xmlHttp.send( null );
    var result = xmlHttp.responseText;
    result = result.replace("[","");
    result = result.replace("]","");
    document.getElementById("image").src = imageurl;
    document.getElementById("result").innerHTML = result;
    return xmlHttp.responseText;
}