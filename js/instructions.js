// instructions.js

document.addEventListener('DOMContentLoaded', () => {
    const instructionsButton = document.getElementById('instructions-btn');
    const instructionsOverlay = document.getElementById('instructions-overlay');
    const closeInstructions = document.getElementById('close-instructions-btn');

    instructionsButton.addEventListener('click', () => {
        instructionsOverlay.style.display = 'block';
    });

    closeInstructions.addEventListener('click', () => {
        instructionsOverlay.style.display = 'none';
    });

    // Close the overlay when clicking outside of the instructions box
    window.addEventListener('click', (event) => {
        if (event.target === instructionsOverlay) {
            instructionsOverlay.style.display = 'none';
        }
    });
});