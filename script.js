let screen = document.getElementById('screen');
let equation = '';

function appendToScreen(value) {
    equation += value;
    screen.value = equation;
}

function clearScreen() {
    equation = '';
    screen.value = '';
}

function calculate() {
    try {
        equation = eval(equation);
        screen.value = equation;
    } catch (error) {
        screen.value = 'Error';
    }
}
// Event listener for keypress events
document.addEventListener('keypress', function (event) {
    const key = event.key;

    if (key >= '0' && key <= '9') {
        appendToScreen(key);
    } else if (key === '+' || key === '-' || key === '*' || key === '/') {
        appendToScreen(key);
    } else if (key === 'Enter') {
        calculate();
    } else if (key === 'C' || key === 'c') {
        clearScreen();
    }
});

