//La méthode substring() permet d'extraire une partie d'une chaîne de caractères entre deux indices, et retourne une nouvelle chaîne sans modifier l'originale. La syntaxe est la suivante : string.slice(start, end). Contrairement à slice(), la méthode substring() ne supporte pas les indices négatifs. Si un indice négatif est fourni, il sera traité comme 0. En outre, si l'indice de début est supérieur à l'indice de fin, la méthode substring() intervertit automatiquement les valeurs.
// start : l'indice à partir duquel commencer l'extraction (inclus).
// end (optionnel) : L'indice où l'extraction s'arrête (non-inclus). Si cet argument est omis, l'extraction se fait jusqu'à la fin de la chaîne.

// Exemple de base.
// start = 8 : L'extraction commence à l'indice 8 (le "t" de "tout").
// end = 12 : L'extraction s'arrête à l'indice 12, juste avant le caractère à cet indice
let str = "Bonjour tout le monde";
let extract = str.substring(8, 12);
console.log(extract); // Affiche "tout"


// Exemple avec un seul paramètre
// Ici, l'extraction commence à l'indice 8 et se poursuit jusqu'à la fin de la chaîne
let str1 = "Bonjour tout le monde";
let extract1 = str1.substring(8);
console.log(extract1); // Affiche "tout le monde"


//Exemple avec un indice négatif
//Ici l'indice -5 est traité comme 0
let str2 = "Bonjour tout le monde";
console.log(str2.substring(-5, 7)); // Affiche "Bonjour"


// Exemple avec une inversion des indices
// Ici, la méthode réorganisera automatiquement la chaîne pour que l'indice de début soit inférieur à l'indice de fin.
let str3 = "Bonjour tout le monde";
console.log(str3.substring(12, 8)); // Affiche "tout"
