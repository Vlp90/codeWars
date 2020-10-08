// Test 2 :
// Créer un programme qui permettra de déterminer si on peut obtenir l'entier 8 en
// additionnant deux éléments distincts du tableau.
// L'optimisation est le point intéressant du problème.
// [1, 1, 2, 3, 5, 6, 12, 13, 15, 15, 16, 18, 20, 27, 29]

const sumPairs = (array, value) => {
  let answer = [];

  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < i; j++) {
      if (array[i] + array[j] === value) {
        let result = [array[i], array[j]];
        answer.push(result);
      }
    }
  }
  //   return answer
  final = answer.join(" et ");
  return `L'entier ${value} peut être optenu en additionant les pairs suivantes : ${final}`;
};

console.log(
  sumPairs([1, 1, 2, 3, 5, 6, 12, 13, 15, 15, 16, 18, 20, 27, 29], 8)
);
