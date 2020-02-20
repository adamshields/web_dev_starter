
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