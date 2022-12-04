//Dom selcectores
let letterContainer = document.querySelector(".letter-container");
const playAgain = document.querySelector(".playAgain");
const correct = document.querySelector(".rightLetter");
const wrong = document.querySelector("wrongLetter");
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

//foreach letter (character) in word array create a div and append to guess-container
//need span to allow letter textContent to work properly. otherwise whole div disapears on hidden.
//created span element thst has a textContent of character. span is added to hidden classlist

word.forEach((char) => {
  const letterContainer = document.createElement("div");
  const span = document.createElement("span");
  span.textContent = char;
  span.classList.add("hidden");
  letterContainer.classList.add("answer-letter");
  const guessContainer = document.querySelector(".guess-container");
  letterContainer.append(span);
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
//when block is clicked, letter is removed from the screen
letters.forEach((letter) => {
  letter.addEventListener("click", (e) => {
    e.preventDefault();
    //If I click leter A, Check if letter is in the array
    //if letter is in array. Append to the div that has array is for
    word.forEach((letter) => {
      //for each letter in word..
      if (letter === e.target.textContent) {
        //if letter is === to the text content of the
        const spans = document.querySelectorAll("span");
        spans.forEach((span) => {
          if (span.textContent === e.target.textContent) {
            span.classList.remove("hidden");
          }
        });
        e.target.classList.remove("hidden");
      }
      // console.log(`${letter} is letter.`);
      // console.log(`${e.target.textContent} is target content.`);
    });

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
