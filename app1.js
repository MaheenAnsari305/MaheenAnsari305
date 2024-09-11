// ch#6
// q#1
 var x = "x=x+1";
console.log(x );

// q#2

 var x = 100 - 1;
console.log(x);

// q#3
var x = 50;
var y = x++;
console.log(y);

// q#4

var y = 50;
 var z = --y;
console.log(z);

// q#5
var num = 1
var newnum = num--; // Decrements num and assigns its original value to newnum
console.log(newnum);

// q#6
var num = 2
var  originalValue = num++, newValue = num;
console.log(originalValue)
// q#7
// Assign a number value to a variable
var  num = 10;

// Increment the variable
//  var num2 = num++;

// Display the new value in an alert
// alert(num2);


// -------------------------------------------------------


// chapter#7

// q#1
// Scenario 1
var calculatedNum1 = 2 + (2 * 6);
console.log("Value of calculatedNum1:", calculatedNum1); 

// Scenario 2
var calculatedNum2 = (2 + 2) * 6;
console.log("Value of calculatedNum2:", calculatedNum2); 

// q#2
var calculatedNum = (2 + 2) * (4 + 2);
console.log("Value of calculatedNum:", calculatedNum); 

// q#3
var calculatedNum = ((2 + 2) * 4) + 2;
console.log("Value of calculatedNum:", calculatedNum); 

// q#4
var cost = (2 + 2) * (4 + 10);
console.log(cost);


// q#5
var units = (2 + 2) * (4 + 10) - 10;
console.log(units);

// q#6
var pressure = (4 / 2) * 4 + 1;
console.log(pressure);


// -------------------------------------------------------------------

// chapter#8
// q#1

var num = "2" + "2";
console.log(num);



// q#2

// var messages = "Hello" + "Dolly";
// alert(messages);

// q#3

// var num = "33" + 3;
// alert(num);

// q#4

// var num1 = "Pakistan";
// var num2 = "Zindabad";
// var num3 = num1  +  num2;
// alert(num3);



// q#5

var result = "The number is " + 42;
console.log(result);


// q#6
// Assign strings to two variables
var string1 = "Hello, ";
var string2 = "world!";

// Concatenate the two strings and assign the result to a third variable
var concatenatedString = string1 + string2;

// Output the result to verify
console.log(concatenatedString); // Outputs: "Hello, world!"


// chapter#9
// q#1

// var firstName = prompt("Enter first name");

// console.log("User's first name is:", firstName);


// q#2

// var country = prompt("Country?", "China");

// console.log("User's country is:", country);

// q#3
// var yourName = prompt("Enter Your Name");
// console.log(yourName);


// q#4

// var userInput = prompt("Please enter your favorite color:", "Blue");

// console.log("User's favorite color is:", userInput);


// q#5
// Assign strings to two variables
// var message = "Please enter your favorite fruit:";
// var defaultResponse = "Apple";

// Use the variables in the prompt and assign the user's response to a third variable
// var userResponse = prompt(message, defaultResponse);

// Output the result to verify (optional)
// console.log("User's response is:", userResponse);

// q#6

// Display a prompt with a message and a default response
// var userResponse = prompt("What is your favorite color?", "Blue");

// Display the user's response in an alert
// alert("You entered: " + userResponse);


// -----------------------------------------------------------------------------------------
// maths expression
// chapter#6


 // Prompt the user to enter a number
//  var userInput = prompt("Enter a number:");

 // Convert the user input to a number
//  var number = parseFloat(userInput);

 // Check if the input is a valid number
//  if (!isNaN(number)) {
//      // Perform arithmetic operations
//      var addition = number + 10;
//      var subtraction = number - 5;
//      var multiplication = number * 2;
//      var division = number / 3;

     // Display the results in an alert
//      alert("Results:\n" +
//            "Addition (number + 10): " + addition + "\n" +
//            "Subtraction (number - 5): " + subtraction + "\n" +
//            "Multiplication (number * 2): " + multiplication + "\n" +
//            "Division (number / 3): " + division);
//  } else {
//      alert("Please enter a valid number.");
//  }

// chapter # 6

// q#1

document.write("<h1>Result</h1>");
 
var num = 10;
document.write("<h2>The value of a is 10 </h2>" );

var num2 = ++num;
document.write("<h2>The value of ++a is :11</h2>"   );
document.write("<h2> Now The value of a is :11</h2>"   );

var num2 = num++;
document.write("<h2>The value of ++a is :11</h2>"   );
document.write("<h2> Now The value of a is :12</h2>" );

document.write("<h2>The value of --a is :11</h2>"   );
document.write("<h2> Now The value of a is :11</h2>" );

document.write("<h2>The value of a-- is :11</h2>"   );
document.write("<h2> Now The value of a is :10</h2>" );


// q#2

var a = 2, b = 1;
var result = --a - --b + ++b + b--;
document.write(result);
















