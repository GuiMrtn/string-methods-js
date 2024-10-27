// la méthode fromCodePoint() est une méthode statique de l'objet String qui permet de créer une chaîne de caractères à partir d'un ou plusieurs points de code Unicode. Contrairement à String.fromCharCode(), cette méthode peut gérer des points de code Unicode situés au-delà de la plage BMP (Basic Multilingual Plane), ce qui permet de représenter des caractères spéciaux comme des emoji ou des symboles rares. La syntaxe est celle-ci : str.fromCodePoint(num1, num2..., numN).

//num1, num2, ..., numN : Une ou plusieurs valeurs numériques représentant des points de code Unicode. Ces valeurs peuvent être des entiers allant de 0 à 0x10FFFF (1 114 111 en décimal).

//Support étendu des caractères Unicode : Contrairement à String.fromCharCode(), qui est limité à des points de code dans la plage de 0 à 65535, String.fromCodePoint() peut gérer des points de code plus grands. Cela inclut les caractères qui nécessitent des paires de substitution (surrogate pairs), comme certains emoji ou caractères d'écriture moins courants.

//Méthode statique : Comme fromCharCode(), fromCodePoint() est une méthode statique, appelée directement sur l'objet String, et non sur une instance de chaîne de caractères.



//1. Créer un caractère à partir d'un point de code
const char = String.fromCodePoint(9731); // ❃
console.log(char); // Affiche "❃"



//2. Créer une chaîne à partir de plusieurs points de code
const smiley = String.fromCodePoint(128512); // 😄 (U+1F600)
console.log(smiley); // Affiche "😄"



//3. Créer une chaîne avec des points de code au-delà de la plage BMP
const emoji = String.fromCodePoint(0x1F680, 0x1F4A9); // 🚀💩
console.log(emoji); // Affiche "🚀💩"

