// Tout ce que nous mangeons, c'est de l'eau et de la matière sèche.

// John a acheté des pommes de terre: leur poids est de 100 kilogrammes. Les pommes de terre contiennent de l'eau et de la matière sèche.

// La teneur en eau est de 99 pour cent du poids total. 
// Il pense qu'ils sont trop humides et les met dans un four - à basse température - pour qu'ils perdent de l'eau.

// À la sortie, la teneur en eau n'est que de 98%.

// Quel est le poids total en kilogrammes (teneur en eau plus matière sèche) sortant du four?

// Il trouve 50 kilos et il pense avoir commis une erreur: "Tant de poids perdu pour un si petit changement de teneur en eau!"

// Pouvez vous l'aider?

// Fonction d'écriture potatoesavec

// paramètre int p0- pourcentage initial d'eau-
// paramètre int w0- poids initial -
// paramètre int p1- pourcentage final d'eau -
// potatoesdevrait renvoyer le poids final sortant du four w1tronqué comme un int.

const potatoes = (p0, w0, p1) => {
    return Math.floor(w0 * (100 - p0) / (100 - p1))
}

console.log(potatoes(99,100,98)) // 50
console.log(potatoes(80,127,80)) // 114
console.log(potatoes(93,129,91)) // 100