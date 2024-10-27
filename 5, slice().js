// La méthode slice() permet d'extraire une portion d'une chaîne de caractères en fonction des indices spécifiés, et renvoie une nouvelle chaîne sans modifier la chaîne d'origine. La syntaxe est la suivante : string.slice(start, end). Il est possible d'utiliser des indices négatifs pour compter à partir de la fin de la chaîne. Un indice négatif signifie que l'extraction commence à partir de la fin de la chaîne, avec -1 représentant le dernier caractère.
// start : l'indice à partir duquel commencer l'extraction (inclus).
// end (optionnel) : L'indice où s'arrêter (non-inclus). Si cet argument est omis, l'extraction se fait jusqu'à la fin de la chaîne.


// Exemple de base
let str = "Bonjour tout le monde";
let extract = str.slice(8, 12);
console.log(extract); // Affiche "tout"

// Exemple avec un seul paramètre
let str1 = "Bonjour tout le monde";
let extract1 = str1.slice(9);
console.log(extract1) // Affiche "out le monde"

// Exemple avec des indices négatifs. Dans cet exemple, -5 signifie que l'extraction commence à 5 caractères avant la fin de la chaîne, donnant "monde".
let str2 = "Bonjour tout le monde";
let extract2 = str2.slice(-5);
console.log(extract2); // Affiche "monde"


//debut = -10 commence 10 caractères avant la fin (ce qui correspond au "t" de "tout").
//fin = -6 s'arrête 6 caractères avant la fin (juste avant l'espace après "tout").
let str3 = "Bonjour tout le monde";
let extract3 = str3.slice(-10, -6);
console.log(extract3); // Affiche "t le"