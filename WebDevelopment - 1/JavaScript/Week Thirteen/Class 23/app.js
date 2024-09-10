alert("Hello Students");

// Data Destructuring (Arrays)

function calculate(a, b) {
    const add = a + b;
    const subtract = a - b;
    const multiply = a * b;
    const divide = a / b;
  
    return [add, subtract, multiply, divide];
  }
  
  const [add, subtract, multiply, divide] = calculate(4, 7);
  
  document.write("<p>Addition: " + add + "</p>");
  document.write("<p>Subtraction " + subtract + "</p>");
  document.write("<p>Multiplication: " + multiply + "</p>");
  document.write("<p>Division " + divide + "</p>");

  