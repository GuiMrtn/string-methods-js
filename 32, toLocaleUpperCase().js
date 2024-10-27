// la méthode toLocaleUpperCase() est utilisée pour convertir une chaîne de caractères en majuscules, mais en tenant compte des règles de casse spécifiques à une locale (langue ou région). Cela permet d'appliquer des règles linguistiques spécifiques lors de la conversion, ce qui peut être nécessaire pour certaines langues, comme le turc, qui a des règles particulières concernant la conversion des majuscules en minuscules. La syntaxe est la suivante : str.toLocaleUpperCase([locales]).

//locales (facultatif) : Une chaîne ou un tableau de chaînes qui représentent des codes de langues conformes à la norme BCP 47 (comme "en-US" pour l'anglais américain ou "tr" pour le turc). Si ce paramètre est omis, la locale de l'environnement sera utilisée par défaut.


// Exemple 1 : Conversion simple avec la locale par défaut
let string = "hello world";
console.log(string.toLocaleUpperCase()); // Affiche "HELLO WORLD"


//Exemple 2 : Conversion avec la locale turque
// En turc, la conversion de la lettre i minuscule devient İ (I majuscule avec un point au-dessus).
let string1 = "istanbul";
console.log(string1.toLocaleUpperCase("tr")); // Affiche "İSTANBUL"


//Exemple 3 : Conversion avec plusieurs locales
//Si on passe un tableau de locales, JavaScript utilisera la première locale supportée.
let string2 = "istanbul";
console.log(string2.toLocaleUpperCase(["tr", "en-US"])); // Affiche "İSTANBUL" (la locale turque est utilisée)


//Exemple 4 : Locale non supportée
let string3 = "hello world";
console.log(string3.toLocaleUpperCase("xyz")); // Affiche "HELLO WORLD" (locale par défaut utilisée)
