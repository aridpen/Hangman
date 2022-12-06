//Dom selcectores
const letterContainer = document.querySelector(".letter-container");
const textAnnouncer = document.querySelector(".text-announcer");
const playAgain = document.querySelector(".play-again");
const alphabet = "abcdefghijklmnopqrstuvwxyz".split("");
const wrongAnswer = document.querySelector(".wrong-answer");
const rightWord = document.querySelector(".answer-letter");
let wrongGuessCount = 0;
let counter = 0;
//create at least 5 word options (array)
const words = ["taco", "ramen", "chipotle"];

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
  // console.log(span.classList.contains('hidden'))
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
  //adding event listener to each letter
  letter.addEventListener("click", (e) => {
    const spans = document.querySelectorAll("span");
    let letter = e.target.textContent; //set letter to the text content of letter clicked(event.target)
    let letterIndex = word.indexOf(letter); //set letterIndex to the index postion of clicked letter

    if (letterIndex !== -1) {
      //The indexOf() method returns the first index at which a given element can be found in the array, or -1 if it is not present.
      spans[letterIndex].classList.remove("hidden"); //remove correct letter from hidden class so that it shows on the line.
      removeDOMElement(e);
      textAnnouncer.textContent = `Letter ${letter} is Correct!! Choose Another Letter.`;
      counter++;
      checkForWin();
    } else {
      removeDOMElement(e);
      textAnnouncer.textContent = `Oh NO! ${letter} is NOT correct!! Choose Another Letter.`;
      wrongGuessCount++;
      switch (wrongGuessCount) {
        case 1:
          document.getElementById("1").classList.remove("hidden");
          wrongAnswer.textContent = `Wrong Answers: 1 of 6`;
          break;
        case 2:
          document.getElementById("4").classList.remove("hidden");
          wrongAnswer.textContent = `Wrong Answers: 2 of 6`;

          break;
        case 3:
          document.getElementById("6").classList.remove("hidden");
          wrongAnswer.textContent = `Wrong Answers: 3 of 6`;

          break;
        case 4:
          document.getElementById("3").classList.remove("hidden");
          wrongAnswer.textContent = `Wrong Answers: 4 of 6`;

          break;
        case 5:
          document.getElementById("2").classList.remove("hidden");
          wrongAnswer.textContent = `Wrong Answers: 5 of 6`;

          break;
        case 6:
          document.getElementById("5").classList.remove("hidden");
          wrongAnswer.textContent = `Wrong Answers: 6 of 6`;
          textAnnouncer.textContent = `GAME OVER!! Play Again`;
      }
    }
  });
});
function checkForWin() {
  if (word.length === counter) {
    textAnnouncer.textContent = `you win!`;
  }
}
function gameReset() {
  playAgain.addEventListener("click", function () {
    counter = 0;
    wrongGuessCount = 0;
  });
}
gameReset();

// console.log(word);
// document.querySelector(".guess-container").classList.contains("hidden"));
// console.log(`you win!`
//MVP GOALS
//if array contains the textContent of the clicked letter, toggle hidden off
//when correct letter is clicked, letter will populate on underscores//itterate over a word
// create play area with underscores
// chose a random word each game
// user guesses letter
// remove wrong letter
// populate correct letter in play area
// build hangman with 6 wrong letters
// print when player wins
// print when player loses
// restart game
