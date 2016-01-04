/* ###Window object at page 124:###
1. Link the script with FixIt.hmtl */
// DONE!

/*2. Add som tags that doesn't change the visual part of the paragraph.*/
var addTags = function() {
    var elements = document.getElementsByTagName("p");
    for (var i = 0; i < elements.length; i++) {
        var newTag = document.createElement("span");
        elements[i].appendChild(newTag);
    }
     return "<span>-tags added!";
 };

// Play with the properties at page 124 in the book. 
// Use properties creatively to display things at the html page
var windowProp = function () {
    var windowProp = "Window Location: " + window.location + " and Window width: " + window.innerWidth;
    return windowProp;
};

// 4.Add a stylesheet that displays the changed words in fat font and in red.

// 5. PLay with the Methods
var windowPropMethods = function() {
    //window.alert("Playing");
    window.print("index.html");
    //window.open(url?http://www.google.se);
    return null;
}

// ### DOM page 126:###
// 6. Play with the DOM-properties
var getDOMProp = function () {
    window.alert("DokumentURL " + document.URL + " , " + "Titel " + document.title);
    window.alert("Domän: " + document.domain + " , " + "Senast ändrat " + document.lastModified);
    document.title = "Sidans Titel";
    return document.domain + " , " + document.lastModified + "/r/n , " + document.URL + " , " + document.title;
};

// ### String objects page 128, 129: ###
// 7. Save the the text from the makeMeAnArray-paragraph into an array.
function makeMeAnArray() {
    var element = document.getElementById("makeMeAnArray");
    var array = element.innerText.split(" ");
    return array;
}

// 8. Use all the string methods and propertys allong with the array
var makeArrayToUpper = function() {
    var element = document.getElementById("makeMeAnArray");
    var arrayUpperCase = element.innerText.toUpperCase();
    //alert(arrayUpperCase);
    return arrayUpperCase;
}
var arrayLength = function() {
    var element = document.getElementById("makeMeAnArray");
    var arrayLength = element.innerText.length;
    //alert(arrayLength);
    return arrayLength;
}

// ### String objects page 132: ###
// 9. check if the 4th element in the array is a number
var checkIfNumberFour = function () {
    var splitArray = makeMeAnArray();

    var isNotANumber = !isNaN(splitArray[4]);
    //alert(isNotANumber);
    return isNotANumber;

};

// ### Math page 134: ###
// 10. Round one of the numbers in the paragraph up/down
var roundOneNumberInParagraph = function () {
    var array = makeMeAnArray();
    //alert(array[4]);
    // plats nummer 5 i arrayen skall avrundas till 2 decimaler
    array[4] = Number(array[4]).toFixed(2);

    var text = "";
    for (var i = 0; i < array.length; i++) {
        text += array[i] + " ";
    }
    document.getElementById("makeMeAnArray").innerHTML = text;

    //alert(array[4]);
    return "Nu har talet i det fjärde elementet på vektorn avrundats";
}

// 11. replace the 3rd word with PI then roud it to the nearest integer
var replaceWithPi = function() {
    var splitArray = makeMeAnArray();

    // Väljer plats 3 i vektorn och konverterar innehållet till Pi med en decimal
    splitArray[2] = Math.PI.toPrecision(1);
    alert("Konverterar 3:E ordet till Pi: " + splitArray[2]);
    // skapar en tom textsträng
    var text = "";
    // loopar igenom vektorn och sparar ner i text
    for (var i = 0; i < splitArray.length; i++) {
        text += splitArray[i] + " ";
    }
    //ersätter vektorn med den nya texten i text
    document.getElementById("makeMeAnArray").innerHTML = text;
   
    return "Har konverterat plats 3 i vektorn till PI";
}

// ### Date object###
// 12. Calculate how many days it's until your birthday and present it.
var daysUntilBirthday = function() {

    var today = new Date();
    var birthDay = new Date("1983-04-03");

    // MATH/METHOD NOT DONE, NO TIME TO GOOGLE IT ATM.
    var value = 0;

    alert(value);

    return "Det är "  + value + " dagar till jag fyller år!";
}
//alert(daysUntilBirthday());

// 13. Calculate how many minutes old you are and present it.
var howManyMinutesOld = function () {
    var today = new Date();
    var birthDay = new Date("1983-04-03");
    var valueDiff = (today - birthDay) / 1000 / 60;
    return valueDiff.toFixed(0);
}
//alert(howManyMinutesOld());

/* For each of the following aplicable exercise below you should present a box on the page 
with an alert that shows the result when the box is clicked! */
function functionButtons(textinput, func) {
    var newElement = document.createElement("div");
    newElement.className = "buttonFunction";
    var divText = document.createTextNode(textinput);
    newElement.appendChild(divText);
    newElement.addEventListener("click", function() {
        alert(func());
    });
    document.body.appendChild(newElement);
}

functionButtons("Add tags", addTags);
functionButtons("Window Properties", windowProp);
functionButtons("Window Properties/Methods", windowPropMethods);
functionButtons("Get DOM-Properties", getDOMProp);
functionButtons("Make me an array", makeMeAnArray);
functionButtons("Make the pink array .ToUpper", makeArrayToUpper);
functionButtons("Get the pink array length", arrayLength);
functionButtons("Check if its a number", checkIfNumberFour);
functionButtons("Round Number in Paragraph", roundOneNumberInParagraph);
functionButtons("Replace with Pi", replaceWithPi);
functionButtons("Days until my birthday", daysUntilBirthday);
functionButtons("How many minutes old", howManyMinutesOld);

//Bonus exercises:
//### Demo page 141:###
//-Download the code to the book. Wipe the code from the js-file and rewrite it with the help from the book.
//-For additional reading and training go to: http://www.w3schools.com/jsref/jsref_obj_string.asp
// and look at JS String, JS Number, JS Math and JS Date


