/*
CIT 281 Project 1
Name: Elliot James
*/

// Returns a random number between min (inclusive) and max (exclusive)
function getRandomInteger(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

const letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z",]
let length = getRandomInteger(5, 26);
// let length = 0;
let resultLetters = [];

for(let i = 0; i<=length; i++) {
  let newLetter = getRandomInteger(0, 26);
  resultLetters.push(letters[newLetter]);
}

console.log(`${length+1} lowercase ${length === 0 ? "letter" : "letters"}: ${resultLetters.join("")}`);
//just realized that because length can never be below 5, the conditional switching "letters" for "letter" above is pointless
//i'm keeping it though.