$(document).ready(function () {

    function getHamburgersFunction() { var burgers = $("#burgersPlace").val();
        var meExp = new RegExp(burgers, "i");
        $.getJSON('hamburgers.json', function(data) {
            var output = "<ul>";
            $.each(data, function (key, val) {
                //Sortering
                if ((val.name.search(meExp) !== -1)) {
                    output += "<li>";
                    output += "<p>" + "<b>" + "Burger dish: "+ "</b>" + val.name + "</p>";
                    output += "<p>" + "<b>" + "Size: " + "</b>" + val.size + "</p>";
                    output += "<p>" + "<b>" + "Day of the week: " + "</b>" + val.dayOfTheWeek + "</p>";
                    output += "<p>" + "<b>" + "Price: " + "</b>" + "$ "+val.price + "</p>";
                    output += "</li>";
                }
            });
            output += "</ul>";
            $("#burgersPlace").html(output);
        });};

    getHamburgersFunction();


});



