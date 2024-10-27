// la méthode toLocaleLowerCase() est utilisée pour convertir une chaîne de caractères en minuscules, mais en tenant compte des règles de casse spécifiques à une locale (langue ou région). Cela permet d'appliquer des règles linguistiques spécifiques lors de la conversion, ce qui peut être nécessaire pour certaines langues, comme le turc, qui a des règles particulières concernant la conversion des majuscules en minuscules. La syntaxe est la suivante : str.toLocaleLowerCase([locales]).

//locales (facultatif) : Une chaîne ou un tableau de chaînes qui représentent des codes de langues conformes à la norme BCP 47 (comme "en-US" pour l'anglais américain ou "tr" pour le turc). Si ce paramètre est omis, la locale de l'environnement sera utilisée par défaut.


//Exemple 1 : Conversion simple avec locale par défaut
let string = "HELLO WORLD";
console.log(string.toLocaleLowerCase()); // Affiche "hello world"


//Exemple 2 : Conversion avec la locale turque
let string1 = "HELLO I";
console.log(string1.toLocaleLowerCase("tr")); // Affiche "hello ı"


//Exemple 3 : Conversion avec plusieurs locales
//On peut fournir un tableau de locales. Si la première locale n'est pas supportée, JavaScript utilisera la suivante.
let string2 = "HELLO I";
console.log(string2.toLocaleLowerCase(["tr", "en-US"])); // Affiche "hello ı" (la locale turque est utilisée)


//Exemple 4 : Cas d'une locale non supportée
let string3 = "HELLO WORLD";
console.log(string3.toLocaleLowerCase("xyz")); // Affiche "hello world" (locale par défaut utilisée)
