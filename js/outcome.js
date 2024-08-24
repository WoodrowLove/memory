// outcome.js

import { initializeCards } from './card.js';

let totalPairs;
let matchedPairs = 0;
let turns = 0;
let revealCount =0;
let  shuffleCount = 0;

export function resetGame() {
    matchedPairs = 0;
    turns = 0;
    revealCount = 0;
    shuffleCount = 0;

    const gameBoard = document.getElementById('game-board');
    gameBoard.innerHTML = '';
    initializeCards(gameBoard);

    const turnCounter = 
    document.getElementById('turn-counter').textContent = `Turns: ${turns}`;
    hideOutcomeMessage(); // Hide the outcome message on game reset
}


export function updateGameState(isMatch) {
    turns++;
    const turnCounter =
    document.getElementById('turn-counter');
    if (turnCounter) {
        turnCounter.textContent = `Turns: ${turns}`;
    }

    if (isMatch) {
        matchedPairs++;
        if (matchedPairs === 1) {
            endGame(true);
        }
    }

    if (turns === 2 && !isMatch) {
        endGame(false);
    }
}

function endGame(didWin) {
    if (didWin) {

showOutcomeMessage('Congratulations!', 'You found the matching pair!');
    } else { showOutcomeMessage('You lost!', 'Better luck next time! Try again.');
    }
    revealCount = 0;
    shuffleCount = 0;
}    

export function revealAndShuffle()
{
    if (revealCount < 2) {
        revealCount++;
        const cards =
        document.querySelectorAll('.card img');

        cards.forEach(card => card.style.display = 'block');

        setTimeout(() => {
            cards.forEach(card => card.style.display ='none');
        }, 2000);

} else {
    alert('You can only press "Reveal" two times per round.');
}
}

export function shuffleCards() {
    if (shuffleCount < 2) {
        shuffleCount++;
    } else {
        alert('You can only press "Shuffle" two times per round.');
    }
}

// Additional functions to handle the outcome message display

function showOutcomeMessage(title, message) {
    const outcomeMessage = document.getElementById('outcome-message');
    outcomeMessage.querySelector('h2').textContent = title;
    outcomeMessage.querySelector('p').textContent = message;
    outcomeMessage.style.display = 'block';
    document.getElementById('game-over-overlay').style.display = 'block';
}

function hideOutcomeMessage() {
    document.getElementById('outcome-message').style.display = 'none';
    document.getElementById('game-over-overlay').style.display = 'none';
}

// Event listener for "Play Again" button
document.getElementById('restart-game-btn').addEventListener('click', resetGame);

// Event listener for "Exit" button
document.getElementById('exit-game-btn').addEventListener('click', () => {
    window.location.href = 'exit.html';
});