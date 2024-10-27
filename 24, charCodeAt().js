// La méthode charCodeAt() permet de renvoyer le code Unicode du caractère situé à un indice spécifique d'une chaîne de caractères. Cela permet de connaître la valeur numérique du caractère correspondant, souvent utilisée pour manipuler des caractères au niveau de leur représentation en code Unicode. La méthode renvoie un entier représentant la valeur Unicode (ou code UTF-16) du caractère situé à l'index spécifié. Par exemple, le caractère 'A' a le code Unicode 65, le caractère 'B' a le code 66, etc. La syntaxe est celle-ci : str.charCodeAt(index).

// index : C'est la position du caractère dans la chaîne pour lequel vous souhaitez obtenir le code Unicode. Cet indice commence à 0. Si l'index est hors limites, la méthode renvoie NaN.


//1. Obtenir le code Unicode d'un caractère
let string = "Bonjour";
let code = string.charCodeAt(0);
console.log(code);  // 66 (car 'B' a le code Unicode 66)


//2. Code pour plusieurs caractères
let string1 = "Hello";
for (let i = 0; i < string1.length; i++) {
  console.log(string1.charCodeAt(i));
}
// Output: 
// 72 ('H')
// 101 ('e')
// 108 ('l')
// 108 ('l')
// 111 ('o')


//3. Vérifier un caractère à un index spécifique
let string2 = "Hello";
console.log(string2.charCodeAt(10));  // Output: NaN


//4. Cas des caractères Unicode sur plusieurs octets.
//En JavaScript, les chaînes sont codées en UTF-16, et la méthode charCodeAt() renvoie le code sur 16 bits d'un caractère, ce qui signifie que pour les caractères Unicode qui utilisent plus de 16 bits (comme les émojis ou certains caractères asiatiques), charCodeAt() renverra une partie seulement du code. Dans ces cas-là, il est recommandé d'utiliser codePointAt() pour obtenir le code complet.
let string3 = "𠮷"; // Un caractère Unicode nécessitant plus de 16 bits
console.log(string3.charCodeAt(0));   // Output: 55362 (partie haute du caractère)
console.log(string3.charCodeAt(1));   // Output: 57271 (partie basse du caractère)
console.log(string3.codePointAt(0));  // Output: 134071 (le code complet du caractère)
