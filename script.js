document.addEventListener('DOMContentLoaded', () => {
    const button = document.getElementById('actionButton');
    const messageDisplay = document.getElementById('message');
    const countDisplay = document.getElementById('clickCount');
    let clickCount = 0;

    const updateDisplay = () => {
        clickCount++;
        countDisplay.textContent = clickCount;

        if (clickCount === 1) {
            messageDisplay.textContent = "Interaction established! Keep going.";
        } else if (clickCount % 10 === 0) {
            messageDisplay.textContent = `A major milestone! ${clickCount} clicks achieved.`;
        } else if (clickCount > 5) {
            messageDisplay.textContent = `Currently at ${clickCount} clicks.`;
        } else {
            messageDisplay.textContent = `Clicked ${clickCount} time(s).`;
        }
    };

    // Event listener attached to the button
    button.addEventListener('click', updateDisplay);

    // Initial setup message
    messageDisplay.textContent = "Ready to run pure JavaScript.";
});