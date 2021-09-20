const equationPanel = document.querySelector('input');
const buttonPanel = document.querySelectorAll('button');

let equation = function(expression, buttonName) {
    // If zero is the first entry, do nothing
    if(expression.length === 0) {
        if(buttonName === 'equals' || buttonName === '0') {
            return expression;
        }
    }

    // Which button was pressed?
    switch(buttonName) {
        case 'clear':
            return '';
        case 'delete':
            // Remove the last index from the equation sequence
            return (expression.slice(0, -1));
        case 'par-left':
            // Remove the last index from the equation sequence
            return (expression + '(');
        case 'par-right':
            // Remove the last index from the equation sequence
            return (expression + ')');
        case 'divide':
            // Do division
            return (expression + '/');
        case 'multiply':
            // Do multiplication
            return (expression + '*').replace('*', 'x');
        case 'minus':
            // Do subtraction
            return (expression + '-');
        case 'plus':
            // Do addition
            return (expression + '+');
        case 'decimal':
            // Insert decimal
            return (expression + '.');
        case 'equals':
            // Solve equation
            return eval(expression.replaceAll('x', '*'));
        default:
            // If the button was a number, append it to the sequence
            return expression + buttonName;
    }
}

// Get each button within the buttons object
for(let button of buttonPanel) {
    // Add a click event listener to each button
    button.addEventListener('click', (event) => {
        // Modify the equation sequence
        equationPanel.value = equation(equationPanel.value, button.name);
        console.log(equationPanel.value);
    });
}
