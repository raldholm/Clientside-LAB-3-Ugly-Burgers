//var Products = function (id, name, size, description, price) {
//    this.id = id;
//    this.name = name;
//    this.size = size;
//    this.description = description;
//    this.price = price;
//};

$(document).ready(function () {

    //$('#checkbox_pizzas').bind('click').click(function () {
       
    //});

    if ($('#checkbox_hamburgers').is(':checked')) {
        getAllHamburgers();
    }
    if ($('#checkbox_pizzas').is(':checked')) {
        getAllPizzas();
    }
    if ($('#checkbox_subs').is(':checked')) {
        getAllSubs();
    }
    if ($('#checkbox_drinks').is(':checked')) {
        getAllDrinks();
    }
    
});

/* <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<< SEARCH FUNCTION COPIED
$("#search").keyup(function () {
    var searchField = $("#search").val();
    var meExp = new RegExp(searchField, "i");
    $.getJSON('wt_data.json', function (data) {
        var output = "<ul class='searchresults'>";

        $.each(data, function (key, val) {
            //Dags att sortera:
            if ((val.name.search(meExp) !== -1) ||
                (val.about.search(meExp) !== -1)) {
                output += "<li>";
                output += "<p>" + val.name + "<b> " + val.master_degree + "</b>" + "</p>";
                output += '<img src="wt_images/' + val.url_image;
                output += '" alt="' + val.name + '"' + '"/>';
                output += "<p>" + val.about + "</p>";
                output += "</li>";
            }

        });
        output += "</ul>";
        $("#update").html(output);
    });

});

>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>*/



function getAllHamburgers() {
    $.getJSON('hamburgers.json', function(data) {
        var output = "";
        $.each(data, function(key, val) {
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
