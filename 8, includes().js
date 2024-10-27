// La méthode includes() permet de vérifier si une chaîne de caractères contient une sous-chaîne donnée. Elle renvoie un booléen (true ou false) en fonction de la présence ou non de cette sous-chaîne. La syntaxe est la suivante : string.includes(sousChaine, positionDepart).
// sousChaine : La chaîne recherchée dans la chaîne principale.
// positionDepart (optionnel) : l'indice à partir duquel commencer la recherche. Par défaut, la recherche commence au début de la chaîne.
// Méthode sensible à la casse



// Exemple de base
let email = "contact@gmail.com";
let content = email.includes("@");
console.log(content); // Affiche true


// Exemple avec une position départ
//Ici, la recherche commence à l'indice 5. Comme "Bonjour" se trouve au début de la chaîne (indice 0), il n'est pas trouvé après l'indice 5, donc le résultat est false
let str = "Bonjour tout le monde";
let content1 = str.includes("Bonjour", 5);
console.log(content1); // Affiche false

