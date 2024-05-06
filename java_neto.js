
function appendNumber(number) {
    document.getElementById('display').value += number;
}


function setOperator(operator) {
    var display = document.getElementById('display').value;
    if (display !== '') {
        document.getElementById('display').value += ' ' + operator + ' ';
    }
}

function clearDisplay() {
    document.getElementById('display').value = '';
}


function calculateResult() {
    var expression = document.getElementById('display').value;
    if (expression !== '') {
        try {
            // Replace 'x' with '*' for multiplication
            expression = expression.replace('x', '*');
            var result = eval(expression);
            document.getElementById('display').value = result;
        } catch (error) {
            document.getElementById('display').value = 'Error';
        }
    }
}
