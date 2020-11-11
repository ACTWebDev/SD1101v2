
//This function adds two arguements and returns the result.
function demoFunct (input1, input2) {
    var result = input1 + input2
    return result
}

var myVar = demoFunct(5,2)
console.log(myVar)
//5+2 is 7

myVar = demoFunct(8,9)
console.log(myVar)
//8+9 is 17

myVar = demoFunct("hello ","world")
console.log(myVar)
//JS doesn't care if we are adding numbers or combining
// text. It combines two pieces of texts together.


//this function has a signature that takes 3 arguements
function anotherFunction(a,b,c){
    var result = a+b-c
    return result
}

anotherVar = anotherFunction(5,6,2)
console.log(anotherVar)
//5+6-2 = 9


//these are variables
var y = 3
var x = 2


//we are defining a function:
//the x and y here are not variables, they are arguements in the function signature
function thisFunction(x,y){
     var result = x+y
     return result
}

thisVar = thisFunction(10,10)
console.log(thisVar)
//10+10 = 20


//when we call (use) a function, we can push in variables.  
thatVar = thisFunction(x,y)
console.log(thatVar)
//3+2 is five


//a function does not have to return data
function noResult(arg1, arg2){
    result = arg1 + arg2
    //we omit the return here
}

var whatIsIt = noResult(12,12)
console.log(whatIsIt)
//it's undefined because nothing was returned 


//More Function Examples
function MyNewFunction(number1, number2) {
    let result = number1 + number2;
    return result;
  }
  
  console.log(MyNewFunction(2,2));
  console.log(MyNewFunction(8,12));
  console.log(MyNewFunction(94,66));
  console.log(MyNewFunction(127242,394658));
  