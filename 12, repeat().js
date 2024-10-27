// La méthode repeat() permet de créer une nouvelle chaîne de caractères en répétant la chaîne d'origine un certain nombre de fois. Cette méthode renvoie la chaîne répétée et ne modifie pas la chaîne d'origine. La syntaxe est celle-ci : string.repeat(nombre).
// nombre : Un entier non-négatif qui spécifie le nombre de fois que la chaîne doit être répétée. Si nombre vaut 0, la méthode renvoie une chaîne vide. Si on passe un nombre négatif ou une valeur qui n'est pas un entier, la méthode déclenchera une erreur RangeError.



// Exemple de base
// Dans cet exemple, la chaîne "Bonjour " est répétée 3 fois, et le résultat est "Bonjour Bonjour Bonjour "
let str = "Bonjour ";
let result = str.repeat(3);
console.log(result); // Affiche "Bonjour Bonjour Bonjour "



// Exemple avec un nombre négatif
let string = "Test";
//let result1 = string.repeat(-3); // Déclenche une erreur RangeError



//Exemple  avec une valeur décimale
let newString = "Salut ";
let result2 = newString.repeat(2.7); // 2.7 sera converti en 2
console.log(result2); // Affiche "Salut Salut"



//Exemple avec un nombre égal à 0
let newStr = "Salut";
let result3 = newStr.repeat(0);
console.log(result3); // Affiche une chaîne vide ""



//Utilisation pratique
let stars = "*".repeat(5);
console.log(stars); // Affiche "*****"

let line = "-".repeat(20);
let title = "Titre".toUpperCase();
let subtitle = "Sous-titre";
let result4 = `${line}\n${title}\n${subtitle}\n${line}`;
console.log(result4);


