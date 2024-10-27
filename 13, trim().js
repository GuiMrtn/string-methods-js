// la méthode trim() permet de supprimer les espaces blancs (espaces, tabulations, retours à la ligne, etc...) situés au début et à la fin d'une chaîne de caractères. Cette méthode ne modifie pas la chaîne d'origine, mais renvoie une nouvelle chaîne sans les espaces en excès. 


//Exemple de base
let string = "   Bonjour tout le monde   ";
let result = string.trim();
console.log(result); // Affiche "Bonjour tout le monde"



//Chaîne immuable
let str = "   Salut   ";
let result1 = str.trim();
console.log(str);   // Affiche "   Salut   "
console.log(result1); // Affiche "Salut"



//Utilisation avec d'autres méthodes
let string1 = "   BONJOUR tout le monde   ";
let result2 = string1.trim().toLowerCase();
console.log(result2); // Affiche "bonjour tout le monde"



//Utilisation pratique
// Dans de nombreuses applications, il est courant de vouloir nettoyer les espaces en trop dans la saisie utilisateur, par exemple pour les champs de formulaire (mail, mots de passe...).
let email = "   jean.dupont@example.com   ";
let cleanedEmail = email.trim();
console.log(cleanedEmail); // Affiche "jean.dupont@example.com"

