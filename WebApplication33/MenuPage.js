//happy hour logic:

function happyHourFunc() {
    var currentTime = new Date().getUTCHours() + 1;
    var happyHour = 16;

    if (currentTime === happyHour) {
        alert("Its Happy Hour! Prices are 10% off");

        var priceDivs = document.getElementsByClassName("price");
        for (var i = 0; i < priceDivs.length; i++) {
            var price = Number(priceDivs[i].innerHTML) * 0.9;
            priceDivs[i].innerHTML = price;

        }
    }
}

//Adjust price function: (add .toFixed(2) for 2 decimals)

function adjustPrice() {
    var priceDivs = document.getElementsByClassName("price");
    for (var i = 0; i < priceDivs.length; i++) {
        var price = Number(priceDivs[i].innerHTML.toFixed(2));
        priceDivs[i].innerHTML = price;
    }
}

/*Add pictures function to span:*/

function addPictures() {
    var pictureSpans = document.getElementsByTagName("span");
    for (var i = 0; i < pictureSpans.length; i++) {
        pictureSpans[i].innerHTML = "<img src='Images/Hamburger.png' />";
    }
}

/*Add todays offer function. 
Make price background red. 
Reduce price by another 20%:*/

function todaysOffer() {
    var todaysDate = new Date();
    var todaysDayName = todaysDate.getDay();
    switch (true) {
 
        case (todaysDayName === 0):
            alert("Sunday");
            var priceDivSunday = document.getElementById("sunday").innerHTML; // hämtar ordinarie priset på element söndag
            var newPriceSunday = Number(priceDivSunday) * 0.8; // ny variabel med det nya priset
            alert("Sundays special price is: " +newPriceSunday);
            priceDivSunday.innerHTML = newPriceSunday;
            newPriceSunday.style.backgroundColor = "red";
          break;

        case (todaysDayName === 1):
            alert("Monday");
            var priceDivMonday = document.getElementById("monday").innerHTML;
            var newPriceMonday = Number(priceDivMonday) * 0.8; 
            priceDivMonday.innerHTML = newPriceMonday;
            newPriceMonday.backgroundcolor = "red";
           break;

        case (todaysDayName === 2):
            alert("tuesday");
            var priceDivTuesday = document.getElementById("tuseday").innerHTML; 
            var newPriceTuesday = Number(priceDivTuesday) * 0.8; 
            priceDivTuesday.innerHTML = newPriceTuesday;
            newPriceTuesday.backgroundcolor = "red";
            break;

        case (todaysDayName === 3):
            alert("wednesday");
            var priceDivWednesday = document.getElementById("wednesday").innerHTML;
            var newPriceWednesday = Number(priceDivWednesday) * 0.8; 
            priceDivWednesday.innerHTML = newPriceWednesday;
            newPriceWednesday.backgroundcolor = "red";
            break;

        case (todaysDayName === 4):
            alert("Thursday");
            var priceDivThursday = document.getElementById("thursday").innerHTML;
            var newPriceThursday = Number(priceDivThursday) * 0.8; 
            priceDivThursday.innerHTML = newPriceThursday;
            newPriceThursday.backgroundcolor = "red";
            break;

        case (todaysDayName === 5):
            alert("Friday");
            var priceDivFriday = document.getElementById("friday").innerHTML; 
            var newPriceFriday = Number(priceDivFriday) * 0.8;
            priceDivFriday.innerHTML = newPriceFriday;
            newPriceFriday.backgroundcolor = "red";
            break;

        case (todaysDayName === 6):
            alert("saturday");
            var priceDivSaturday = document.getElementById("saturday").innerHTML; 
            var newPriceSaturday = Number(priceDivSaturday) * 0.8; 
            priceDivSaturday.innerHTML = newPriceSaturday;
            newPriceSaturday.backgroundcolor = "red";
            break;

        default:
            alert("default");
            break;
    }
}

// Method calls:
//happyHourFunc();
//adjustPrice();
//addPictures();
//todaysOffer();

/*Stretch exercises: (increasing tuffness for each number!)

 1. Automate todays offer to be dependent of the day of the week
 2. Create an HTML page with an empty body and then fill it with help from JS.
    -use array with names and price of the burgers seperated by a simple "space"
    -use a loop to add all the html with different burgers
    -Add more pictures on a creative way...
 3. Add arrays for all in point 3 and show the products.
    Add a simulair menu under the burgers with a new <h2> for:
    -subs
    -sausages
    -pizza
    -drinks
    
 5. Add a Birthday function for the restaurant so that the entire week 
    the restaurant has its birthday the price is set to 14.99 per default.
    
*/