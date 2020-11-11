'use strict';

//Say Hello World.
console.log("Hello World");

//create the variable x. assign it the value of 5.
var x = 5;

//create the variable y. assign it the value of 5.
var y = 5;

//create teh variable myFavoriteMovie and assign it a value
var myFavoriteMovie = 'The Great Escape'; 
console.log("My favorite movie is " + myFavoriteMovie);

//if x is equal to the value of y, print to the screen.
if (x===y){
  console.log("x is equal to the value of y");  
}

//Set y equal to it's current value plus 3
//print it's value to screen.
//We've already created y so we won't use keyword var here a second time.
y += 3;
console.log(y);

//create the variable called result, and assign it the value of x minus y.
//print the value of result to the console
var result = x - y;
console.log(result);


//Create variable called two, assign it the value 2
//Create variable one, assign it the value of 1
//Create variable true_or_false, assign the the value of comparing is 2 greater than  1?
var two = 2;
var one = 1;
var true_or_false = two > one;
console.log(true_or_false); 

//Assign true_or_false the value of comparing is two less than 1?
//we've already created true_or_false, so we won't use keyword var again here
true_or_false = two < one;
console.log(true_or_false);
//returns false

//casting example
var someNumber = 10; //this is a number
var someText = '15'; // this is text

console.log(someNumber + someText);
//Result = 1015

console.log(someNumber + Number(someText));
//Result = 25

console.log("I have " + String(someNumber) +  " apples and " + String(someText) + " oranges.");
//I have 10 apples and 15 oranges.