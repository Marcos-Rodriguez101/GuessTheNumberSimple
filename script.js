// Generate a random number between 1 and 100
const secretNumber = Math.floor(Math.random() * 100) + 1;

// Get DOM elements
const guessInput = document.getElementById('guessInput');
const message = document.getElementById('message');

// Function to check the user's guess
function checkGuess() {
    const userGuess = parseInt(guessInput.value);

    if (isNaN(userGuess) || userGuess < 1 || userGuess > 100) {
        message.textContent = 'Please enter a valid number between 1 and 100.';
    } else {
        if (userGuess === secretNumber) {
            message.textContent = 'Congratulations! You guessed the correct number!';
        } else {
            message.textContent = `Wrong guess. The correct number is ${secretNumber > userGuess ? 'higher' : 'lower'}. Try again!`;
        }
    }
}
