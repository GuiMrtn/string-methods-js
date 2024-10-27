// la méthode search() permet de rechercher une expression régulière dans une chaîne de caractères et de renvoyer l'index de la première occurrence de cette expression. Si l'expression régulière n'est pas trouvée, elle renvoie -1. La syntaxe est la suivante : string.search(regexp).

//regexp : Une expression régulière (ou un objet RegExp) à rechercher dans la chaîne. Si regexp est une chaîne de caractères, elle sera convertie en expression régulière avec le modificateur global (g).



//Exemple de base
// Dans cet exemple, la méthode search() renvoie 8, qui est l'index de la première occurrence de "tout" dans la chaîne "Bonjour tout le monde".
let string = "Bonjour tout le monde";
let index = string.search("tout");
console.log(index); // Affiche 8



//Utilisation avec des expressions régulières
let string1 = "Bonjour 1234!";
let index1 = string1.search(/[0-9]/); // Recherche le premier chiffre
console.log(index1); // Affiche 8 (index du '1')


let string2 = "Bonjour tout le monde";
let index2 = string2.search(/BONJOUR/i); // Recherche "BONJOUR" en ignorant la casse
console.log(index2); // Affiche 0


//Cas où l'expression régulière n'est pas trouvée
let string3 = "Bonjour tout le monde";
let index3 = string3.search("au revoir");
console.log(index3); // Affiche -1 (aucune correspondance trouvée)




