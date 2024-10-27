// la méthode charAt() permet de récupérer un caractère situé à une position spécifique dans une chaîne de caractères. Si on passe un index qui dépasse la longueur de la chaîne ou qui est négatif, la méthode retournera une chaîne vide. 

let str = "Hello World!";
console.log(str.charAt(3))//Affiche 'l
console.log(str.charAt(100))//Affiche ''

//On pourrait également récupérer le caractère d'une chaîne via les []. Le problème est que si l'index est hors-limite, l'opérateur [] retournera undefined.
console.log(str[3]) //Affiche 'l'
console.log(str[100]) //Affiche undefined

