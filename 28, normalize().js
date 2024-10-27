// La méthode normalize() est utilisée pour normaliser une chaîne de caractères selon une forme Unicode spécifique. La normalisation Unicode consiste à transformer une chaîne en une forme standard pour s'assurer que deux chaînes qui sont visuellement équivalentes mais codées différemment aient la même représentation binaire. En Unicode, certains caractères peuvent être représentés de plusieurs façons. Par exemple, la lettre "é" peut être codée soit sous forme de caractère unique (é), soit sous forme de deux caractères (e + accent aigu). Ces formes peuvent sembler identiques visuellement mais sont différentes sur le plan binaire. normalize() permet de standardiser ces différentes représentations. La syntaxe est celle-ci : str.normalize([form]).

//str : La chaîne de caractères sur laquelle la méthode est appelée.

//form (optionnel) : Une chaîne qui spécifie la forme de normalisation à utiliser. Elle peut prendre les valeurs suivantes :
//NFC (Normal Form Canonical Composition) : Les caractères sont combinés de manière canonique. Par exemple, e + accent aigu devient é sous forme unique.
//NFD (Normal Form Canonical Decomposition) : Les caractères sont décomposés en leurs éléments constitutifs. Par exemple, é devient e + accent aigu.
//NFKC (Normalization Form Compatibility Composition) : Similaire à NFC mais prend également en compte les caractères de compatibilité Unicode qui sont visuellement identiques mais différents sur le plan sémantique. Par exemple, certains caractères de style (comme les chiffres en exposant) sont convertis en caractères normaux.
//NFKD (Normalization Form Compatibility Decomposition) : Similaire à NFD, mais prend également en compte les caractères de compatibilité.



// Exemple 1 : Différence entre NFC et NFD
let str1 = "é"; // Caractère unique 'é'
let str2 = "e\u0301"; // 'e' suivi d'un accent aigu (U+0301)

// Sans normalisation, ces chaînes sont différentes
console.log(str1 === str2); // Affiche "false"

// Avec NFC, elles deviennent identiques
console.log(str1.normalize("NFC") === str2.normalize("NFC")); // Affiche "true"

// Avec NFD, les deux seront décomposées
console.log(str1.normalize("NFD") === str2.normalize("NFD")); // Affiche "true"



//Exemple 2 : Utilisation de NFKC et NFKD
let str3 = "\u212B"; // Symbole Å angström
let str4 = "A\u030A"; // A suivi d'un anneau en exposant

// Sans normalisation, ces chaînes sont différentes
console.log(str3 === str4); // Affiche "false"

// Avec NFC ou NFD, elles restent différentes
console.log(str3.normalize("NFC") === str4.normalize("NFC")); // Affiche "false"
console.log(str3.normalize("NFD") === str4.normalize("NFD")); // Affiche "false"

// Avec NFKC ou NFKD, elles deviennent équivalentes
console.log(str3.normalize("NFKC") === str4.normalize("NFKC")); // Affiche "true"
console.log(str3.normalize("NFKD") === str4.normalize("NFKD")); // Affiche "true"



//Exemple 3 : Normalisation pour comparaison
let s1 = 'e\u0301';  // 'e' + accent aigu
let s2 = 'é';        // 'é' sous forme précomposée

// Sans normalisation, ces deux chaînes sont différentes
console.log(s1 === s2); // false

// Après normalisation en NFC, elles sont identiques
console.log(s1.normalize() === s2.normalize()); // true
