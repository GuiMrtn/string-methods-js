// la méthode endsWith() permet de vérifier si une chaîne de caractères se termine par une sous-chaîne spécifique. Elle renvoie un booléen (true ou false) selon que la chaîne se termine ou non par cette sous-chaîne. Cette méthode est sensible à la casse et est utile pour vérifier les extensions de fichiers ou des URL. La synxtaxe est celle-ci : string.endsWith(sous-chaîne, longueur).
// sousChaine : la chaîne que nous souhaitons vérifier pour savoir si elle est à la fin de la chaîne principale.
// longueur (optionnel) : un entier qui indique jusqu'où la chaîne est considérée pour la vérification. Si ce paramètre est spécifié, la méthode considère seulement les caractères jusqu'à cette longueur, sans inclure ceux après.



// Exemple de base
// Dans cet exemple, la méthode vérifie si la chaîne "Bonjour tout le monde" se termine par "monde". Comme c'est le cas, elle renvoie true
let str = "Bonjour tout le monde";
let finishWith = str.endsWith("monde");
console.log(finishWith); // Affiche true



// Exemple avec une longueur spécifique
//Ici, la méthode considère seulement les 15 premiers caractères de la chaîne ("Bonjour tout le") et vérifie si cette portion se termine par "le". Comme c'est le cas, le résultat est true
let str1 = "Bonjour tout le monde";
let finishWith1 = str1.endsWith("le", 15);
console.log(finishWith1); // Affiche true



//Exemple avec différents cas
let phrase = "TypeScript is amazing";

console.log(phrase.endsWith("amazing"));   // Affiche true
console.log(phrase.endsWith("Typescript")); // Affiche false
console.log(phrase.endsWith("Typescript", 22)); // Affiche false


