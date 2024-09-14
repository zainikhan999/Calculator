let expression = "";

// Select all buttons, including the equals button
const buttons = document.querySelectorAll('.rows');

buttons.forEach(button => {
    button.addEventListener('click', (e) => {
        const buttonId = e.target.id;

        if (buttonId === "=") {
            try {
                // Evaluate the expression
                const result = eval(expression);
                document.querySelector('#field').value = result;
                // Update the expression with the result
                expression = result;
            } catch (error) {
                document.querySelector('#field').value = 'Error';
                // Clear the expression if there's an error
                expression = "";
            }
        }
        
        else if (buttonId === "C") {
            // Remove the last character from the expression
            expression = expression.slice(0, -1);
            document.querySelector('#field').value = expression;
        } else if (buttonId === "CLR") {
            // Clear the input
            expression = "";
            document.querySelector('#field').value = "";
        } else {
            // Append button value to the expression
            expression += buttonId;
            document.querySelector('#field').value = expression;
        }
    });
});
