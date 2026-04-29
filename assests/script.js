const increaseButton = document.querySelector('.counterIncrese');
const decreaseButton = document.querySelector('.counterDecrease');
const resetButton = document.querySelector('.counterResetButton');
const counterValue = document.querySelector('.counterValue');
const counterContainer = document.querySelector('.counter');

function animateValue() {
    counterValue.classList.add('pop');
    setTimeout(() => {
        counterValue.classList.remove('pop');
    }, 200);
}

// Increase Value
function increase() {
    const newValue = +counterValue.textContent + 1;
    counterValue.textContent = newValue;
    animateValue();
}

// Decrease Value
function decrease() {
    const currentValue = +counterValue.textContent;

    if (currentValue > 0) {
        counterValue.textContent = currentValue - 1;
        animateValue();
    }
}

// Reset Value
function reset() {
    counterValue.textContent = 0;
    animateValue();
}

increaseButton.addEventListener('click', increase);
decreaseButton.addEventListener('click', decrease);
resetButton.addEventListener('click', reset);
