// utils.js

/**
 * Function to shuffle an array using the Fisher-Yates (Knuth) algorithm.
 * This is an unbiased shuffle algorithm ensuring fair gameplay.
 * 
 * @param {Array} array - The array to shuffle.
 * @returns {Array} The shuffled array.
 */
export function shuffleArray(array) {
    let currentIndex = array.length, randomIndex;

    // While there remain elements to shuffle.
    while (currentIndex !== 0) {
        // Pick a remaining element.
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;

        // Swap it with the current element.
        [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
    }

    return array;
}

/**
 * Function to create a delay (in milliseconds) using Promises.
 * Useful for pausing execution, such as during card flip delays.
 * 
 * @param {number} ms - The number of milliseconds to delay.
 * @returns {Promise} A promise that resolves after the specified delay.
 */
export function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

/**
 * Function to generate a random integer between min (inclusive) and max (inclusive).
 * Useful for randomizing game elements beyond just card shuffling.
 * 
 * @param {number} min - The minimum value.
 * @param {number} max - The maximum value.
 * @returns {number} A random integer between min and max.
 */
export function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

/**
 * Function to format the time for display in a MM:SS format.
 * Useful for any timers or countdowns displayed in the game.
 * 
 * @param {number} timeInSeconds - The time in seconds.
 * @returns {string} The formatted time as MM:SS.
 */
export function formatTime(timeInSeconds) {
    const minutes = Math.floor(timeInSeconds / 60);
    const seconds = timeInSeconds % 60;
    return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
}