// la méthode padEnd() permet de compléter une chaîne de caractères avec un autre ensemble de caractères jusqu'à ce qu'elle atteigne une longueur spécifiée. Ce remplissage se fait à la fin de la chaîne. C'est l'inverse de la méthode padStart(), qui ajoute des caractères au début. La syntaxe est la suivante : string.padEnd(longueurCible, chaineRemplissage). Si nous ne spécifions pas de chaîne de remplissage, des espaces seront utilisés par défaut. Si la chaîne d'origine est déjà plus longue ou égale à la longueur cible, padEnd() ne fait rien et renvoie simplement la chaîne d'origine. Si la chaîne de remplissage est plus longue que ce qui est nécessaire, elle sera tronquée pour s'ajuster à la longueur cible.

//longueurCible : la longueur totale que la chaîne doit atteindre après le remplissage.
// chaineRemplissage (optionnel) : la chaîne utilisée pour compléter la chaîne d'origine. Si elle n'est pas spécifiée, des espaces seront utilisés par défaut.



// Exemple de base
// Dans cet exemple, la chaîne "Bonjour" est complétée avec des points d'exclamation ("!") à la fin pour atteindre une longueur de 10, donnant "Bonjour!!!".
let text = "Bonjour";
let result = text.padEnd(10, "!");
console.log(result); // Affiche "Bonjour!!!"



// Remplissage par défaut avec des espaces 
let text1 = "Salut";
let result1 = text1.padEnd(10);
console.log(result1); // Affiche "Salut     " (5 espaces ajoutés à la fin)


//Si la chaîne est déjà plus longue
let string = "Bonjour tout le monde";
let result2 = string.padEnd(10);
console.log(result2); // Affiche "Bonjour tout le monde" (rien n'est ajouté car la chaîne est déjà plus longue)



// Chaîne de remplissage plus longue que nécessaire
let string2 = "42";
let result3 = string2.padEnd(6, "abc");
console.log(result3); // Affiche "42abca" (la chaîne de remplissage "abc" est tronquée)


// Remplissage avec un seul caractère : Un cas courant d'utilisation de padEnd() est d'ajouter un caractère unique (comme un point, un espace, etc.) pour rendre la chaîne plus longue
let str = "Nom";
let result4 = str.padEnd(10, ".");
console.log(result4); // Affiche "Nom......."

