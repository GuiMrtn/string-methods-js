// La méthode indexOf() permet de rechercher la première occurence d'une sous-chaîne (ou d'un caractère) dans une chaîne de caractères et retourne l'index de cette occurence. Si la sous-chaîne n'est pas trouvée, la méthode retourne -1. Attention car cette méthode est sensible à la casse. La syntaxe est la suivante : string.indexOf(recherche, positionDepart).
// recherche: la sous-chaîne ou le caractère recherché.
// positionDepart (optiionnel) : l'index à partir duquel la recherche doit commencer. Si ce paramètre est omis, la recherche commence à l'index 0.

//Exemple de base. La chaîne "Bonjour tout le monde" contient la sous-chaîne "tout" à l'index 8
let str = "Bonjour tout le monde"
let index = str.indexOf("tout");
console.log(index); // Affiche 8

//Exemple avec un caractère unique.
let str1 = "Bonjour tout le monde";
let index1 = str1.indexOf("o");
console.log(index1); // Affiche 1

//Exemple avec le paramètre positionDepart. Ici, la recherche commence à l'index 5, donc la première occurrence de "o" après cette position est trouvée à l'index 9 (dans "monde").
let str2 = "Bonjour tout le monde";
let index2 = str2.indexOf("o", 5);
console.log(index2); // Affiche 9

// Exemple avec une sous chaîne non trouvée.
let str3 = "Bonjour tout le monde";
let index3 = str3.indexOf("z");
console.log(index3); // Affiche -1