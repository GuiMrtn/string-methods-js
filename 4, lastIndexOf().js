// la méthode lastIndexOf() fonctionne de manière similaire à la méthode indexOf(), mais elle recherche la dernière occurrence d'une sous-chaîne ou d'un caractère dans une chaîne de caractères. Elle renvoie l'index de la dernière occurrence trouvée. Si la sous-chaîne n'est pas trouvée, la méthode retourne -1. La syntaxe est la suivante : string.indexOf(recherche, positionDepart). Cette recherche est également sensible à la casse.
// recherche : La sous-chaîne ou le caractère à rechercher.
// positionDepart (optionnel) : l'index à partir duquel la recherche doit commencer, mais ici la recherche se fait de droite à gauche. Si ce paramètre est omis, la recherche commence à la fin de la chaîne.

//Exemple de base
let str = "Bonjour tout le monde";
let index = str.lastIndexOf("o");
console.log(index); // Affiche 17

//Exemple avec une position de départ
let phrase = "Bonjour tout le monde";
let index1 = phrase.lastIndexOf("o", 8);
console.log(index1); // Affiche 4

//Exemple avec une sous-chaîne non trouvée
let str2 = "Bonjour";
console.log(str2.lastIndexOf("z")); // Affiche -1


