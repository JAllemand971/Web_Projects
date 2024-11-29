/* Jeremy Allemand, matricule: 20312390, IFT-1144-A-A24, TP3 */

/*
-------------------------------------------------------
Titre: Fonction 1 - convertir	 
But : Convertir un nombre dans divers format
-------------------------------------------------------
*/
function convertir(event) {
    let nombre = parseFloat(document.getElementById("nombre").value); // declare un reel a partir de l'input

    if (event.target.id === "centimetre"){
        let valeur1 =  (nombre * 2.5).toFixed(2); // conversion pouce a centimetre avec 2 decimales
        document.getElementById("resultat").innerHTML = "pouces ===> " + valeur1;
    }

        else if(event.target.id === "pouce") {
            let valeur2 = (nombre / 2.5).toFixed(2); // conversion centimetre a pouce avec 2 decimales
            document.getElementById("resultat").innerHTML = "cm ===>" + valeur2;
        }

        else if(event.target.id === "fahrenheit"){
            let valeur3 = (nombre * 9 / 5 + 32).toFixed(2); // conversion celsius a Fahrenheit avec 2 decimales
            document.getElementById("resultat").innerHTML = "celsius ===>" + valeur3;
        }
    
        else if(event.target.id === "celsius"){
            let valeur4 = ((nombre - 32) * 5 / 9).toFixed(2); // conversion Fahrenheit a celsius avec 2 decimales
            document.getElementById("resultat").innerHTML = "fahrenheit ===>" + valeur4;
        }
    
} // Fin de la fonction 1

/*
-------------------------------------------------------
Titre: Fonction 2 - afficher	 
But : Afficher un titre changeant de taille
-------------------------------------------------------
*/

function afficher(event) {
    let nom = document.getElementById("nom").value; // Prends la chaine de caractere nom
    let niveau = parseInt(document.getElementById("niveau").value); // Prends le nombre pour la taille du titre

    if (event.target.id === "titre"){
        if (niveau >= 1 && niveau <= 6) {
        document.getElementById("resultat2").innerHTML = "<h" + niveau + ">Bonjour " + nom + "<br>Niveau = " + niveau + "</h" + niveau + ">";
        document.getElementById("erreur").innerHTML =""; // Enleve le texte d'erreur
        }
            else {
            document.getElementById("resultat2").innerHTML =""; // Enleve le texte de resultat
            document.getElementById("erreur").innerHTML = "Le nombre doit être compris entre 1 et 6!!!";
            }
    }
} // Fin de la fonction 2

/*
-------------------------------------------------------
Titre: Fonction 3 - menu	 
But : Afficher un menu deroulant
-------------------------------------------------------
*/
$(document).ready(function(){

    // Fonction pour afficher les entrees, plats, dessert, boisson
    $(".menu-item").click(function(){
        let $submenu = $(this).next(".submenu"); // en cliquant sur le menu-item, on obtient les next: submenu
        $(".submenu").not($submenu).slideUp(500, "linear"); // Ferme les sous menu qui ne sont pas cliques
        $submenu.slideToggle(500, "linear"); // Toggle le sous menu clique    
    });

    // Variables pour memoriser le prix
    let entreevar = 0;
    let principalvar = 0;
    let dessertvar = 0;
    let boissonvar = 0;
    let total = 0;

    // Variables pour le selecteur
    let selection = {
        entree: null,
        principal: null,
        dessert: null,
        boisson: null,
    };

    // Variable des prix
    let prix_escargot = 8;
    let prix_salade = 5;
    let prix_salade2 = 6;
    let prix_spaghetti = 12;
    let prix_steak = 15;
    let prix_pizza = 14;
    let prix_glace = 8;
    let prix_gateau = 7;
    let prix_pouding = 5;
    let prix_cafe = 3;
    let prix_boisson = 2;
    
    // Fonction pour afficher les images avec leur prix
    $(".submenu li").click(function(){
        let choix = $(this).text(); // permet de cibler le sous menu seulement

        switch(choix) {
            case "Escargot":
                if (selection.entree ==="Escargot"){ // Deselectionne si le selecteur a un atribut
                    total-= entreevar; // Retire le prix du total
                    entreevar = 0; // Reinitialise le prix
                    selection.entree = null; // Remets a 0 le selecteur
                    $("#image1").html(""); // Enleve l'image
                }
                else { // Selectione si le selecteur est vide
                    total-= entreevar; // Retire le prix de l'ancien item du total
                    entreevar = prix_escargot; // Ajoute le prix de l'item a la variable 
                    total += entreevar; // Ajoute le prix de l'item au total
                    selection.entree = "Escargot"; // Ajoute un atribut au selecteur
                    $("#image1").html('<img src="images/escargot.jpg" alt="escargot">' + prix_escargot + '$'); // L'image est affiche avec son prix
                }
                break;

            case "Salade Verte":
                if (selection.entree ==="Salade Verte"){
                    total-= entreevar;
                    entreevar = 0;
                    selection.entree = null;
                    $("#image1").html("");
                }
                else {
                    total-= entreevar;
                    entreevar = prix_salade;
                    total += entreevar;
                    selection.entree = "Salade Verte";
                    $("#image1").html('<img src="images/salade.jpg" alt="salade verte">'+ prix_salade + '$'); 
                }
            break;

            case "Salade César":
                if (selection.entree ==="Salade César"){
                    total-= entreevar;
                    entreevar = 0;
                    selection.entree = null;
                    $("#image1").html("");
                }
                else {
                    total-= entreevar;
                    entreevar = prix_salade2;
                    total += entreevar;
                    selection.entree = "Salade César";
                    $("#image1").html('<img src="images/salade2.jpg" alt="salade cesar">'+ prix_salade2 + '$'); 
                }
            break;            

            case "Spaghetti":
                if (selection.principal ==="Spaghetti"){
                    total-= principalvar;
                    principalvar = 0;
                    selection.principal = null;
                    $("#image2").html("");
                }
                else {
                    total-= principalvar;
                    principalvar = prix_spaghetti;
                    total += principalvar;
                    selection.principal = "Spaghetti";
                    $("#image2").html('<img src="images/spaghetti.jpg" alt="spaghetti">'+ prix_spaghetti + '$'); 
                }
            break;

            case "Steak":
                if (selection.principal ==="Steak"){
                    total-= principalvar;
                    principalvar = 0;
                    selection.principal = null;
                    $("#image2").html("");
                }
                else {
                    total-= principalvar;
                    principalvar = prix_steak;
                    total += principalvar;
                    selection.principal = "Steak";
                    $("#image2").html('<img src="images/steak.jpg" alt="Steak">'+ prix_steak + '$'); 
                }
                break;

            case "Pizza":
                if (selection.principal ==="Pizza"){
                    total-= principalvar;
                    principalvar = 0;
                    selection.principal = null;
                    $("#image2").html("");
                }
                else {
                    total-= principalvar;
                    principalvar = prix_pizza;
                    total += principalvar;
                    selection.principal = "Pizza";
                    $("#image2").html('<img src="images/pizza.jpg" alt="pizza">'+ prix_pizza + '$');
                }
            break;

            case "Glace":
                if (selection.dessert ==="Glace"){
                    total-= dessertvar;
                    dessertvar = 0;
                    selection.dessert = null;
                    $("#image3").html("");
                }
                else {
                    total-= dessertvar;
                    dessertvar = prix_glace;
                    total += dessertvar;
                    selection.dessert = "Glace";
                    $("#image3").html('<img src="images/cremeglacee.jpg" alt="glace">'+ prix_glace + '$');
                }
                break;
                
            case "Gâteau":
                if (selection.dessert ==="Gâteau"){
                    total-= dessertvar;
                    dessertvar = 0;
                    selection.dessert = null;
                    $("#image3").html("");
                }
                else {
                    total-= dessertvar;
                    dessertvar = prix_gateau;
                    total += dessertvar;
                    selection.dessert = "Gâteau";
                    $("#image3").html('<img src="images/gateau.jpg" alt="gateau">'+ prix_gateau + '$'); 
                }
                break;

            case "Pouding":
                if (selection.dessert ==="Pouding"){
                    total-= dessertvar;
                    dessertvar = 0;
                    selection.dessert = null;
                    $("#image3").html("");
                }
                else {
                    total-= dessertvar;
                    dessertvar = prix_pouding;
                    total += dessertvar;
                    selection.dessert = "Pouding";
                    $("#image3").html('<img src="images/pouding.jpg" alt="pouding">'+ prix_pouding + '$');
                }
            break;

            case "Café/Thé":
                if (selection.boisson ==="Café/Thé"){
                    total-= boissonvar;
                    boissonvar = 0;
                    selection.boisson = null;
                    $("#image4").html("");
                }
                else {
                    total-= boissonvar;
                    boissonvar = prix_cafe;
                    total += boissonvar;
                    selection.boisson = "Café/Thé";
                    $("#image4").html('<img src="images/cafe.jpg" alt="cafe">'+ prix_cafe + '$'); 
                }
                break;

            case "Boisson Gazeuse":
                if (selection.boisson ==="Boisson Gazeuse"){
                    total-= boissonvar;
                    boissonvar = 0;
                    selection.boisson = null;
                    $("#image4").html("");
                }
                else {
                    total-= boissonvar;
                    boissonvar = prix_boisson;
                    total += boissonvar;
                    selection.boisson = "Boisson Gazeuse";
                    $("#image4").html('<img src="images/boisson.jpg" alt="boisson">'+ prix_boisson + '$');
                }
        }   

    }); 

    $("#facture").click(function(){
            let totalAvecTaxes = total + total * 0.1495;
            document.getElementById("facture").innerHTML = "Votre facture est de " + totalAvecTaxes.toFixed(2) + "$";
            $("#facture").css({
                "color": "green",
                "font-weight": "bold"
            });
            });

});
