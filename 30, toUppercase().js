// la méthode toUpperCase() est utilisée pour convertir tous les caractères d'une chaîne en majuscules. Elle retourne une nouvelle chaîne avec tous les caractères transformés, sans modifier la chaîne d'origine. La syntaxe est la suivante : str.toUpperCase().


//Exemple 1 : Conversion d'une chaîne simple
let string = "Hello World!";
let upperString = string.toUpperCase();
console.log(upperString); // Affiche "HELLO WORLD!"


//Exemple 2 : Utilisation pour des comparaisons insensibles à la casse
let string1 = "javascript";
let string2 = "JAVASCRIPT";

console.log(string1 === string2); // Affiche "false" (les casses sont différentes)
console.log(string1.toUpperCase() === string2.toUpperCase()); // Affiche "true"


//Exemple 3 : Traitement des caractères accentués
let string3 = "àéîöü";
console.log(string3.toUpperCase()); // Affiche "ÀÉÎÖÜ"


//Exemple 4 : Caractères non alphabétiques
// Les caractères qui ne sont pas des lettres (nombres, symboles, etc.) ne sont pas affectés par la méthode toUpperCase().
let string4 = "123 !@# abc";
console.log(string4.toUpperCase()); // Affiche "123 !@# ABC"

