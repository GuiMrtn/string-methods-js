// la méthode statique raw() est utilisée pour créer des chaînes de caractères brutes (sans interprétation des séquences d'échappement). Elle est principalement utilisée avec des littéraux de gabarits (template literals) pour retourner la chaîne exactement telle qu'elle est écrite, y compris les caractères spéciaux, comme les barres obliques inverses (\), sans interpréter les séquences d'échappement comme \n, \t, etc. La syntaxe est la suivante : String.raw(callSite, ...substitutions).

//callSite : Un objet contenant des informations sur le littéral de gabarit. En général, il est fourni automatiquement lors de l'utilisation de String.raw avec des littéraux de gabarit.

// substitutions : Les expressions substituées dans le littéral de gabarit (les parties dynamiques, entre ${}).



// Exemple de Base
// Ici, au lieu de traiter \n comme un saut de ligne et \t comme une tabulation, String.raw() renvoie la chaîne brute avec les caractères \n et \t non interprétés.
let str = String.raw`Ceci est une chaîne avec une ligne nouvelle: \n et une tabulation: \t`;
console.log(str);
// Affiche: Ceci est une chaîne avec une ligne nouvelle: \n et une tabulation: \t



//Exemple avec Substitutions
// String.raw() laisse les barres obliques inverses intactes (\\), sans les interpréter.
// Les substitutions, comme ${name}, sont remplacées normalement.
let name = "Alice";
let str1 = String.raw`Bonjour, ${name}! Le chemin est C:\\dossier\\fichier.txt.`;
console.log(str1);
// Affiche: Bonjour, Alice! Le chemin est C:\\dossier\\fichier.txt.



// Exemple sans Littéraux de Gabarits
// On peut aussi appeler String.raw() directement, sans littéral de gabarit, en fournissant manuellement les chaînes et les substitutions
let rawString = String.raw({ raw: ['foo', 'bar'] }, 1 + 2);
console.log(rawString); // Affiche "foo3bar"
