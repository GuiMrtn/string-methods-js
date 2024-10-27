// la méthode startsWith() permet de vérifier si une chaîne de caractères commence par une sous-chaîne donnée. Elle renvoie un booléen (true ou false) selon que la chaîne commence ou non par la sous-chaîne spécifiée. Cette méthode est sensible à la casse. La synxtaxe est celle-ci : string.startsWith(sous-chaîne, positionDepart).
// Cette méthode est utile pour vérifier des préfixes dans des données, comme des numéros de téléphone, des codes de pays, ou pour filtrer des chaînes de caractères.
// sousChaine : la chaîne que nous souhaitons vérifier pour savoir si elle est au début de la chaîne principale.
// positionDepart (optionnel) : l'indice à partir duquel commencer la vérification. Par défaut, la recherche commence au début de la chaîne (indice 0).



// Exemple de base
// Dans cet exemple, la méthode vérifie si la chaîne "Bonjour tout le monde" commence par "Bonjour". Comme c'est le cas, elle renvoie true
let str = "Bonjour tout le monde";
let beginWith = str.startsWith("Bonjour");
console.log(beginWith); // Affiche true



// Exemple avec une position départ
//Ici, la méthode vérifie à partir de l'indice 8, où se trouve le mot "tout". Comme la sous-chaîne "tout" commence bien à cet endroit, le résultat est true
let str1 = "Bonjour tout le monde";
let beginWith1 = str1.startsWith("tout", 8);
console.log(beginWith); // Affiche true



// Exemple avec des mots et des positions
let str2 = "TypeScript is amazing";
console.log(str2.startsWith("Type"));   // Affiche true
console.log(str2.startsWith("Script", 4)); // Affiche true
console.log(str2.startsWith("Type", 1));   // Affiche false

