

$(document).ready(function () {

    // DECLARE FOOD-DATA TO VARIABLES
    var hamburgerData, pizzaData, subsData, drinksData;

    // GETJSON
    $.when(
        $.getJSON("hamburgers.json", function (data) {
            hamburgerData = data;
        }),
        $.getJSON("pizzas.json", function (data) {
            pizzaData = data;
        }),
         $.getJSON("subs.json", function (data) {
             subsData = data;
         }),
          $.getJSON("drinks.json", function (data) {
              drinksData = data;
          })
           // IF GETJSON OF HAMBURGERSS IS OK AND CHECKBOX_HAMBURGERS IS CHECKED, THEN WRITE TO DIV
          ).then(function () {
        if (hamburgerData && $('#checkbox_hamburgers').is(':checked')) {
            var output = "";
            $.each(hamburgerData, function (key, val) {
                output += "<div id='hamburger'>";
                output += "<p>" + "<b>" + val.name + "</b>";
                output += "<p>" + "Description: " + val.description + " </p>";
                output += "<img src='Images/Hamburger.png'";
                output += '"alt="' + val.name + '"' + '"/>';
                output += "<p>" + "Size: " + val.size + " </p>";
                output += "<p>" + "Price: " + val.price.toFixed(2) + " </p>";
                output += "</div>";
            });
            output += "";
            $("#hamBurgersDiv").html(output);
        }
            // IF NOT, WRITE "DATA NOT LOADED TO DIV".
        else {
            $("#hamBurgersDiv").html("<p>" + "DATA NOT LOADED." + "</p>");
        }
              // IF GETJSON OF PIZZAS IS OK AND CHECKBOX_PIZZAS IS CHECKED, THEN WRITE TO DIV
        if (pizzaData && $('#checkbox_pizzas').is(':checked')) {
            var output2 = "";
            $.each(pizzaData, function (key, val) {
                output2 += "<div id='pizza'>";
                output2 += "<p>" + "<b>" + val.name + "</b>";
                output2 += "<p>" + "Description: " + val.description + " </p>";
                output2 += "<img src='Images/Pizza.png'";
                output2 += '"alt="' + val.name + '"' + '"/>';
                output2 += "<p>" + "Size: " + val.size + " </p>";
                output2 += "<p>" + "Price: " + val.price.toFixed(2) + " </p>";
                output2 += "</div>";
            });
            output2 += "";
            $("#pizzasDiv").html(output2);
        }
            // IF NOT, WRITE "DATA NOT LOADED TO DIV".
        else {
            $("#pizzasDiv").html("<p>" + "DATA NOT LOADED." + "</p>");
        }
              // IF GETJSON OF SUBS IS OK AND CHECKBOX_SUBS IS CHECKED, THEN WRITE TO DIV
        if (subsData && $('#checkbox_subs').is(':checked')) {
            var output3 = "";
            $.each(subsData, function (key, val) {
                output3 += "<div id='sub'>";
                output3 += "<p>" + "<b>" + val.name + "</b>";
                output3 += "<p>" + "Description: " + val.description + " </p>";
                output3 += "<img src='Images/Subs.PNG'";
                output3 += '"alt="' + val.name + '"' + '"/>';
                output3 += "<p>" + "Size: " + val.size + " </p>";
                output3 += "<p>" + "Price: " + val.price.toFixed(2) + " </p>";
                output3 += "</div>";
            });
            output3 += "";
            $("#subsDiv").html(output3);
        }
            // IF NOT, WRITE "DATA NOT LOADED TO DIV".
        else {
            $("#subsDiv").html("<p>" + "DATA NOT LOADED." + "</p>");
        }
              // IF GETJSON OF DRINKS IS OK AND CHECKBOX_DRINKS IS CHECKED, THEN WRITE TO DIV
        if (drinksData && $('#checkbox_drinks').is(':checked')) {
            var output4 = "";
            $.each(drinksData, function (key, val) {
                output4 += "<div id='drink'>";
                output4 += "<p>" + "<b>" + val.name + "</b>";
                output4 += "<p>" + "Description: " + val.description + " </p>";
                output4 += "<img src='Images/Drink.png'";
                output4 += '"alt="' + val.name + '"' + '"/>';
                output4 += "<p>" + "Size: " + val.size + " </p>";
                output4 += "<p>" + "Price: " + val.price.toFixed(2) + " </p>";
                output4 += "</div>";
            });
            output4 += "";
            $("#drinksDiv").html(output4);
        }
            // IF NOT, WRITE "DATA NOT LOADED TO DIV".
        else {
            $("#drinksDiv").html("<p>" + "DATA NOT LOADED." + "</p>");
        }
    });
    
    
    
    //searchFunction();

});

// SEARCHFUNCTION
function searchFunction() {
    $("#search").keyup(function () {
        var searchField = $("#search").val();
        var meExp = new RegExp(searchField, "i");
        $.getJSON('pizzas.json', function (data) {
            var output = "";

            $.each(data, function (key, val) {
                //Dags att sortera:
                if ((val.name.search(meExp) !== -1) ||
                    (val.description.search(meExp) !== -1)) {
                    output += "<div id='searchedItem'>";
                    output += "<p>" + "<b>" + val.name + "</b>" + "</p>";
                    output += "<p>" + "Description: " + val.description + " </p>";
                    output += "<p>" + "Size: " + val.size + " </p>";
                    output += "<p>" + "Price: " + val.price.toFixed(2) + " </p>";
                    output += "</div>";
                }

            });
            output += "";
            $("#searchResults").html(output);
        });

    });
}
// GET HAMBURGERS
function getAllHamburgers() {
    $.getJSON('hamburgers.json', function (data) {
        var output = "";
        $.each(data, function (key, val) {
            output += "<div id='hamburger'>";
            output += "<p>" + "<b>" + val.name + "</b>";
            output += "<p>" + "Description: " + val.description + " </p>";
            output += "<img src='Images/Hamburger.png'";
            output += '"alt="' + val.name + '"' + '"/>';
            output += "<p>" + "Size: " + val.size + " </p>";
            output += "<p>" + "Price: " + val.price.toFixed(2) + " </p>";
            output += "</div>";
        });
        output += "";
        $("#hamBurgersDiv").html(output);
    });
}
// GET PIZZAS
function getAllPizzas() {
    $.getJSON('pizzas.json', function (data) {
        var output = "";
        $.each(data, function (key, val) {
            output += "<div id='pizza'>";
            output += "<p>" + "<b>" + val.name + "</b>";
            output += "<p>" + "Description: " + val.description + " </p>";
            output += "<img src='Images/Pizza.png'";
            output += '"alt="' + val.name + '"' + '"/>';
            output += "<p>" + "Size: " + val.size + " </p>";
            output += "<p>" + "Price: " + val.price.toFixed(2) + " </p>";
            output += "</div>";
        });
        output += "";
        $("#pizzasDiv").html(output);

    });
}
// GET SUBS
function getAllSubs() {
    $.getJSON('subs.json', function (data) {
        var output = "";
        $.each(data, function (key, val) {
            output += "<div id='sub'>";
            output += "<p>" + "<b>" + val.name + "</b>";
            output += "<p>" + "Description: " + val.description + " </p>";
            output += "<img src='Images/Subs.PNG'";
            output += '"alt="' + val.name + '"' + '"/>';
            output += "<p>" + "Size: " + val.size + " </p>";
            output += "<p>" + "Price: " + val.price.toFixed(2) + " </p>";
            output += "</div>";
        });
        output += "";
        $("#subsDiv").html(output);

    });
}
// GET DRINKS
function getAllDrinks() {
    $.getJSON('drinks.json', function (data) {
        var output = "";
        $.each(data, function (key, val) {
            output += "<div id='drink'>";
            output += "<p>" + "<b>" + val.name + "</b>";
            output += "<p>" + "Description: " + val.description + " </p>";
            output += "<img src='Images/Drink.png'";
            output += '"alt="' + val.name + '"' + '"/>';
            output += "<p>" + "Size: " + val.size + " </p>";
            output += "<p>" + "Price: " + val.price.toFixed(2) + " </p>";
            output += "</div>";
        });
        output += "";
        $("#drinksDiv").html(output);

    });
}
// GET ALL FOOD PRODUCTS
function getAllFoodProducs() {
    var hamburgerData, pizzaData, subsData, drinksData;
    $.when(
        $.getJSON("hamburgers.json", function (data) {
            hamburgerData = data;
        }),
        $.getJSON("pizzas.json", function (data) {
            pizzaData = data;
        }),
         $.getJSON("subs.json", function (data) {
             subsData = data;
         }),
          $.getJSON("drinks.json", function (data) {
              drinksData = data;
          })
    ).then(function () {
        if (hamburgerData) {
            var output = "";
            $.each(hamburgerData, function (key, val) {
                output += "<div id='hamburger'>";
                output += "<p>" + "<b>" + val.name + "</b>";
                output += "<p>" + "Description: " + val.description + " </p>";
                output += "<img src='Images/Hamburger.png'";
                output += '"alt="' + val.name + '"' + '"/>';
                output += "<p>" + "Size: " + val.size + " </p>";
                output += "<p>" + "Price: " + val.price.toFixed(2) + " </p>";
                output += "</div>";
            });
            output += "";
            $("#hamBurgersDiv").html(output);
        }
        else {
            $("#hamBurgersDiv").html("<p>" + "DATA NOT LOADED." + "</p>");
        }
        if (pizzaData) {
            var output2 = "";
            $.each(pizzaData, function (key, val) {
                output2 += "<div id='pizza'>";
                output2 += "<p>" + "<b>" + val.name + "</b>";
                output2 += "<p>" + "Description: " + val.description + " </p>";
                output2 += "<img src='Images/Pizza.png'";
                output2 += '"alt="' + val.name + '"' + '"/>';
                output2 += "<p>" + "Size: " + val.size + " </p>";
                output2 += "<p>" + "Price: " + val.price.toFixed(2) + " </p>";
                output2 += "</div>";
            });
            output2 += "";
            $("#pizzasDiv").html(output2);
        }
        else {
            $("#pizzasDiv").html("<p>" + "DATA NOT LOADED." + "</p>");
        }
        if (subsData) {
            var output3 = "";
            $.each(subsData, function (key, val) {
                output3 += "<div id='sub'>";
                output3 += "<p>" + "<b>" + val.name + "</b>";
                output3 += "<p>" + "Description: " + val.description + " </p>";
                output3 += "<img src='Images/Subs.PNG'";
                output3 += '"alt="' + val.name + '"' + '"/>';
                output3 += "<p>" + "Size: " + val.size + " </p>";
                output3 += "<p>" + "Price: " + val.price.toFixed(2) + " </p>";
                output3 += "</div>";
            });
            output3 += "";
            $("#subsDiv").html(output3);
        }
        else {
            $("#subsDiv").html("<p>" + "DATA NOT LOADED." + "</p>");
        }
        if (drinksData) {
            var output4 = "";
            $.each(drinksData, function (key, val) {
                output4 += "<div id='drink'>";
                output4 += "<p>" + "<b>" + val.name + "</b>";
                output4 += "<p>" + "Description: " + val.description + " </p>";
                output4 += "<img src='Images/Drink.png'";
                output4 += '"alt="' + val.name + '"' + '"/>';
                output4 += "<p>" + "Size: " + val.size + " </p>";
                output4 += "<p>" + "Price: " + val.price.toFixed(2) + " </p>";
                output4 += "</div>";
            });
            output4 += "";
            $("#drinksDiv").html(output4);
        }
        else {
            $("#subsDiv").html("<p>" + "DATA NOT LOADED." + "</p>");
        }
    });
}
// GET ALL HAMBURGERSTOARRAY
function getAllHamburgersToArray() {
    $.getJSON('hamburgers.json', function (data) {

        var burgerArray = new Array;
        $.each(data, function (i, v) {

            burgerArray.push();
        });

    });

};