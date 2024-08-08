const prompt = require('prompt-sync')()
//Statement(string)
//Set the attempts to 0 
//Make an array of letters they user has
let statement = "lil tjay is the best rapper"
let attempts = 0
let alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
// The way the statement should come out
let userGuess = ["_", "_", "_", "  ", "_", "_", "_", "_", " ", "_", "_", " ", "_", "_", "_", " ", "_", "_", "_", "_", " ", "_", "_", "_", "_", "_", "_"]

//Make a function for user guess to make qoutes and commas to go away. 
function printUserGuess() {
  let string = ""
  for (let i = 0; i < userGuess.length; i++) {
    string += userGuess[i]
  }
  console.log(string)
}
//
const name = prompt("What is your name?")
// Objects stored for the user. 
let userInfo = {
  name: name,
  score: 0
}
//Directions for the user
console.log("Welcome to hangman! The objective of this game is to guess letters to be able to know what the statement is.")
let choice = prompt("Do you want to play?", + name)

// function if the user gues it write and or wrong if the user gets it teh code will say correct if the user gets it wrong the code will say incorrect to the user. 
function guessALetter() {

  let letter = prompt("Guess a letter. ")
  if (statement.includes(letter)) {
    console.log("correct")
    for (let i = 0; i < statement.length; i++) {
      if (letter == statement[i]) {
        userGuess[i] = letter
        userInfo.score++
      }
    }
    printUserGuess() 
  } else {
    console.log("wrong")
    userInfo.score--
  }
}

while (choice == "yes") {
  guessALetter()
 
   

  
}

// If user doesn't  want to play 
if (choice !== "yes") {
  console.log("okay, have a good day")
}
// End of the game
if (statement== userGuess){
}
  console.log("thank you for playing, you got it all right")
console.log(score)
console.log("attempts", attempts)