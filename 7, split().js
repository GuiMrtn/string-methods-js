// La méthode split() permet de diviser une chaîne de caractères en un tableau de sous-chaînes, en fonction d'un séparateur spécifié. C'est très utile pour décomposer une chaîne en morceaux plus petits, basés sur un délimiteur particulier (comme un espace, une virgule, un tiret, etc.). La syntaxe est la suivante : string.slice(separateur, limite).
// separateur : le caractère, la chaîne ou l'expression régulière utilisée pour décomposer la chaîne. Si ce paramètre est omis ou undefined, la méthode retourne un tableau contenant l'intégralité de la chaîne.
// limite (optionnel) : un entier indiquant le nombre maximal de sous-chaînes à retourner. Si ce paramètre est omis, la méthode divise toute la chaîne.



//Exemple de base
// Le séparateur est un espace (" "), donc la chaîne est divisée chaque fois qu'un espace est rencontré.
// Le résultat est un tableau contenant chaque mot séparé : ["Bonjour", "tout", "le", "monde"]
let str = "Bonjour tout le monde";
let words = str.split(" ");
console.log(words); // Affiche ["Bonjour", "tout", "le", "monde"]



// Exemple avec un caractère comme séparateur
// Ici, le séparateur est la virgule ,, donc la chaîne est divisée en un tableau de fruits.
let fruits = "pomme,banane,cerise,orange";
let list = fruits.split(",");
console.log(list); // Affiche ["pomme", "banane", "cerise", "orange"]



//Exemple avec une limite
//Dans cet exemple, on spécifie une limite de 2, ce qui signifie que la méthode retourne au maximum 2 sous-chaînes. Le tableau contient donc seulement les deux premiers mots
let str1 = "Bonjour tout le monde";
let words1 = str1.split(" ", 2);
console.log(words1); // Affiche ["Bonjour", "tout"]



//Exemple sans séparateur
let str2 = "Bonjour tout le monde";
let array = str2.split();
console.log(array); // Affiche ["Bonjour tout le monde"]



//Exemple avec un séparateur vide
//On utilise ici une chaîne vide ("") comme séparateur, chaque caractère de la chaîne est séparé individuellement dans le tableau
let str3 = "Bonjour tout le monde";
let letters = str3.split("");
console.log(letters); // Affiche ['B', 'o', 'n', 'j', 'o', 'u', 'r', ' ', 't', 'o', 'u', 't', ' ', 'l', 'e', ' ', 'm', 'o', 'n', 'd', 'e']



//Exemple avec une expression régulière
// Ici, l'expression régulière /[ ,.!]+/ indique que la chaîne doit être divisée dès qu'elle rencontre un espace, une virgule, un point ou un point d'exclamation
let str4 = "Bonjour, tout. Le monde!";
let words2 = str4.split(/[ ,.!]+/); // Séparateurs: espace, virgule, point, point d'exclamation
console.log(words); // Affiche ["Bonjour", "tout", "Le", "monde"]
