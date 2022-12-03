//Dom selcectores

let letterContainer = document.querySelector(".letter-container");
let gallow = document.querySelector(".gallow-container");
let startButton = document.querySelector(".startBtn");
let playAgain = document.querySelector(".playAgain");
let correct = document.querySelector(".rightLetter");
let wrong = document.querySelector("wrongLetter");
let alphabet = "abcdefghijklmnopqrstuvwxyz".split("");

//create at least 5 word options (array)
const words = [
  "taco",
  "marshmallow",
  "turducken",
  "ramen",
  "lasagna",
  "chipotle",
];

//random word choosen at random from the listed array of words
let randomWord = Math.floor(Math.random() * words.length);
// console.log(randomWord);

//set up an empty array. for each word, make an empty space based off the length of randomWord each random word.
let word = words[5].split(""); //string method split turns word to an array of strings
//foreach letter in word array, create a div and append to guess-container

word.forEach((char) => {
  const letterContainer = document.createElement("div");
  letterContainer.textContent = char;
  letterContainer.classList.add("answer-letter", "hidden");
  const guessContainer = document.querySelector(".guess-container");
  guessContainer.append(letterContainer);
});

for (let i = 0; i < alphabet.length; i++) {
  const letterBoxes = document.createElement("div");
  letterBoxes.classList.add("letter");
  letterBoxes.textContent = alphabet[i];
  letterContainer.append(letterBoxes);
}
//if array contains the textContent of the clicked letter, toggle hidden off

// alphabet.forEach(char => {
//     const letterBoxes = document.createElement("div");
//     letterBoxes.classList.add("letter");
//     letterBoxes.textContent = char;
//     letterContainer.append(letterBoxes);
// })
//letter[i]

// function hideUI() {
//   console.log("hideUI");
// }
let letters = document.querySelectorAll(".letter");

// console.log(letters);
function removeDOMElement(event) {
  event.target.remove();
}

letters.forEach((letter) => {
  letter.addEventListener("click", (e) => {
    e.preventDefault();
    removeDOMElement(e);

    //when block is clicked, letter is removed from the screen //classlist.remove

    //when correct letter is clicked, letter will populate on underscores//itterate over a word
    //check for win
    //
    // hideUI();
  });
});
//   generateGrid();
// });
// create play area with underscores
// start game
// chose a random word each game
// user guesses letter
// remove wrong letter
// populate correct letter in play area
// build hangman with 6 wrong letters
// print when player wins
// print when player loses
// restart game
