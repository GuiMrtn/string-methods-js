// La méthode concat() permet de concaténer deux ou plusieurs chaînes de caractères pour en former une nouvelle. Elle ne modifie pas les chaînes d'origine, mais renvoie une nouvelle chaîne qui est le résultat de la concaténation. La syntaxe est celle-ci : str.concat(chaine1, chaine2....chaineN).
// Pour des raisons de performance, il est fortement recommandé de ne pas utiliser cette méthode et de lui préferer les opérateurs + et +=.


// Exemple de base
let str1 = "Bonjour";
let str2 = " tout";
let str3 = " le monde";
let result = str1.concat(str2, str3);
console.log(result); // Affiche "Bonjour tout le monde"



//Exemple 2 : les chaîne immuable
// Les chaînes en JavaScript sont immuables. Cela signifie que la méthode concat() ne modifie pas la chaîne originale, mais retourne une nouvelle chaîne.
let string1 = "Salut";
let string2 = " tout le monde";
let result1 = string1.concat(string2);
console.log(string1); // Affiche "Salut" (la chaîne d'origine n'est pas modifiée)
console.log(result1); // Affiche "Salut tout le monde"
