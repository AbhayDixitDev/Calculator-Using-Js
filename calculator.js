



// Variables to store operands and operator
let firstNumber = null;
let operator = null;
let secondNumber = null;

// Function to update the display with the clicked button value
function updateDisplay(value) {

  const displayElement = document.querySelector('#output');
  document.querySelector('#output1').value=firstNumber;

  displayElement.value += value;
}

// Function to handle button clicks
function cal(button) {
  const buttonValue = button.value;

  // Handle number buttons
  if (!isNaN(buttonValue)) {
    updateDisplay(buttonValue);

  // Handle operator buttons
  } else if (buttonValue === '+' || buttonValue === '-' || buttonValue === '*' || buttonValue === '/') {
    // Check if first number is already entered
    if (firstNumber === null) {
      firstNumber = parseFloat(document.querySelector('#output').value);
    document.querySelector('#output1').value=firstNumber;
    // document.querySelector('#output1').value=operator;
     

      
    } else {
      // Perform calculation if operator is already set and second number is entered
      if (secondNumber !== null) {
        calculate();
      }
    }
    // Clear display for second number

    operator = buttonValue;
    document.querySelector('#output2').value=operator;
    document.querySelector('#output').value = ''; // Clear display for second number
    
    
  // Handle equals button
  } else if (buttonValue === '=') {
    if (firstNumber !== null && operator !== null) {  
      secondNumber = parseFloat(document.querySelector('#output').value);
      calculate();
    }
  // Handle clear button
  } 
}

// Function to perform calculation based on operator
function calculate() {
  let result;
  switch (operator) {
    case '+':
      result = firstNumber + secondNumber;
      break;
    case '-':
      result = firstNumber - secondNumber;
      break;
    case '*':
      result = firstNumber * secondNumber;
      break;
    case '/':
      // Handle division by zero
      if (secondNumber === 0) {
        result = "Error: Can't divide by zero";
        document.querySelector('#output1').value = ''; 
      } else {
        // Clear display for second number

        result = firstNumber / secondNumber;
      }
      break;
  }
  document.querySelector('#output').value = result;
  firstNumber = result;
  document.querySelector('#output1').value=firstNumber;
  // Store result for further calculations
  operator = null;
  secondNumber = null;
  document.querySelector('#output2').value = ''; 
}