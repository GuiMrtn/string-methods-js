// la méthode match() est utilisée pour rechercher une correspondance dans une chaîne de caractères en utilisant une expression régulière. Si la correspondance est trouvée, match() retourne un tableau contenant le premier élément est la chaîne de caractères correspondante ou, s'il y en a, les éléments suivants. Si aucune correspondance n'est trouvée, elle retourne null. La syntaxe est la suivante : string.match(regexp).

//string : La chaîne de caractères sur laquelle vous voulez effectuer la recherche.
//regexp : Une expression régulière (ou un objet RegExp) qui définit le modèle à rechercher.



//Correspondance simple
const str = "Bonjour tout le monde";
const result = str.match(/monde/);
console.log(result); // ['monde', index: 16, input: 'Bonjour tout le monde', groups: undefined]


//Utilisation de groupes capturés
const str1 = "Aujourd'hui, c'est le 30 septembre.";
const result1 = str1.match(/(\d{1,2}) (\w+)/);
console.log(result1); //  ['30 septembre', '30', 'septembre', index: 22, input: "Aujourd'hui, c'est le 30 septembre.", groups: undefined]


//Recherche sans correspondance
const str2 = "Bonjour tout le monde";
const result2 = str2.match(/au revoir/);
console.log(result2); // null


//Utilisation du modificateur g (global)
const str3 = "a b c a d a e";
const result3 = str3.match(/a/g);
console.log(result3); // ["a", "a", "a"]
