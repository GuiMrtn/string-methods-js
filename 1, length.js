// La méthode String.length permet de connaître la longueur d'une chaîne de caractères (en comptant les espaces).

let str = "Hello World!";
console.log(str.length); //Affiche 12

//On peut aussi afficher une seule lettre d'une chaîne de caractères grâce à son index.
console.log(str[0]); //Affiche 'H'
console.log(str[8]); //Affiche 'r'
console.log(str[50]); //Affiche undefined

//Pour afficher la dernière lettre d'une chaîne de caractères, on utilise l'index -1.
console.log(str[str.length - 1]) //Affiche '!'