//Dom selcectores
let letterContainer = document.querySelector(".letter-container");
let gallow = document.querySelector(".gallow-container");
const startButton = document.getElementById("#startBtn");
const playAgain = document.querySelector(".playAgain");
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

let randomWord = Math.floor(Math.random() * words.length); //random word choosen at random from the listed array of words
let word = words[randomWord].split(""); //string method split turns word to an array of strings "T","A","C","O"

word.forEach((char) => {
  //foreach letter (character) in word array create a div and append to guess-container
  const letterContainer = document.createElement("div");
  letterContainer.textContent = char;
  letterContainer.classList.add("answer-letter");
  const guessContainer = document.querySelector(".guess-container");
  guessContainer.append(letterContainer);
});

alphabet.forEach((char) => {
  const letterBoxes = document.createElement("div");
  letterBoxes.classList.add("letter");
  letterBoxes.textContent = char;
  letterContainer.append(letterBoxes);
});

let letters = document.querySelectorAll(".letter");

function removeDOMElement(event) {
  event.target.remove();
}

letters.forEach((letter) => {
  //when block is clicked, letter is removed from the screen
  letter.addEventListener("click", (e) => {
    e.preventDefault();
    removeDOMElement(e);
  });
});

//if array contains the textContent of the clicked letter, toggle hidden off
//when correct letter is clicked, letter will populate on underscores//itterate over a word
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
