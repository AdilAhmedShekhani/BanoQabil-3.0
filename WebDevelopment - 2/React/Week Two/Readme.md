#### Comparison operators: ==, ===,!=, !==, etc.:

Comparison operators are used to compare values in JavaScript. JavaScript supports various comparison operators, including the equal (==) operator, strict equal (===) operator, not equal (!=) operator, and strict not equal (!==) operator.

```js
// Equal operator
var x = 5;
if (x == 5) {
  console.log("x is equal to 5");
}

// Strict equal operator
var y = "5";
if (y === 5) {
  console.log("y is equal to 5");
} else {
  console.log("y is not equal to 5");
}

// Not equal operator
var z = 10;
if (z != 5) {
  console.log("z is not equal to 5");
}

// Strict not equal operator
var a = "5";
if (a !== 5) {
  console.log("a is not equal to 5");
}
```

#### Logical operators: &&, ||, !:

Logical operators are used to combine multiple conditions in JavaScript. JavaScript supports various logical operators, including the AND (&&) operator, OR (||) operator, and NOT (!) operator.

```js
// AND operator
var x = 5;
var y = 10;
if (x < 10 && y > 5) {
  console.log("Both conditions are true");
}

// OR operator
var z = 3;
if (z < 5 || z > 10) {
  console.log("At least one condition is true");
}

// NOT operator
var a = true;
if (!a) {
  console.log("a is not true");
}
```

#### Evaluating expressions and order of operations:

JavaScript follows the order of operations when evaluating expressions. Parentheses are used to specify the order of operations.

```js
// Example expression
var result = (2 + 3) \* 4;
```

### Conditional Statements:

#### If...else statements:

If...else statements are used to execute different code blocks based on a condition in JavaScript.

```js
// Example if...else statement
var age = 18;
if (age >= 18) {
  console.log("You are eligible to vote");
} else {
  console.log("You are not eligible to vote");
}
```
