// La méthode padStart() permet de compléter une chaîne de caractères en ajoutant des caractères au début de la chaîne jusqu'à atteindre une certaine longueur. C'est utile pour formater les chaînes de manière uniforme, par exemple pour ajouter des zéros devant des nombres ou aligner du texte. La syntaxe est la suivante : string.padStart(longueurCible, padString).

//longueurCible : la longueur totale que la chaîne finale doit avoir après avoir ajouté le remplissage. Si cette valeur est inférieure ou égale à la longueur de la chaîne d'origine, la chaîne est renvoyée sans modification.

//padString (optionnel) : la chaîne à ajouter au début de la chaîne d'origine pour atteindre la longueur cible. Par défaut, il s'agit d'un espace (" ").



// Exemple de base
// Dans cet exemple, la chaîne "42" est complétée au début par trois zéros pour atteindre une longueur totale de 5 caractères. Le résultat est "00042".
let string = "42";
let result = string.padStart(5, "0");
console.log(result); // Affiche "00042"



//Exemple avec avec une chaîne égale ou supérieure à la longueur cible
let str = "12345";
let result1 = str.padStart(3, "0");
console.log(result1); // Affiche "12345" (la chaîne est déjà plus longue que 3)


//Exemple avec un padString vide (" ")
let str1 = "Hello";
let result2 = str1.padStart(10);
console.log(result2); // Affiche "     Hello" (5 espaces ajoutés)


//Exemple avec plusieurs caractères
let str2 = "5";
let result3 = str2.padStart(6, "AB");
console.log(result3); // Affiche "ABABA5" (la chaîne "AB" est répétée)


//Utilisation pratique : formatage de dates
let day = "5";
let month = "9";
let year = "2024";

let formateDay = day.padStart(2, "0");
let formateMonth = month.padStart(2, "0");
let formatedDate = `${formateDay}/${formateMonth}/${year}`;
console.log(formatedDate); // Affiche "05/09/2024"



