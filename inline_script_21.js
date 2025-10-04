// Calculator Logic
     const currentInput = document.getElementById('current');
const historyDisplay = document.getElementById('history');
let history = [];

// Handle button clicks
document.querySelectorAll('.buttons button').forEach(button => {
    button.addEventListener('click', () => handleButtonClick(button.dataset.value));
});

// Handle keyboard input
document.addEventListener('keydown', (e) => {
    const key = e.key;

    // Only handle keys if the calculator popup is visible
    const calculatorPopup = document.getElementById('calculator-popup');
    if (calculatorPopup.style.display === 'block') { // Adjust based on how you show/hide the popup
        if (/[0-9+\-*/.=]|Backspace|Enter/.test(key)) {
            e.preventDefault(); // Prevent default behavior for calculator input
            if (key === 'Enter') handleButtonClick('=');
            else if (key === 'Backspace') handleButtonClick('backspace');
            else handleButtonClick(key);
        }
    }
    // Allow all keys to work normally if the calculator is not visible
});

function handleButtonClick(value) {
    if (value === 'C') {
        currentInput.value = '';
        historyDisplay.textContent = '';
    } else if (value === 'backspace') {
        currentInput.value = currentInput.value.slice(0, -1);
    } else if (value === '=') {
        try {
            const result = eval(currentInput.value);
            history.push(`${currentInput.value} = ${result}`);
            historyDisplay.textContent = history.join('\n');
            currentInput.value = result;
        } catch (error) {
            currentInput.value = 'Error';
        }
    } else {
        currentInput.value += value;
    }
}