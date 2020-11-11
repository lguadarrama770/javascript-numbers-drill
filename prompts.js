/* 
Using arithmetic operations and Math object and its methods, code statements to print the result to the terminal.
1. Prompt a user twice to input a number between 1 and 9. Store their response in variables.
*/
let questionOne = prompt(`Pick a number from 1 to 9`);
let questionTwo = prompt(`Pick another number from 1 to 9`);

const anwserOne = questionOne;
const anwserTwo = questionTwo;

console.log(anwserOne);
console.log(anwserTwo);

/* 
Code a series of JS statements that use the user input to preform math operations.

2. Must use math operations:

    -addition
    -subtraction
    -multiplication
    -division
    -exponent
    -modulus
*/
let question1 = prompt('First Number:');
let question2 = prompt('Second Number:');

const numOne = parseInt(question1);
const numTwo = parseInt(question2);

//Addition
    console.log(numOne + numTwo);

//Subtraction
if(numOne > numTwo) {
    console.log(numOne - numTwo);
} else{
    console.log(numTwo - numOne);
}

//multiplication
    console.log(numOne * numTwo);

//division
if(numOne > numTwo) {
    console.log(numOne / numTwo);
} else{
    console.log(numTwo / numOne);
}

//exponent
console.log(numOne ** 2);
console.log(numTwo ** 2);

//modulus
console.log(numOne % numTwo);


// 3.Code a statement that would return a random number between 1 and 35.
let highestNumber = 35;

const randomNumber = Math.floor( Math.random() * highestNumber) + 1;
console.log(`${randomNumber} is a number between 1 and 35`);


// 4. Code a statement to return a floating point number rounded up to the nearest integer
const num = 13.45
console.log(Math.ceil(num))


// 5. Code a statement that returns a floating point number rounded down to the nearest integer
const num2 = 13.45
console.log(Math.floor(num2))


// 6. Using Math.pow return the value of the one variable to the power of the other
let valueOne = 4;
let valueTwo = 2;

console.log( Math.pow(valueOne, valueTwo) );