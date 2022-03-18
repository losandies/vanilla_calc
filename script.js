let numberButtons = document.querySelectorAll('.number');
let operatorButtons = document.querySelectorAll('.operator');
let equalsButton = document.querySelector('.equals_button');
let decimalButton = document.querySelector('.decimal');
let allClearButton = document.querySelector('#all_clear');
let clearButton = document.querySelector('#clear');
let backspaceButton = document.querySelector('#backspace');
let currentOperationOutput = document.querySelector('.current_equation');
let lastOperationOutput = document.querySelector('.last_equation');

let firstOperand = '';
let secondOperand = '';
let currentOperation = null;

numberButtons.forEach((button) => {
	button.addEventListener('click', () => appendNumber(button.id));
});

operatorButtons.forEach((button) => {
	button.addEventListener('click', () => appendOperator(button.id));
});

decimalButton.addEventListener('click', addDecimal);

allClearButton.addEventListener('click', () => {
	allClear();
});

clearButton.addEventListener('click', clear);

backspaceButton.addEventListener('click', () => {
	backspace();
});

equalsButton.addEventListener('click', () => {
	secondOperand = currentOperationOutput.innerText;
	if (currentOperation === null) {
		alert('Pick an operation.');
		return;
	} else if (secondOperand === '') {
		alert('Enter in your second operand first.');
		return;
	}
	eval();
});

function appendNumber(number) {
	currentOperationOutput.innerText += number;
}

function appendOperator(operator) {
	if (currentOperation !== null) eval();
	firstOperand = currentOperationOutput.textContent;
	currentOperation = operator;
	console.log(currentOperation);
	lastOperationOutput.innerText = `${firstOperand} ${currentOperation}`;
	currentOperationOutput.innerText = '';
}

function addDecimal() {
	if (!currentOperationOutput.innerText.includes('.')) {
		currentOperationOutput.innerText += '.';
	}
}

function allClear() {
	firstOperand = '';
	secondOperand = '';
	currentOperation = null;
	currentOperationOutput.innerText = '';
	lastOperationOutput.innerText = '';
}

function clear() {
	secondOperand = '';
	currentOperationOutput.innerText = '';
}

function backspace() {
	currentOperationOutput.innerText = currentOperationOutput.innerText.slice(
		0,
		-1
	);
}
function eval() {
	if (currentOperation === '÷' && secondOperand === '0') {
		alert('Aht Aht! No dividing by 0!');
		secondOperand = '';
		currentOperationOutput.innerText = '';
		return;
	}
	lastOperationOutput.innerText = `${firstOperand} ${currentOperation} ${secondOperand} =`;
	currentOperationOutput.innerText =
		Math.round(operate(currentOperation, firstOperand, secondOperand) * 1000) /
		1000;
}

const add = (x, y) => {
	return x + y;
};

const subtract = (x, y) => {
	return x - y;
};

const multiply = (x, y) => {
	return x * y;
};

const divide = (x, y) => {
	return x / y;
};

function operate(operator, x, y) {
	x = Number(x);
	y = Number(y);
	switch (operator) {
		case '+':
			return add(x, y);
		case '-':
			return subtract(x, y);
		case '×':
			return multiply(x, y);
		case '÷':
			return divide(x, y);

		default:
			break;
	}
}
