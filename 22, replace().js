// La méthode replace() est utilisée pour remplacer une partie d'une chaîne de caractères par une autre. Elle est très utile pour manipuler des textes, corriger des erreurs, ou formater des données. Par défaut, sans l'utilisation d'une expression régulière avec le drapeau g, seule la première occurrence de searchValue sera remplacée. La méthode est sensible à la casse. La syntaxe est celle-ci : str.replace(searchValue, newValue).
// searchValue : La chaîne ou l'expression régulière que vous souhaitez rechercher dans la chaîne originale. 
// newValue : La chaîne qui remplacera chaque occurrence de searchValue.


// 1. Remplacement simple avec une chaîne
// Lorsque searchValue est une chaîne de caractères, seule la première occurrence sera remplacée.
let string = "Bonjour tout le monde. Bonjour à tous.";
let newString = string.replace("Bonjour", "Salut");
console.log(newString); //"Salut tout le monde. Bonjour à tous."



// 2. Utilisation avec une expression régulière (RegExp)
// Pour remplacer toutes les occurrences, il est nécessaire d'utiliser une expression régulière avec le drapeau g (global).
let string1 = "Bonjour tout le monde. Bonjour à tous.";
let newString1 = string1.replace(/Bonjour/g, "Salut");
console.log(newString1); // "Salut tout le monde. Salut à tous."



// 3. Remplacement avec des fonctions de rappel
// Il est possible de fournir une fonction comme second argument pour générer dynamiquement la valeur de remplacement.
let string2 = "Le nombre est 42.";
let newString2 = string2.replace(/\d+/, (match) => {
  return parseInt(match) * 2;
});
console.log(newString2); // "Le nombre est 84."



// 4. Exemples concrets
// Supprimer des espaces supplémentaires
let string3 = "  Ceci   est un   exemple.  ";
let cleanString = string3.replace(/\s+/g, ' ').trim();
console.log(cleanString); // "Ceci est un exemple."

// Changer le format d'une date
let date = "25-12-2023";
let newDate = date.replace(/(\d{2})-(\d{2})-(\d{4})/, "$3/$2/$1");
console.log(newDate); //"2023/12/25"

// Masquer une partie d'une adresse e-mail
let email = "utilisateur@example.com";
let hideEmail = email.replace(/(.{3}).+(@.+)/, "$1***$2");
console.log(hideEmail); // "uti***@example.com"



