// la méthode replaceAll() est utilisée pour remplacer toutes les occurrences d'une sous-chaîne ou d'une expression régulière dans une chaîne de caractères. Contrairement à la méthode replace(), qui ne remplace que la première occurrence par défaut, replaceAll() garantit que toutes les instances du motif recherché sont remplacées. la méthode replaceAll() est sensible à la casse. La syntaxe est celle-ci : str.replaceAll(searchValue, newValue).
//searchValue : La chaîne ou l'expression régulière que vous souhaitez rechercher dans la chaîne d'origine.
// newValue : La chaîne qui remplacera chaque occurrence de searchValue.



// 1. Remplacement d'une chaîne
// Si searchValue est une chaîne de caractères, toutes les occurrences de cette chaîne dans la chaîne d'origine seront remplacées par newValue.
let string = "Bonjour tout le monde. Bonjour à tous.";
let newString = string.replaceAll("Bonjour", "Salut");
console.log(newString); //"Salut tout le monde. Salut à tous."



// 2. Utilisation avec une expression régulière.
// On peut également utiliser une expression régulière pour effectuer des remplacements. Cependant, il est important de noter que replaceAll() ne fonctionne qu'avec des expressions régulières globales (avec le drapeau g).
let string1 = "Bonjour tout le monde. Bonjour à tous.";
let newString1 = string1.replaceAll(/Bonjour/g, "Salut");
console.log(newString1); // "Salut tout le monde. Salut à tous."



// 3. Exemples pratiques
// Remplacer tous les espaces par des tirets
let string2 = "Ceci est un exemple";
let changedString2 = string2.replaceAll(" ", "-");
console.log(changedString2); // "Ceci-est-un-exemple"

// Remplacer un mot dans une phrase
let string3 = "chat chat chien chat";
let changedString3 = string3.replaceAll("chat", "oiseau");
console.log(changedString3); //"oiseau oiseau chien oiseau"

//Nettoyage d'un texte en supprimant des caractères spécifiques
let string4 = "a1b2c3";
let changedString4 = string4.replaceAll(/\d/g, "");
console.log(changedString4);// "abc"




