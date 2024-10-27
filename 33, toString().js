// La méthode String.prototype.toString() en JavaScript est utilisée pour retourner une représentation sous forme de chaîne de caractères de l'objet String. En général, cette méthode est implicitement appelée lorsqu'une opération de chaîne de caractères est effectuée sur un objet de type String, mais elle peut également être appelée explicitement.

//La méthode toString() retourne une représentation textuelle de l'objet String. Elle est très similaire à la méthode valueOf(), qui renvoie également la chaîne primitive sous-jacente de l'objet String.

//Elle est souvent utilisée de manière implicite lorsque vous manipulez des objets String, car JavaScript convertit automatiquement les objets en chaînes lors des opérations qui en nécessitent une (comme la concaténation ou l'affichage dans la console).


//Exemple 1 : Appel explicite de toString()
let string = new String("Hello World");
console.log(string.toString()); // Affiche "Hello World"


//Exemple 2 : Conversion implicite avec des opérations sur des chaînes
//Dans de nombreuses situations, toString() est appelé de manière implicite lorsque vous travaillez avec des objets String.
let string1 = new String("Hello");
console.log(string1 + " World"); // Affiche "Hello World"


//Exemple 3 : Comparaison avec la chaîne primitive
let strObj = new String("Hello");
let strPrimitive = "Hello";

console.log(strObj.toString() === strPrimitive); // Affiche "true"


//Exemple 4 : Différence avec un objet
//L'objet String peut avoir des propriétés supplémentaires, mais lorsque toString() est appelé, seule la chaîne sous-jacente est renvoyée.
let string2 = new String("Hello");
string2.customProperty = "This is a custom property";

console.log(string2); // Affiche l'objet avec la propriété String {'Hello', customProperty: 'This is a custom property'}
console.log(string2.toString()); // Affiche uniquement "Hello"


//Exemple 5 : Chaînes primitives
// Si on appelle toString() sur une chaîne primitive (non un objet String), elle renverra simplement cette chaîne.
let string3 = "Hello";
console.log(string3.toString()); // Affiche "Hello"
