//Dom selcectores
const letterContainer = document.querySelector(".letter-container");
const textAnnouncer = document.querySelector(".text-announcer");
const playAgain = document.querySelector(".play-again");
const wrongAnswer = document.querySelector(".wrong-answer");
const rightWord = document.querySelector(".answer-letter");

const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split(""); //string method split turns word to an array of strings
let wrongGuessCount = 0; //wrongGuessCount > 6 will result in game loss
let counter = 0;
let words = ["TACO", "RAMEN", "CHIPOTLE", "OMLET", "ORANGE"]; //create at least 5 word options (array)
let randomWord = Math.floor(Math.random() * words.length); //random word choosen at random from the listed array of words
let word = words[randomWord].split(""); //string method split turns word to an array of strings "T","A","C","O"

//need span to allow letter textContent to work properly. otherwise whole div disapears on hidden.
//created span element thst has a textContent of character. span is added to hidden classlist
function wordSetter() {
  const guessContainer = document.querySelector(".guess-container");
  let child = guessContainer.lastElementChild;
  //while child is present in array, will remove whatever child
  while (child) {
    guessContainer.removeChild(child);
    child = guessContainer.lastElementChild;
  }
  //wordsetter sets the new word in guesscontainer/adds hidden class
  word.forEach((char) => {
    const letterContainer = document.createElement("div");
    const span = document.createElement("span");
    span.textContent = char;
    span.classList.add("hidden");
    letterContainer.classList.add("answer-letter");
    letterContainer.append(span);
    guessContainer.append(letterContainer);
  });
}
//resets the spans for new chosen word so that hidden class be assigned
wordSetter();
//letterContainer divs will not reload previously clicked letters on reset. alphabetsetter discards all leftover letters so that div can refresh with each new word
function alphabetSetter() {
  let child = letterContainer.lastElementChild;
  //while child is present in array, will remove whatever child.
  while (child) {
    letterContainer.removeChild(child);
    //lastElementChild is the span
    child = letterContainer.lastElementChild;
  }
  //forEach char of the alphabet a div is created, and added to the letter classlist. the textcontent is set to match the char
  alphabet.forEach((char) => {
    const letterBoxes = document.createElement("div");
    letterBoxes.classList.add("letter");
    letterBoxes.textContent = char;
    letterContainer.append(letterBoxes);
  });
}

alphabetSetter();
let letters = document.querySelectorAll(".letter");
function removeDOMElement(event) {
  event.target.remove();
}

function startGame() {
  letters.forEach((letter) => {
    //adding event listener to each letter
    letter.addEventListener("click", (e) => {
      const spans = document.querySelectorAll("span");
      let letter = e.target.textContent; //set letter to the text content of letter clicked(event.target) "TACO"
      let letterIndex = word.indexOf(letter); //set letterIndex to the index postion of clicked letter    "0,1,2,3"

      //wrong and right letter guessed logic
      if (letterIndex !== -1) {
        //if word is "t", "a", "c","o", it has an index of[0][1][2][3]. all other chars will be -1
        //The indexOf() method returns the first index at which a given element can be found in the array, or -1 if it is not present.
        spans[letterIndex].classList.remove("hidden"); //remove correct letter from hidden class so that it shows on the line.
        removeDOMElement(e); // will removeDOMElement of the boxes every click
        textAnnouncer.textContent = `Letter ${letter} is Correct!! Choose Another Letter.`;
        counter++;
        console.log(counter);
        checkForWin();
      } else {
        removeDOMElement(e);
        textAnnouncer.textContent = `Oh NO! ${letter} is NOT correct!! Choose Another Letter.`;
        wrongGuessCount++;
        //each wrong guess adds to the counter and fires a case in the switch statement up to 6 times. adding an image each wrong guess
        //image is shown by the class of hidden being removed with each wrong guess
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
}
startGame();
function checkForWin() {
  //if word counter of correct guess === the length of word, winning condition is met.
  if (word.length === counter) {
    textAnnouncer.textContent = `You Guessed It!!`;
  }
}
function resetGame() {
  wrongGuessCount = 0;
  counter = 0;
  randomWord = Math.floor(Math.random() * words.length);
  word = words[randomWord].split("");
  //reset all global variables
  //wrong answer reset to intial value
  wrongAnswer.textContent = `Category: Food`;
  //textannouncer reset to initial value
  textAnnouncer.textContent = `Click A Letter To Reveal The Hidden Word!`;
  //all images go back to hidden
  let images = document.querySelectorAll(".img");
  images.forEach((img) => {
    img.classList.add("hidden");
  });
  //resets the spans for new chosen word so that hidden class be assigned
  wordSetter();
  //display all buttons
  alphabetSetter();
  letters = document.querySelectorAll(".letter");
  randomWord = Math.floor(Math.random() * words.length);
  startGame();
}
playAgain.addEventListener("click", function () {
  resetGame();
});

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
