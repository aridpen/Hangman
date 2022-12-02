let letter = document.querySelector(".letter");

document.addEventListener("DOMContentLoaded", () => {
  //create at least 5 word options (array)
  const words = ["taco", "marshmallow", "turducken", "ramen", "lasagna"];
  let randomWord = Math.floor(Math.random() * words.length); //random word choosen at random from the listed array of words
  // console.log(randomWord);

  for (let i = 0; i < 26; i++) {
    const letterBoxes = document.createElement("div");
    letterBoxes.classList.add("letter");
    letter.append(letterBoxes);
  }

  //   generateGrid();
});
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
