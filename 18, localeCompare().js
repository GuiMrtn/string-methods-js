// La méthode localeCompare() permet de comparer deux chaînes de caractères en tenant compte des conventions linguistiques spécifiques à une locale donnée (par exemple, la langue ou les règles de tri d'une région). Elle est très utile lorsque vous voulez trier des chaînes en fonction de l'alphabet ou des règles de tri d'une langue spécifique, car cela varie d'une langue à l'autre. La syntaxe est la suivante : str.localeCompare(autreChaine, [locale], [options]).

//str : La chaîne de caractères sur laquelle la méthode est appelée.
// autreChaine : La chaîne de caractères à comparer avec la chaîne d'origine.
// locale (optionnel) : un argument optionnel pour spécifier la locale utilisée pour la comparaison. Par défaut, c'est l'environnement de la machine qui détermine la locale.
//options (optionnel) : un objet qui permet de spécifier des options de comparaison comme la sensibilité à la casse, les accents, etc.


// Valeurs de retour : la méthode renvoie un nombre qui indique si la chaîne de caractères d'origine vient avant, après ou est égale à l'autre chaîne :
// -1 : La chaîne d'origine vient avant autreChaine dans l'ordre alphabétique ('a'.localeCompare('b')).
// 1 : La chaîne d'origine vient après autreChaine dans l'ordre alphabétique ('b'.localeCompare('a')).
//0 : Les chaînes sont considérées comme égales ('a'.localeCompare('a')).


//Exemple de base
let str1 = "a";
let str2 = "b";

console.log(str1.localeCompare(str2)); // Affiche -1 (car "a" vient avant "b")


// Exemple avec sensibilité à la casse
let str3= "a";
let str4 = "A";

console.log(str3.localeCompare(str4)); // Affiche 1 ou -1 selon la locale (car "a" et "A" peuvent être traités différemment selon la locale)


//Comparaison de chaînes dans l'ordre alphabétique
//Lorsque nous utilisons localeCompare() dans une fonction de tri (sort()), nous pouvons trier un tableau de chaînes en fonction des conventions linguistiques.
let fruits = ["pomme", "banane", "Pêche", "orange"];

fruits.sort((a, b) => a.localeCompare(b));
console.log(fruits); // Affiche [ 'banane', 'orange', 'Pêche', 'pomme' ]


//Utilisation avec la locale spécifiée
// En fonction de la locale (par exemple, en français, anglais, ou autre), le tri ou la comparaison des chaînes peut varier.
let str5 = "école";
let str6 = "elephant";

console.log(str5.localeCompare(str6, 'fr')); // Affiche -1 (car "école" vient avant "elephant" en français)


//Options de comparaison
//L'objet options permet de définir des critères de comparaison plus spécifiques, comme :

// sensitivity : Contrôle la sensibilité à la casse, aux accents, et aux diacritiques.
// "base" : Compare uniquement les caractères de base, en ignorant les accents et la casse (ex : a === A === á).
// "accent" : Compare les accents mais ignore la casse (ex : a === A, mais a !== á).
// "case" : Compare les caractères en fonction de la casse (ex : a !== A).
// "variant" : Compare les variantes des caractères, c'est la sensibilité maximale.
let str7 = "résumé";
let str8 = "resume";

console.log(str7.localeCompare(str8, 'fr', { sensitivity: 'base' })); // Affiche 0 (accents ignorés)
console.log(str7.localeCompare(str8, 'fr', { sensitivity: 'accent' })); // Affiche 1 (accents pris en compte)


//Options supplémentaires
//ignorePunctuation : Permet d'ignorer la ponctuation lors de la comparaison.
let str9 = "hello!";
let str10 = "hello";

console.log(str9.localeCompare(str10, 'en', { ignorePunctuation: true })); // Affiche 0 (ponctuation ignorée)


//Exemple d'utilisation dans le tri
// localeCompare() est souvent utilisé pour trier des listes de chaînes selon les règles d'une locale spécifique.
let names = ["Åsa", "Ärling", "Anders", "Östen"];

names.sort((a, b) => a.localeCompare(b, 'sv')); // Tri selon les conventions suédoises
console.log(names); // Affiche ["Anders", "Åsa", "Ärling", "Östen"]


