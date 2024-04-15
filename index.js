import prompt from "readline-sync";
import wordBank from "./word-bank.js";

let wins = 0; 

let losses = 0; 

 const getRandomWord = () => { return wordBank[Math.floor(Math.random() * wordBank.length)]; }; 
 
 const playGame = () => { const word = getRandomWord().toLowerCase();

 let guessedWord = "_".repeat(word.length); 

 let guessedLetters = []; 

 let incorrectGuesses = 0; 

 const displayWord = () => { let display = ""; 
        for (let i = 0; i < word.length; i++) { 
            
            if (guessedLetters.includes(word[i])) { display += word[i]; } 
        
            else { display += "_"; } } return display; }; 

 const promptGuess = () => { console.log("\nGuess the word: " + displayWord()); 

 console.log("Guessed letters: " + guessedLetters.join(', ')); 

 console.log("Incorrect guesses remaining: " + (6 - incorrectGuesses)); 

 rl.question("Enter a letter (or press Ctrl+C to quit): ", (input) => { input = input.toLowerCase(); 
        
    if (input.length !== 1 || ![a-z].test(input)) { console.log("Please enter a single letter."); 

 promptGuess(); return; } 
    
    if (guessedLetters.includes(input)) { console.log("You've already guessed that letter."); 

 promptGuess(); return; } guessedLetters.push(input); 
         
    if (word.includes(input)) { console.log("Correct guess!"); 
         
        if (word === displayWord()) { console.log("Congratulations! You guessed the word: " + word); wins++; playAgain(); } 
     
        else { promptGuess(); } } 
     
        else { console.log("Incorrect guess."); incorrectGuesses++; 

      if (incorrectGuesses === 6) { console.log("Game over. The word was: " + word); losses++; playAgain(); }                     
      
      else { promptGuess(); } } }); }; 

 promptGuess(); }; const playAgain = () => { rl.question("\nWould you like to play again? (yes/no): ", (input) => { 
         
    if (input.toLowerCase() === 'yes') { playGame(); } 
         
         else if (input.toLowerCase() === 'no') { console.log("Wins: " + wins); console.log("Losses: " + losses); rl.close(); } 
        
         else { console.log("Please enter 'yes' or 'no'."); playAgain(); } }); }; 

 console.log("Welcome to Hangman!"); 
 
 let playAnotherGame = true;
 while (playAnotherGame) {
    playGame();
    rl.pause();

 }