# Hangman

## Welcome!

Hanging around with nothing to do? Take a jab a guessing the correct word below! But be careful! Your chances are limited. Guess in under 6 tries to avoid a Hangman!

## How To Play

##### Based on the category of FOOD, guess the hidden word by clicking on the box letters below. Watch the word reveal with each correct guess. Too many incorrect guesses will result in a Hangman.

![hangman sketch.]<img width="475" alt="hangman" src="https://user-images.githubusercontent.com/115594817/204955713-218bf1db-d239-478d-bec1-5e5af9d8c205.png">

## MVP

- Using the DOM, CSS, HTML and Vanilla Javascript.
- Code a playing area with each letter of the alphabet, and an empty gallow.
- Show the amount of letters to guess.
- Remove each box letter as it is clicked
- Populate the correct answers.
- With each wrong selection, build the hangman stick figure on the gallow.

## Stretch Goals

- Make a gameplay option that allows for two players. On player can submit their word, and the other player guesses.
- Add a timer.
- Allow the player to select their own category.
- Fetch random words online that the player can guess.

## Post-Project Reflection

- For my project, I created a Hangman style game using JavaScript, HTML and CSS.
- I enjoyed the whole process of creating a wireframe and bringing the vision to life a little at a time.
- What I found difficult at times, was finding the most necessary syntax to use for certain issues. A lot of times I knew exactly what I needed to do, but didn't always know the best way to approach in a way that the system would understand.
- What worked well for me is realizing that breaking the task into small chunks and building a little at a time is works best for me.
- What also worked well, was just asking questions. I learned a lot from my peers/debug/office hours during this project, and gained knowledge that not only got me to project completion, but has allowed me to actually help my peers. Full circle in small scale.
- Things I would do next time would be to make better use of functions. Since I have only recently begun to feel comfortable with functions, I tried to go a route of less function for this program, only to realize at the the end that they were very necssary, helpful, and not as complicated as I thought they would be.
- Unsolved problems I had with this project is that when a letter is clicked, the letterIndex for loop would only account for the first matching letter it encounterd. Words like 'pizza' (maybe while loop needed?) the letter z would only populate once. I used words that did not have duplicate letters to avoid this, while I try to figure out a solution.

* Link to project:
  https://aridpen.github.io/Hangman/

##Sources
-Debug Chat
-Office Hours
-index of method by Jay Womack

-letters.forEach((letter) => {
-letter.addEventListener('click', (e) => {
-let letter = e.target.textContent
-let letterIndex = word.indexOf(letter)
-if (letterIndex !== -1) {
-spans[letterIndex].classList.remove('hidden')
-removeDOMElement(e)
-textAnnouncer.textContent = 'You got it!'
-} else {
-removeDOMElement(e)
-textAnnouncer.textContent = 'Try again!'
-}
-})
-})
