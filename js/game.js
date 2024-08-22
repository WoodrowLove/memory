// Array to hold card images
const cardsArray = [
    { name: 'card1', img: 'assets/images/card1.png'},
    { name: 'card2', img: 'assets/images/card2.png'},
    // Add other card images as needed
];

// Duplicate the cards array to create a match for each card
let gameGrid = cardsArray.concat(cardsArray);

// Game variables
let firstGuess = '';
let secondGuess = '';
let count = 0;
let previousTarget = null;
let delay = 1200;
let gameBoard = document.getElementById('gameBoard');
let matches = 0;
let attempts = 0;
let totalPairs = gameGrid.length / 2;