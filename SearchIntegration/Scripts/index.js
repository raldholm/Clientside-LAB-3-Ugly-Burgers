
var request;

if (window.XMLHttpRequest) {
    request = new XMLHttpRequest();
} else {
    request = new ActiveXObject("MicrosoftXMLHTTP");
}
request.open("GET", "Scripts/products.json", true);

request.onreadystatechange = function () {

    if (request.readyState === 3) {
        
    }

    if (request.readyState === 4 && request.status === 200) {

        alert("FILE OPENED!");

        var jsonObjectet = JSON.parse(request.responseText);

        var output = "<ul>";

        for (var i = 0; i < jsonObjectet.hamburgers.length; i++) {

            output += "<li>" + jsonObjectet.hamburgers[i].name + "</li>";

        }
        output += "</ul>";

        document.getElementById("burgersPlace").innerHTML = output;
        
    }
}

request.send();