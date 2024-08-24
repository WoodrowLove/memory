// card.js

import { updateGameState } from './outcome.js';

let firstCard = null;
let secondCard = null;
let preventClick = false;

const cardImages = [
    'assets/images/card1.jpg',
     'assets/images/card2.jpg',
    'assets/images/card3.jpg', 
    'assets/images/card4.jpg',
    'assets/images/card5.jpg',
    'assets/images/card6.jpg',
    'assets/images/matching.jpg',
    'assets/images/matching.jpg',
];

function shuffle(array) {
    return array.sort(() => Math.random() - 0.5);
}

function createCardElement(cardSrc, index) {
    const cardElement = document.createElement('div');
    cardElement.classList.add('card');
    cardElement.dataset.cardIndex = index;

    const imgElement = document.createElement('img');
    imgElement.src = cardSrc;
    cardElement.appendChild(imgElement);
    imgElement.style.display = 'none';

    cardElement.appendChild(imgElement);

    cardElement.addEventListener('click', onCardClick);

    return cardElement;
}

export function initializeCards(gameBoard) {
    const shuffledCards = shuffle(cardImages);

    shuffledCards.forEach((cardSrc, index) => {
        const cardElement = createCardElement(cardSrc, index);
        gameBoard.appendChild(cardElement);
    });
}

function onCardClick(event) {
    if (preventClick) return;

    const clickedCard = event.currentTarget;

    if (clickedCard.classList.contains('flipped') ||
    clickedCard.querySelector('img').style.display === 'block')
    return;


    clickedCard.querySelector('img').style.display = 'block';

    if (!firstCard) {
        firstCard = clickedCard;
    } else {
        secondCard = clickedCard;
        checkForMatch();
    }
}

function checkForMatch() {
    const isMatch = firstCard.querySelector('img').src === secondCard.querySelector('img').src;
    updateGameState(isMatch);

    if (isMatch) {

        firstCard.classList.add('flipped');

        secondCard.classList.add('flipped');

        resetCards(true);
    } else {
        preventClick = true;
        setTimeout(() => {

            firstCard.querySelector('img').style.display = 'none';

            secondCard.querySelector('img').style.display = 'none';
            resetCards(false);
            preventClick = false;
        }, 1000);
    }
}

function resetCards(isMatch) {
    if (!isMatch) {
        firstCard.querySelector('img').style.display = 'none';
        secondCard.querySelector('img').style.display = 'none';
        firstCard.classList.remove('flipped');
        secondCard.classList.remove('flipped');
    }

    firstCard = null;
    secondCard = null;
}