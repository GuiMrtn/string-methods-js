// la méthode toLowerCase() est utilisée pour convertir tous les caractères d'une chaîne en minuscules. Elle ne modifie pas la chaîne d'origine, mais retourne une nouvelle chaîne avec les caractères en minuscules. Cette méthode est utile pour comparer des chaînes sans tenir compte de la casse, ou pour afficher un texte uniformément en minuscules. La syntaxe est la suivante : str.toLowerCase().


//Exemple 1 : Conversion d'une chaîne simple
let string = "Hello World!";
let stringToLowerCase = string.toLowerCase();
console.log(stringToLowerCase); // Affiche "hello world!"



//Exemple 2 : Utilisation pour comparaison de chaînes
let string1 = "JavaScript";
let string2 = "javascript";

console.log(string1 === string2); // Affiche "false" (car la casse est différente)
console.log(string1.toLowerCase() === string2.toLowerCase()); // Affiche "true"



//Exemple 3 : Traitement de caractères accentués
let string3 = "ÀÉÎÖÜ";
console.log(string3.toLowerCase()); // Affiche "àéîöü"



//Exemple 4 : Cas des caractères non alphabétiques
let str = "123 !@# ABC";
console.log(str.toLowerCase()); // Affiche "123 !@# abc"
