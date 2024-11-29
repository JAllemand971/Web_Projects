/* Jeremy Allemand, student ID: 20312390, IFT-1144-A-A24, TP3 */

/*
-------------------------------------------------------
Title: Function 1 - Convert
Purpose: Convert a number into various formats
-------------------------------------------------------
*/
function convert(event) {
    let number = parseFloat(document.getElementById("number").value); // declare a float from the input

    if (event.target.id === "centimeter") {
        let value1 = (number * 2.5).toFixed(2); // conversion from inch to centimeter with 2 decimal places
        document.getElementById("result").innerHTML = "inches ===> " + value1;
    }

    else if (event.target.id === "inch") {
        let value2 = (number / 2.5).toFixed(2); // conversion from centimeter to inch with 2 decimal places
        document.getElementById("result").innerHTML = "cm ===> " + value2;
    }

    else if (event.target.id === "fahrenheit") {
        let value3 = (number * 9 / 5 + 32).toFixed(2); // conversion from Celsius to Fahrenheit with 2 decimal places
        document.getElementById("result").innerHTML = "Celsius ===> " + value3;
    }

    else if (event.target.id === "celsius") {
        let value4 = ((number - 32) * 5 / 9).toFixed(2); // conversion from Fahrenheit to Celsius with 2 decimal places
        document.getElementById("result").innerHTML = "Fahrenheit ===> " + value4;
    }
} // End of Function 1

/*
-------------------------------------------------------
Title: Function 2 - Display
Purpose: Display a title with a changing size
-------------------------------------------------------
*/

function display(event) {
    let name = document.getElementById("name").value; // Get the name string
    let level = parseInt(document.getElementById("level").value); // Get the number for title size

    if (event.target.id === "title") {
        if (level >= 1 && level <= 6) {
            document.getElementById("result2").innerHTML = "<h" + level + ">Hello " + name + "<br>Level = " + level + "</h" + level + ">";
            document.getElementById("error").innerHTML = ""; // Remove the error text
        }
        else {
            document.getElementById("result2").innerHTML = ""; // Remove the result text
            document.getElementById("error").innerHTML = "The number must be between 1 and 6!!!";
        }
    }
} // End of Function 2

/*
-------------------------------------------------------
Title: Function 3 - Menu
Purpose: Display a dropdown menu
-------------------------------------------------------
*/
$(document).ready(function () {

    // Function to display appetizers, main courses, desserts, drinks
    $(".menu-item").click(function () {
        let $submenu = $(this).next(".submenu"); // Clicking on the menu-item will get the next submenu
        $(".submenu").not($submenu).slideUp(500, "linear"); // Close other submenus that are not clicked
        $submenu.slideToggle(500, "linear"); // Toggle the clicked submenu
    });

    // Variables to store prices
    let appetizerPrice = 0;
    let mainCoursePrice = 0;
    let dessertPrice = 0;
    let drinkPrice = 0;
    let total = 0;

    // Variables for the selector
    let selection = {
        appetizer: null,
        mainCourse: null,
        dessert: null,
        drink: null,
    };

    // Prices for items
    let escargotPrice = 8;
    let saladPrice = 5;
    let caesarSaladPrice = 6;
    let spaghettiPrice = 12;
    let steakPrice = 15;
    let pizzaPrice = 14;
    let iceCreamPrice = 8;
    let cakePrice = 7;
    let puddingPrice = 5;
    let coffeePrice = 3;
    let softDrinkPrice = 2;

    // Function to display the images with their prices
    $(".submenu li").click(function () {
        let choice = $(this).text(); // Targets the submenu only

        switch (choice) {
            case "Escargot":
                if (selection.appetizer === "Escargot") { // Deselect if the selector has an attribute
                    total -= appetizerPrice; // Subtract the price from the total
                    appetizerPrice = 0; // Reset the price
                    selection.appetizer = null; // Reset the selector
                    $("#image1").html(""); // Remove the image
                }
                else { // Select if the selector is empty
                    total -= appetizerPrice; // Subtract the old item price from total
                    appetizerPrice = escargotPrice; // Add the price of the item to the variable
                    total += appetizerPrice; // Add the price to total
                    selection.appetizer = "Escargot"; // Add an attribute to the selector
                    $("#image1").html('<img src="images/escargot.jpg" alt="escargot">' + escargotPrice + '$'); // Display image with its price
                }
                break;

            case "Green Salad":
                if (selection.appetizer === "Green Salad") {
                    total -= appetizerPrice;
                    appetizerPrice = 0;
                    selection.appetizer = null;
                    $("#image1").html("");
                }
                else {
                    total -= appetizerPrice;
                    appetizerPrice = saladPrice;
                    total += appetizerPrice;
                    selection.appetizer = "Green Salad";
                    $("#image1").html('<img src="images/salade.jpg" alt="green salad">' + saladPrice + '$');
                }
                break;

            case "Caesar Salad":
                if (selection.appetizer === "Caesar Salad") {
                    total -= appetizerPrice;
                    appetizerPrice = 0;
                    selection.appetizer = null;
                    $("#image1").html("");
                }
                else {
                    total -= appetizerPrice;
                    appetizerPrice = caesarSaladPrice;
                    total += appetizerPrice;
                    selection.appetizer = "Caesar Salad";
                    $("#image1").html('<img src="images/caesar.jpg" alt="caesar salad">' + caesarSaladPrice + '$');
                }
                break;

            case "Spaghetti":
                if (selection.mainCourse === "Spaghetti") {
                    total -= mainCoursePrice;
                    mainCoursePrice = 0;
                    selection.mainCourse = null;
                    $("#image2").html("");
                }
                else {
                    total -= mainCoursePrice;
                    mainCoursePrice = spaghettiPrice;
                    total += mainCoursePrice;
                    selection.mainCourse = "Spaghetti";
                    $("#image2").html('<img src="images/spaghetti.jpg" alt="spaghetti">' + spaghettiPrice + '$');
                }
                break;

            case "Steak":
                if (selection.mainCourse === "Steak") {
                    total -= mainCoursePrice;
                    mainCoursePrice = 0;
                    selection.mainCourse = null;
                    $("#image2").html("");
                }
                else {
                    total -= mainCoursePrice;
                    mainCoursePrice = steakPrice;
                    total += mainCoursePrice;
                    selection.mainCourse = "Steak";
                    $("#image2").html('<img src="images/steak.jpg" alt="steak">' + steakPrice + '$');
                }
                break;

            case "Pizza":
                if (selection.mainCourse === "Pizza") {
                    total -= mainCoursePrice;
                    mainCoursePrice = 0;
                    selection.mainCourse = null;
                    $("#image2").html("");
                }
                else {
                    total -= mainCoursePrice;
                    mainCoursePrice = pizzaPrice;
                    total += mainCoursePrice;
                    selection.mainCourse = "Pizza";
                    $("#image2").html('<img src="images/pizza.jpg" alt="pizza">' + pizzaPrice + '$');
                }
                break;

            case "Ice Cream":
                if (selection.dessert === "Ice Cream") {
                    total -= dessertPrice;
                    dessertPrice = 0;
                    selection.dessert = null;
                    $("#image3").html("");
                }
                else {
                    total -= dessertPrice;
                    dessertPrice = iceCreamPrice;
                    total += dessertPrice;
                    selection.dessert = "Ice Cream";
                    $("#image3").html('<img src="images/icecream.jpg" alt="ice cream">' + iceCreamPrice + '$');
                }
                break;

            case "Cake":
                if (selection.dessert === "Cake") {
                    total -= dessertPrice;
                    dessertPrice = 0;
                    selection.dessert = null;
                    $("#image3").html("");
                }
                else {
                    total -= dessertPrice;
                    dessertPrice = cakePrice;
                    total += dessertPrice;
                    selection.dessert = "Cake";
                    $("#image3").html('<img src="images/cake.jpg" alt="cake">' + cakePrice + '$');
                }
                break;

            case "Pudding":
                if (selection.dessert === "Pudding") {
                    total -= dessertPrice;
                    dessertPrice = 0;
                    selection.dessert = null;
                    $("#image3").html("");
                }
                else {
                    total -= dessertPrice;
                    dessertPrice = puddingPrice;
                    total += dessertPrice;
                    selection.dessert = "Pudding";
                    $("#image3").html('<img src="images/pudding.jpg" alt="pudding">' + puddingPrice + '$');
                }
                break;

            case "Coffee":
                if (selection.drink === "Coffee") {
                    total -= drinkPrice;
                    drinkPrice = 0;
                    selection.drink = null;
                    $("#image4").html("");
                }
                else {
                    total -= drinkPrice;
                    drinkPrice = coffeePrice;
                    total += drinkPrice;
                    selection.drink = "Coffee";
                    $("#image4").html('<img src="images/cafe.jpg" alt="coffee">' + coffeePrice + '$');
                }
                break;

            case "Soft Drink":
                if (selection.drink === "Soft Drink") {
                    total -= drinkPrice;
                    drinkPrice = 0;
                    selection.drink = null;
                    $("#image4").html("");
                }
                else {
                    total -= drinkPrice;
                    drinkPrice = softDrinkPrice;
                    total += drinkPrice;
                    selection.drink = "Soft Drink";
                    $("#image4").html('<img src="images/boisson.jpg" alt="soft drink">' + softDrinkPrice + '$');
                }
                break;
        }
        $("#total").text(total + "$"); // Update the total price
    });
});
