
// let name = 'Andrea';
// let message = `Hello ${name}`;
// showMessage(message);


// let message = 'Hello';
// message = message.length;
// showMessage(message);

// let amount = 123;
// amount = amount.toString();
// showMessage(typeof amount);


// // converts a string to a floating number using parse float
// let amount = Number.parseFloat("123.12");
// showMessage(amount);
// // showMessage(typeof amount);


// Boolean Variables
// let saved = true;
// saved = !saved; // flip the saved variable using ! // Exclamation point means NOT
// showMessage(saved);


//  Null and Undefined

// let saved = 10;
// saved = null; // when you want to wipe out the value of a variable and set it to null so nothing shows or the value is empty use = null
// showMessage(saved);
// console.log(saved);

// Objects & Symbols

// let person = {
//     firstName: 'John', // Properties
//     lastName: 'Shields',
// };

// showMessage(person.firstName + person.lastName)
// console.log(person.firstName);

// Conditions using if statements

// if (5 === 5) {      // True
//     console.log('Yes');
// }

// if (5 > 5) {        // False
//     console.log('No');
// }

// if (5 >= 5 ) {      // True
//     console.log('Yes')
// }

// Tax Program if Statement

// let state = 'FL';
// let taxPercent = 0;

// if (state === 'FL') {
//     taxPercent = 7;
// }

// console.log(taxPercent); 

// let state = 'FL';
// let taxPercent = 0;

// if (state !== 'FL') {  // !== isNotEqual to 
//     taxPercent = 7;
// }

// console.log(taxPercent); 


// if (true) {
//     showMessage('true')
// }

// let price = 20;
// if (price !== 15) {
//     showMessage('discounted')
// }

// Truthy & Falsy

// falsy                       | truthy
// false                       | Everything NOT falsy
// 0                           | true
// "" or " (empty strings)     | 0.5
// null                        | "0" is actually a truthy
// undefined                   | 
// NaN                         | 

// Show that the string "0" returns a truthy value
// if ("0") {
//     showMessage('true')
// }

// floating point number issue
// toFixed converts a string to a number
// plus (+) sign is a simple way to convert a string converted by toFixed back into a number
// if ( +(1.1 + 1.3).toFixed(2) === 2.4) {
//     showMessage('true');
// }

// if ( +(1.1 + 1.3).toFixed(2) === 2.4) {
//     let message = 'hello';
//     showMessage(message);
// }

// if ... else statements

// if (true) {
//     showMessage('true');
// }
// else {
//     showMessage('false'); // Results in True because thats what I am evaluating against
// }

// if (false) {
//     showMessage('true');
// }
// else {
//     showMessage('false');  // Results in false
// }


// let price = 20;
// if (price > 20) {
//     showMessage('true');
// }
// else {
//     showMessage('false');  // Results in false
// }

// let price = 20;
// if (price > 10) {
//     showMessage('true'); // Results in true
// }
// else {
//     showMessage('false');  
// }

// let price = 4;
// if (price > 10) {  // this evaluates to false
//     showMessage('true'); 
// }
// else if (price < 5) {  // so this is evaluated and shows the message
//     showMessage('less than 5');  
// }

// Shows how this is a valid block of code without the braces

// let price = 4;
// if (price > 10)  
//     showMessage('true'); 
// else if (price < 5) {  
//     showMessage('less than 5');  
// }

// But its always best practices to use the braces

// let price = 4;
// if (price > 10) {
//     showMessage('true'); 
// }
// else if (price < 5) {
//     showMessage('less than 5');  
// }

// Using multiple else if statements to check other things

// let price = 1;
// if (price > 10) {
//     showMessage('true'); 
// }
// else if (price > 5) {  // greater than 5
//     showMessage('less than 5');  
// }
// else if (price < 4) {  // less than 4
//     showMessage('less than 4');  
// }


// Comparing === and ==


// using === for comparison

// if (1 === "1") { // not equal because "1" is a string
//     showMessage('true');
// }
// else {
//     showMessage('false')
// }


// using == for comparison

// if (1 == "1") { // results in true because javaScript will attempt to convert types // it will convert "1" into string 1 so this comparison is true
//     showMessage('true');
// }
// else {
//     showMessage('false');
// }

// The Ternary Operator

// This is a special operator that works with 3 different values 
// its a shortcut for working with if else statements

// (condition) ? true-statement : false-statement

// let price = 20;

// let message = (price > 10) ? 'expensive' : 'cheap'

// showMessage(message); // expensive

// let price = 20;
// // (condition) ? true-statement : false-statement
// (price > 10) ? showMessage('yes') : showMessage('no'); // shows how Ternary works single line evaluation

// let price = 20;

// let message = (price < 10) ? 'yes' : 'no'; // simplified version of a Ternary basically evaluating on one line
// showMessage(message);


// Block Scope Using let

// value is only available within the block
// if (true) {
//     let value = 'yes';
//     showMessage(value);
// }

// Set value as constant because its not changing and not needed outside of the block
// if (true) {
//     const value = 'yes';
//     showMessage(value);
// }

// Looping with for()

//  (statement; condition that evaluates; statement that executes after the loop completes ++ operator is increment operator it adds 1 to i)
// for (let i = 0; i < 3; i++) {
//     console.log(i);  // outputs in console 0 1 2
// }

// i is equal to 0
// as long is < less than 5
// we will log out i++ which increments

// for (let i=0; i < 5; i++) {
//     console.log(i);  // outputs to console 0 1 2 3 4
// }

// // be careful with the operator as it will show different results <=
// for (let i=0; i <= 5; i++) { 
//     console.log(i);  // outputs to console 0 1 2 3 4 5
// }

// // Infinite Loop
// for (let i=0; i < 5; i--) { 
//     console.log(i);  // outputs to console an endless loop and will hang up the browser
// }

// Normal for loop and increments
// for (let i=0; i < 5; i++) { 
//     console.log(i);  // 
// }


// Looping with while()


// // While count is less than 5 it will run the code block and increment count with incrementor ++ then move on to the next block or function
// let count = 1;

// while (count < 5) {
//     console.log(count);
//     count++; // outputs to console 0 1 2 3 4
// }


// // i is used as a traditional variable used in loops i stands for index or iterator
// let i = 4;
// while (i > 0) {
//     console.log(i);
//     i--;  // output is backwards 4 3 2 1 
// }



// Looping with do ... while()

// used for guaranteeing that body of code will execute just once


// // this loop runs while count is less than 5
// // This test the condition after the code block executes while...
// let count = 1;

// do {
//     console.log(count);
//     count++;
// } while (count < 5); // output is 1 2 3 4 


// let i = 4;

// do {
//     console.log(i);
//     i--;
// } while (i > 0); // output is 4 3 2 1


// let i = -4;

// do {
//     console.log(i);
//     i--;
// } while (i > 0); // output is -4


// // Function Basics

// function showMessage() {
//     console.log('in a function');
// }

// showMessage();
// showMessage();

// // // shows the message in the function twice

// function logMessage() {
//     console.log('Here is a message');
// }

// logMessage();
// logMessage();

// Function Expressions

// function showMessage() {  // function declaration
        
// }

// let fn = function () {  // function expression

// }

// fn(); // calls the function


// Function Expressions

// the loggingFunction is used for debugging later if needed

// let myFunction = function loggingFunction () {
//     console.log('Here is a message');
// }

// myFunction();


// Passing Information to Functions

// function showMessage(message) {
//     console.log(message);
// }

// showMessage('First Message')
// showMessage('Second Message')

// // passing message and firsName are arguments for the function

// let myFunction = function (message, firstName) {
//     console.log(message);
//     console.log(firstName);
// }

// myFunction('Hello', 'Adam');


// Function Return Values

// function getSecretCode(value) {
//     let code = value * 42;
//     return code;
// }
// // the 2 is the 'value' that i am specifying when calling the function
// // 42 * 2 = 84
// showMessage(getSecretCode(2)); // 84


// // another way of doing it using a variable to show the message

// function getSecretCode(value) {
//     let code = value * 42;
//     return code;
// }
// let secretCode = getSecretCode(2);
// showMessage(secretCode); 


// Function Scope

// // Not in Outer Scope

// function getSecretCode(value) {
//     let code = value * 42;
//     return code;
// }
// let secretCode = getSecretCode(2);
// showMessage(code); // error 'code' is not defined because its inside of the function and not in outer scope


// // Available in outer scope

// let key = 42;

// function getSecretCode(value) {
//     let code = value * key;
//     return code;
// }
// let secretCode = getSecretCode(2);
// showMessage(secretCode); 


// Function within a function nested function

// // This is a complex type function

// let key = 42;

// function getSecretCode(value) {

//     let keyGenerator = function() {
//         let key = 12;
//         console.log('in keyGenerator nested function', key); 
//         return key; // keyGenerator results in in keyGenerator nested function 12
//     }

//     let code = value * keyGenerator();
//     console.log('in getSecretCode nested function', key);
//     return code; // keyGenerator results in getSecretCode nested function 42
// }
// let secretCode = getSecretCode(2);
// showMessage(secretCode); 


// Using Functions to Modify Web Pages

changePercentOff(32)


// Object Properties

// // can do it this way

// let person = {
//     name: 'John',
//     age: 32,
//     partTime: false
// };

// person.age = 33;

// showMessage(person.age);

// // or this way with square brackets

// let person = {
//     name: 'John',
//     age: 32,
//     partTime: false
// };

// person['age'] = 44;

// showMessage(person.age);

// // Create a Symbol to hide information

// let mySymbol = Symbol();

// let person = {
//     name: 'John',
//     age: 32,
//     partTime: false,
//     [mySymbol]: 'secretInformation',
// };

// person['age'] = 44;

// showMessage(person.age);


// // Object Methods

// let person = {
//     name: 'John',
//     age: 32,
//     partTime: false,
//     showInfo: function(realAge) {
//         showMessage(this.name + ' is ' + realAge); // this. is similar to self in python it allows access to variables inside of the function
//     }
// };

// // person.showInfo(34);
// showMessage(typeof person.showInfo);