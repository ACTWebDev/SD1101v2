'use strict'
function myFirstFunction(){
  console.log("Hello World");
}

myFirstFunction()

function addNumbers(number1, number2){
  let results = number1 + number2;
  return results;
}

var exercise2 = addNumbers(5,3);
console.log(exercise2);

var exercise3 = addNumbers(6487,9652);
console.log(exercise3);

function sayHello(name){
  let results = "Hello, " + name + " I am Javascript."
  return results
}

var exercise4 = sayHello("Steve");
console.log(exercise4);