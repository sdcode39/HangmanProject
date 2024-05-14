//Load to VS Code and enter " node filename.cjs" into the terminal
//The game should run

const readline = require('readline-sync');

// Function to choose a random word from an array
function chooseRandomWord(words) {
    return words[Math.floor(Math.random() * words.length)];
}

// Function to display the hidden word with guessed letters revealed
function displayWord(word, guessedLetters) {
    let displayedWord = '';
    for (const char of word) {
        if (guessedLetters.includes(char)) {
            displayedWord += char;
        } else {
            displayedWord += '_';
        }
        displayedWord += ' ';
    }
    return displayedWord.trim();
}

// Function to check if the word has been completely guessed
function isWordGuessed(word, guessedLetters) {
    return word.split('').every(char => guessedLetters.includes(char));
}

// Array of words for the game
const words = ['hangman', 'javascript', 'programming', 'computer', 'internet', 'algorithm'];

console.log('Welcome to Hangman!');
let guessedLetters = [];
let attempts = 6;
let wordToGuess = chooseRandomWord(words);
let gameOver = false;

while (!gameOver) {
    console.log('\n' + displayWord(wordToGuess, guessedLetters));
    console.log(`Attempts left: ${attempts}`);
    const guess = readline.question('Guess a letter: ').toLowerCase();

    if (guessedLetters.includes(guess)) {
        console.log('You already guessed that letter. Try again.');
        continue;
    }

    guessedLetters.push(guess);

    if (wordToGuess.includes(guess)) {
        console.log('Good guess!');
        if (isWordGuessed(wordToGuess, guessedLetters)) {
            console.log(`Congratulations! You guessed the word "${wordToGuess}" correctly!`);
            gameOver = true;
        }
    } else {
        console.log('Wrong guess!');
        attempts--;
        if (attempts === 0) {
            console.log('Sorry, you ran out of attempts. The word was: ' + wordToGuess);
            gameOver = true;
        }
    }
}

console.log('Game over. Thanks for playing!');
