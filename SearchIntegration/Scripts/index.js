$(document).ready(function () {

    var burgers = $("#burgersPlace").val();

    var meExp = new RegExp(burgers, "i");

    $.getJSON('products.json', function(data) {

        var output = "<ul>";

        //$.for()

        $.each(data, function (key, val) {

            alert(val.toArray);

            //Sortering
            if ((val.name.search(meExp) !== -1)) {
                alert("hej");
                output += "<li>";
                output += "<p>" + val.name + "<b> " + val.name + "</b>" + "</p>";
                output += "<p>" + val.id + "</p>";
                output += "</li>";
            }

        });
        output += "</ul>";

        $("#burgersPlace").html(output);
    });

});



