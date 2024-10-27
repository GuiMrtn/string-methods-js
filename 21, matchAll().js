// La méthode matchAll() est utilisée pour trouver toutes les correspondances d'une expression régulière dans une chaîne de caractères. Elle renvoie un itérateur qui produit tous les résultats trouvés, y compris les groupes capturés. Cela permet de récupérer facilement toutes les correspondances sans avoir à utiliser une boucle explicite. Cette méthode retourne un objet Iterator (itérateur) qui produit des tableaux pour chaque correspondance, où le premier élément du tableau est la chaîne correspondante et les éléments suivants sont les groupes capturés. Si aucune correspondance n'est trouvée, l'itérateur ne produit aucun résultat. La syntaxe est la suivante : string.matchAll(regexp).

// string : La chaîne sur laquelle on souhaite effectuer la recherche.
// regexp : une expression régulière (ou un objet RegExp) qui définit le modèle à rechercher. Si on utilise le modificateur g (global), nous devons le faire pour obtenir toutes les correspondances.


// Correspondance simple
const str = "Les chats et les chiens";
const regex = /ch/g;
const matches = str.matchAll(regex);

for (const match of matches) {
    console.log(match); // ["ch", index: 4, input: "Les chats et les chiens", groups: undefined]
    //["ch", index: 17, input: "Les chats et les chiens", groups: undefined]
}


//Utilisation de groupes capturés
const str1 = "Je vais au cinéma avec mes amis.";
const regex1 = /(\w+) (\w+)/g;
const matches1 = str1.matchAll(regex1);

for (const match of matches1) {
    console.log(match);
    //['Je vais', 'Je', 'vais', index: 0, input: 'Je vais au cinéma avec mes amis.', groups: undefined]
    //['au cin', 'au', 'cin', index: 8, input: 'Je vais au cinéma avec mes amis.', groups: undefined]
    //['ma avec', 'ma', 'avec', index: 15, input: 'Je vais au cinéma avec mes amis.', groups: undefined]
    //['mes amis', 'mes', 'amis', index: 23, input: 'Je vais au cinéma avec mes amis.', groups: undefined]
}


//Recherche sans correspondance
const str2 = "Bonjour tout le monde";
const regex2 = /au revoir/g;
const matches2 = str.matchAll(regex2);

console.log(Array.from(matches2)); // []


