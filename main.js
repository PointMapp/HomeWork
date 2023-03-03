let display = document.getElementById('display');
let equation = '';

function addToDisplay(char) {
  equation += char;
  display.value = equation;
}

function calculate() {
  try {
    let result = eval(equation);
    display.value = result;
    equation = result.toString();
  } catch (error) {
    display.value = 'Error';
    equation = '';
  }
}
