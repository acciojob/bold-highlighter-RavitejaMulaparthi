// Get the link element by its id
const highlightLink = document.getElementById('highlightLink');

// Function to highlight bold words
function highlight() {
    const boldElements = document.querySelectorAll('strong');

    // Change the color of all bold elements to green
    for (const boldElement of boldElements) {
        boldElement.style.color = 'green';
    }
}

// Function to return the color to normal (black)
function return_normal() {
    const boldElements = document.querySelectorAll('strong');

    // Revert the color of all bold elements back to black
    for (const boldElement of boldElements) {
        boldElement.style.color = 'black';
    }
}

// Add event listeners for mouseover and mouseout events on the link
highlightLink.addEventListener('mouseover', highlight);
highlightLink.addEventListener('mouseout', return_normal);
