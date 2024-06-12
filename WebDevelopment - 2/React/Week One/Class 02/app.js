// Connect JavaScript

// alert("Hello Students");

/ Data Types

// Numbers
// 123456789;

// Boolean
// true;
// false;

// String
// "abcdef";
// "abc123";
// "1213456";
// "true";
// "false";

// Errors and code are shown in Console only (f12)

// Variable Create (One or more times usage of value in js)

// myFullName (Camel Case)
// my_full_name (Snake Case)

// Variable (String)

// var fullName = "Adil Ahmed";

// alert(fullName);
// alert(fullName);
// alert(fullName);
// alert(fullName);

// Update Variable

// var fullName = "Ali";

// alert(fullName);

// var fullName = "Adil Ahmed";

// alert(fullName);

// Undefined Variable

// var fullName;

// Variable (Numbers)

// var num1 = 10;

// alert(num1);

// alert(num1 + 10);

// var num1 = 10;
// var num2 = 10;

// alert(num1 + num2);

// Print Value in Console
// var Name = "Adil Ahmed";

// console.log(Name);

// Arrays

var student1 = "Noman";
var student2 = "Ahmed";

var students = ["Noman", "Ahmed", "Ali"];

console.log(student1);

console.log(students);

// Index of Array (Start from 0)

console.log(students[1]); // Get Particular value from Array

// Data Type Store in Variable (All Data types)

// Array Adding and Remove

// Add in Arrays
students[3] = "Adil";
students[4] = "Abc";

var students = [];
students[students.length] = "Ahmed";
students[students.length] = "Ali";

console.log(students);

// Delete in Arrays (POP method) last one deleted

var students = ["Amin", "Ahmed", "Zain"];

students.pop();

console.log(students);

// Add in Arrays (Push method) add last one

var students = ["Amin", "Ahmed", "Zain"];

students.push("abc");

console.log(students);

// Delete in Arrays (Shift method) first one deleted

var students = ["Amin", "Ahmed", "Zain"];

students.shift();

console.log(students);

// Add in Arrays (Unshift method) add first one

var students = ["Amin", "Ahmed", "Zain"];

students.unshift("abc");

console.log(students);

// Splice method (Delete and add particular value)

var students = ["Amin", "Ahmed", "Zain"];

students.splice(1, 2); // target value and ending point
students.splice(1, 2, "abc", "xyz"); // target value and ending point and add value

console.log(students);

// Slice method (Copy of Array)

var students = ["Amin", "Ahmed", "Zain"];

var copyArr = students.slice(1, 2); // target index and after this copy all

console.log(copyArr);
console.log(students);

// Create Function

// Normal Function

// function abc() {
//   var abc = "name";
//   console.log("abc==>", abc);
// }

// abc() // Function Call

// Create Function

// Arrow Function (ES-6)

// const abc = () => {
//   var abc = "name";
//   console.log("abc==>", abc);
// };

// abc(); // Function Call