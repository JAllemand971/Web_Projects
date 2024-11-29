/* Jeremy Allemand, matricule: 20312390, IFT-1144-A-A24, TP3 */

/*
-------------------------------------------------------
Title: Function 1 - convert	 
Purpose: Convert a number to various formats
-------------------------------------------------------
*/
function convertir(event) {
    let number = parseFloat(document.getElementById("nombre").value); // declare a float from the input

    if (event.target.id === "centimetre"){
        let value1 =  (number * 2.5).toFixed(2); // convert inches to centimeters with 2 decimals
        document.getElementById("resultat").innerHTML = "inches ===> " + value1;
    }

    else if(event.target.id === "pouce") {
        let value2 = (number / 2.5).toFixed(2); // convert centimeters to inches with 2 decimals
        document.getElementById("resultat").innerHTML = "cm ===> " + value2;
    }

    else if(event.target.id === "fahrenheit"){
        let value3 = (number * 9 / 5 + 32).toFixed(2); // convert Celsius to Fahrenheit with 2 decimals
        document.getElementById("resultat").innerHTML = "Celsius ===> " + value3;
    }
    
    else if(event.target.id === "celsius"){
        let value4 = ((number - 32) * 5 / 9).toFixed(2); // convert Fahrenheit to Celsius with 2 decimals
        document.getElementById("resultat").innerHTML = "Fahrenheit ===> " + value4;
    }

} // End of function 1

/*
-------------------------------------------------------
Title: Function 2 - display	 
Purpose: Display a title with changing size
-------------------------------------------------------
*/

function afficher(event) {
    let name = document.getElementById("nom").value; // Get the name string
    let level = parseInt(document.getElementById("niveau").value); // Get the number for title size

    if (event.target.id === "titre"){
        if (level >= 1 && level <= 6) {
        document.getElementById("resultat2").innerHTML = "<h" + level + ">Hello " + name + "<br>Level = " + level + "</h" + level + ">";
        document.getElementById("erreur").innerHTML =""; // Clear error message
        }
        else {
        document.getElementById("resultat2").innerHTML =""; // Clear result text
        document.getElementById("erreur").innerHTML = "The number must be between 1 and 6!!!";
        }
    }
} // End of function 2

/*
-------------------------------------------------------
Title: Function 3 - menu	 
Purpose: Display a dropdown menu
-------------------------------------------------------
*/
$(document).ready(function(){

    // Function to display appetizers, main courses, desserts, drinks
    $(".menu-item").click(function(){
        let $submenu = $(this).next(".submenu"); // when clicking on menu-item, get the next submenu
        $(".submenu").not($submenu).slideUp(500, "linear"); // Close submenus that are not clicked
        $submenu.slideToggle(500, "linear"); // Toggle clicked submenu    
    });

    // Variables to track prices
    let appetizerPrice = 0;
    let mainCoursePrice = 0;
    let dessertPrice = 0;
    let drinkPrice = 0;
    let total = 0;

    // Variables to hold selected items
    let selection = {
        appetizer: null,
        mainCourse: null,
        dessert: null,
        drink: null,
    };

    // Price variables
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
    let sodaPrice = 2;
    
    // Function to display images with their price
    $(".submenu li").click(function(){
        let choice = $(this).text(); // target only the submenu

        switch(choice) {
            case "Snail":
                if (selection.appetizer ==="Snail"){ 
                    total -= appetizerPrice; 
                    appetizerPrice = 0; 
                    selection.appetizer = null; 
                    $("#image1").html(""); 
                }
                else { 
                    total -= appetizerPrice; 
                    appetizerPrice = escargotPrice; 
                    total += appetizerPrice; 
                    selection.appetizer = "Snail"; 
                    $("#image1").html('<img src="images/escargot.jpg" alt="escargot">' + escargotPrice + '$'); 
                }
                break;

            case "Green Salad":
                if (selection.appetizer ==="Green Salad"){
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
                    $("#image1").html('<img src="images/salade.jpg" alt="green salad">'+ saladPrice + '$'); 
                }
            break;

            case "Caesar Salad":
                if (selection.appetizer ==="Caesar Salad"){
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
                    $("#image1").html('<img src="images/salade2.jpg" alt="caesar salad">'+ caesarSaladPrice + '$'); 
                }
            break;            

            case "Spaghetti":
                if (selection.mainCourse ==="Spaghetti"){
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
                    $("#image2").html('<img src="images/spaghetti.jpg" alt="spaghetti">'+ spaghettiPrice + '$'); 
                }
            break;

            case "Steak":
                if (selection.mainCourse ==="Steak"){
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
                    $("#image2").html('<img src="images/steak.jpg" alt="steak">'+ steakPrice + '$'); 
                }
                break;

            case "Pizza":
                if (selection.mainCourse ==="Pizza"){
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
                    $("#image2").html('<img src="images/pizza.jpg" alt="pizza">'+ pizzaPrice + '$');
                }
            break;

            case "Ice Cream":
                if (selection.dessert ==="Ice Cream"){
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
                    $("#image3").html('<img src="images/cremeglacee.jpg" alt="ice cream">'+ iceCreamPrice + '$');
                }
                break;
                
            case "Cake":
                if (selection.dessert ==="Cake"){
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
                    $("#image3").html('<img src="images/gateau.jpg" alt="cake">'+ cakePrice + '$'); 
                }
                break;

            case "Pudding":
                if (selection.dessert ==="Pudding"){
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
                    $("#image3").html('<img src="images/pouding.jpg" alt="pudding">'+ puddingPrice + '$');
                }
            break;

            case "Coffee/Tea":
                if (selection.drink ==="Coffee/Tea"){
                    total -= drinkPrice;
                    drinkPrice = 0;
                    selection.drink = null;
                    $("#image4").html("");
                }
                else {
                    total -= drinkPrice;
                    drinkPrice = coffeePrice;
                    total += drinkPrice;
                    selection.drink = "Coffee/Tea";
                    $("#image4").html('<img src="images/coffee.jpg" alt="coffee">'+ coffeePrice + '$');
                }
                break;

            case "Soda":
                if (selection.drink ==="Soda"){
                    total -= drinkPrice;
                    drinkPrice = 0;
                    selection.drink = null;
                    $("#image4").html("");
                }
                else {
                    total -= drinkPrice;
                    drinkPrice = sodaPrice;
                    total += drinkPrice;
                    selection.drink = "Soda";
                    $("#image4").html('<img src="images/boisson.jpg" alt="soda">'+ sodaPrice + '$');
                }
                break;
        } // End of switch
        document.getElementById("resultat3").innerHTML = "Total = " + total + "$"; // Update total
    });
}); 
