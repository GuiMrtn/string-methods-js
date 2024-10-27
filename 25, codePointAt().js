// la méthode codePointAt() renvoie le point de code Unicode complet d'un caractère à une position spécifique dans une chaîne. Cela permet d'obtenir le code Unicode même pour les caractères qui nécessitent plus de 16 bits (comme certains caractères spéciaux et les émojis), contrairement à charCodeAt() qui ne renvoie que des valeurs sur 16 bits. Si on passe un index qui est en dehors de la longueur de la chaîne, la méthode retournera undefined. La syntaxe est celle-ci : str.codePointAt(index).

//index : La position du caractère dans la chaîne pour lequel on souhaite obtenir le point de code Unicode. Cet index commence à 0.



// 1. Obtenir le code d'un caractère classique
// Pour les caractères simples (ceux codés sur 16 bits, comme les lettres de l'alphabet), codePointAt() fonctionne de manière similaire à charCodeAt().
let string = "Bonjour";
let code = string.codePointAt(0);
console.log(code);  //66 ('B' a le point de code 66)



//2. Obtenir le point de code d'un émoji
// Les émojis et certains caractères spéciaux Unicode nécessitent plus de 16 bits. codePointAt() permet de récupérer correctement leur point de code complet.
let string1 = "🐱";  // Emoji du chat
let code1 = string1.codePointAt(0);
console.log(code1);  // 128049



//3. Obtenir plusieurs points de code
let string2 = "Hello 🐱";
for (let i = 0; i < string2.length; i++) {
  console.log(string2.codePointAt(i));
}
// Output:
// 72 ('H')
// 101 ('e')
// 108 ('l')
// 108 ('l')
// 111 ('o')
// 32 (espace)
// 128049 ('🐱' point de code complet)



//4. Gestion des index hors limites
let string3 = "Hello";
console.log(string3.codePointAt(10));  // Output: undefined


