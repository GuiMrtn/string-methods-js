// La méthode String.prototype.valueOf() en JavaScript est utilisée pour renvoyer la valeur primitive d'un objet String. En pratique, la méthode retourne la chaîne de caractères sous-jacente représentée par l'objet String. Comme toString(), cette méthode est souvent appelée de manière implicite lorsqu'on effectue des opérations sur des objets String, mais elle peut aussi être appelée explicitement.


//Exemple 1 : Appel explicite de valueOf()
let strObj = new String("Hello World");
console.log(strObj.valueOf()); // Affiche "Hello World"


// Exemple 2 : Conversion implicite
// JavaScript appelle valueOf() de manière implicite lorsqu'on tavaille avec des objets String dans des contextes où une chaîne primitive est attendue.
let strObj1 = new String("Hello");
console.log(strObj1 + " World"); // Affiche "Hello World" (valueOf() est appelé implicitement)


// Exemple 3 : Comparaison avec une chaîne primitive
let strObj2 = new String("Hello");
let strPrimitive = "Hello";

console.log(strObj2.valueOf() === strPrimitive); // Affiche "true"


//Exemple 4 : Différence avec l'objet complet
// Quand on affiche un objet String directement, il inclut des propriétés supplémentaires. valueOf() ne renvoie que la chaîne de caractères sous-jacente.
let strObj3 = new String("Hello");
strObj3.customProperty = "Custom";

console.log(strObj3); // Affiche l'objet complet avec la propriété String {'Hello', customProperty: 'Custom'}
console.log(strObj3.valueOf()); // Affiche uniquement "Hello" (la chaîne primitive)


//Exemple 5 : Chaînes primitives
//Lorsqu'on appelle valueOf() sur une chaîne primitive (plutôt qu'un objet String), elle retourne simplement cette chaîne, car il n'y a pas de différence entre la chaîne primitive et sa valeur.
let string = "Hello";
console.log(string.valueOf()); // Affiche "Hello"
