// La méthode fromCharCode() est une fonction statique de l'objet String qui permet de créer une chaîne de caractères à partir d'une séquence de valeurs Unicode (codes de caractères). La syntaxe est celle-ci : str.fromCharCode(num1, num2..., numN).

//num1, num2, ..., numN : une ou plusieurs valeurs numériques représentant les codes de caractères Unicode (valeurs entières comprises entre 0 et 65535).

// Fonction statique : fromCharCode est une méthode statique, ce qui signifie qu'elle est appelée directement sur l'objet String et non sur une instance de chaîne de caractères.

// Conversion des codes en caractères : Chaque numéro fourni en argument est interprété comme un code de caractère Unicode (UTF-16). La méthode retourne une chaîne composée des caractères correspondants à ces codes.

//Limitation : String.fromCharCode() ne peut gérer que les codes de caractères compris dans la plage UTF-16 de 0 à 65535 (0x0000 à 0xFFFF). Pour les caractères dont les codes sont au-delà de cette plage (par exemple, certains emoji ou caractères spéciaux), il est préférable d'utiliser String.fromCodePoint(), introduit avec ECMAScript 2015 (ES6).



//1. Création d'une chaîne simple
const charA = String.fromCharCode(65); // "A"
const charB = String.fromCharCode(66); // "B"
const charC = String.fromCharCode(67); // "C"

console.log(charA + charB + charC); // Affiche "ABC"



//2. Création d'une chaîne à partir de plusieurs codes
const greeting = String.fromCharCode(72, 101, 108, 108, 111, 32, 87, 111, 114, 108, 100, 33);
console.log(greeting); // Affiche "Hello World!"



//3. Utilisation avec des codes spéciaux
const smiley = String.fromCharCode(9786);
console.log(smiley); // Affiche "☺"