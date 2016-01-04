
//1. create 7 hamburger objects using literal notation 
//   use attributes name, size, dayOfTheWeek and price(page. 104 in book)
//   Please use the same html syntax of an article as in exercise1.

var burger1 = {
    name: "Kalles S Burger",
    size: "300g",
    dayOfTheWeek: "Monday",
    price: 19.90
};
var burger2 = {
    name: "Skinny Burger",
    size: "60g",
    dayOfTheWeek: "Tuesday",
    price: 19.90
}
var burger3 = {
    name: "Elmaco Burger",
    size: "150g",
    dayOfTheWeek: "Wednesday",
    price: 19.90
};
var burger4 = {
    name: "BigKingXXL Burger",
    size: "500g",
    dayOfTheWeek: "Thursday",
    price: 19.90
};
var burger5 = {
    name: "Winnare Burger",
    size: "200g",
    dayOfTheWeek: "Friday",
    price: 19.90
};
var burger6 = {
    name: "Shitty Burger",
    size: "150g",
    dayOfTheWeek: "Saturday",
    price: 19.90
};
var burger7 = {
    name: "Fatty burger",
    size: "100kg",
    dayOfTheWeek: "Sunday",
    price: 19.90
};

//2. create Product objects with constructor notation, 
//   use the parameters name, size, price, dayOfTheWeek  (page. 108 in book)

var Product = function (name, size, dayOfTheWeek, price) {
    this.name = name;
    this.size = size;
    this.dayOfTheWeek = dayOfTheWeek;
    this.price = price;
};

var HamburgerProductsArray = [
    new Product("Kalles S Burger", "300g", "Monday", 19.90),
    new Product("Skinny Burger", "60g", "Tuesday", 19.90),
    new Product("Elmaco Burger", "150g", "Wednesday", 19.90),
    new Product("BigKingXXL Burger", "500g", "Thursday", 19.90),
    new Product("Winnare Burger", "200g", "Friday", 19.90),
    new Product("Shitty Burger", "500g", "Saturday", 19.90),
    new Product("Fatty burger","100kg","Sunday",19.90)
];

//3. add 7 drinks to the page using Product.
var drinksProductsArray = [
    new Product("Beer", "50cl", "Monday", 9.90),
    new Product("White wine", "25cl", "Thuesday", 11.90),
    new Product("Red Wine", "25cl", "Wednesday", 11.90),
    new Product("Tequila", "6cl", "Thursday", 5.90),
    new Product("Whiskey", "8cl", "Friday", 13.90),
    new Product("Water", "50cl", "Saturday", 0.90),
    new Product("Milk", "50cl", "Sunday", 2.90)
];

//4. add 7 pizzas to the page using Product.

var pizzaProductsArray = [
    new Product("Hawaii", "400g", "Monday", 19.90),
    new Product("Margarita", "400g", "Thuesday", 19.90),
    new Product("Calzone", "400g", "Wednesday", 19.90),
    new Product("Caprisiossa", "400g", "Thursday", 19.90),
    new Product("Kebab pizza", "450g", "Friday", 21.90),
    new Product("Olympia Special", "520g", "Saturday", 21.90),
    new Product("Husets Pizza", "500g", "Sunday", 20.90)
];
//5. add 7 subs to the page using Product.

var subsProductsArray = [
    new Product("Chicken Sub", "180g", "Monday", 13.90),
    new Product("Turkey Sub", "200g", "Thuesday", 13.90),
    new Product("Cheese Sub", "150g", "Wednesday", 13.90),
    new Product("Ham Sub", "200g", "Thursday", 13.90),
    new Product("Veg. Sub", "180g", "Friday", 13.90),
    new Product("Kebab Sub", "220g", "Saturday", 13.90),
    new Product("Meat Sub", "200g", "Sunday", 13.90)
];
//6. GO to file FixIt.html


var loadJsonBurgersArray = function () {
    window.location = "index.html";
};

