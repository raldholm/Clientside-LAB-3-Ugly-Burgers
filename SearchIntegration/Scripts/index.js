$(document).ready(function () {

    function getHamburgersFunction() {

        $.getJSON('hamburgers.json', function (data) {
            var html = "";
            $.each(data, function (key, val) {
                html += "<article>";
                html += "<fieldset>";
                html += "<legend>" + val.name +  "</legend>";
                html += "<h3>" + val.dayOfTheWeek + "'s Special!" + "</h3>";
                html += "<span>"+ "<img src="+'Images/Hamburger.png' +"></span>";
                html += "<div id='description'>" + val.description + "</div>";
                html += "<div class='price'>" + val.price + "</div>";
                html += "</fieldset>";
                html += "</article>";
            });
            html += "";
            $("#burgersPlace").html(html);
        });
    };
    function getPizzasFunction() {
        $.getJSON('pizzas.json', function (data) {
            var html = "";
            $.each(data, function (key, val) {
                html += "<article>";
                html += "<fieldset>";
                html += "<legend>" + val.name + "</legend>";
                html += "<h3>" + val.dayOfTheWeek + "'s Special!" + "</h3>";
                html += "<span>" + "<img src=" + 'Images/Pizza.png' + "></span>";
                //html += "<div id='description'>" + val.description + "</div>";
                html += "<div class='price'>" + val.price + "</div>";
                html += "</fieldset>";
                html += "</article>";
            });
            html += "";
            $("#pizzaPlace").html(html);
        });
    };
    function getSubsFunction()
    {
        $.getJSON('subs.json', function (data) {
            var html = "";
            $.each(data, function (key, val) {
                html += "<article>";
                html += "<fieldset>";
                html += "<legend>" + val.name + "</legend>";
                html += "<h3>" + val.dayOfTheWeek + "'s Special!" + "</h3>";
                html += "<span>" + "<img src=" + 'Images/Subs.png' + "></span>";
                //html += "<div id='description'>" + val.description + "</div>";
                html += "<div class='price'>" + val.price + "</div>";
                html += "</fieldset>";
                html += "</article>";
            });
            html += "";
            $("#subsPlace").html(html);
        });
    };
    function getDrinksFunction() {
        $.getJSON('drinks.json', function (data) {
            var html = "";
            $.each(data, function (key, val) {
                html += "<article>";
                html += "<fieldset>";
                html += "<legend>" + val.name + "</legend>";
                html += "<h3>" + val.dayOfTheWeek + "'s Special!" + "</h3>";
                html += "<span>" + "<img src=" + 'Images/Drink.png' + "></span>";
                //html += "<div id='description'>" + val.description + "</div>";
                html += "<div class='price'>" + val.price + "</div>";
                html += "</fieldset>";
                html += "</article>";
            });
            html += "";
            $("#drinksPlace").html(html);
        });
    };

    getHamburgersFunction();
    getPizzasFunction();
    getSubsFunction();
    getDrinksFunction();

});