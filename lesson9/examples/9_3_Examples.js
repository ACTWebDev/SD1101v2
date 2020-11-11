'use strict'

//STRING METHODS
var mystring = "The Cat In The Hat";
var newstring = mystring.replace("Hat", "Box");
console.log(mystring);
console.log(newstring);

var newstring2 = mystring.split("Cat");
console.log(newstring2);
console.log(newstring2[0])
console.log(newstring2[1])

var myslice = mystring.slice(4,15);
console.log(myslice);
var someIndex = mystring.indexOf("In");
console.log(someIndex);

var doesInclude = mystring.includes("cat");
console.log(doesInclude);

//Replace Example
let orgText = "The brown fox jumped over the lazy dog."
let newText =orgText.replace("dog", "cat");
console.log(newText);

//Index Of Example
let position = orgText.indexOf("b");
console.log(position);
//b is the 4th index. Indexes start a 0, not 1.
//T = 0
//h = 1
//e = 2
//space = 3
//b = 4
let whereIsOver = orgText.indexOf("over");
console.log(whereIsOver);
//the text "over" is the 21st index of the string.

let mySlice = orgText.slice(4,9)
console.log(mySlice)
//we can slice out the text "brown" by slicing index 4 to 9.
//slice does not take the ending index, it stops 1 index before.

//Split example
let words = orgText.split(" ");
console.log(words);
//We split the text on each space, and are left with an array of words

//Reverse Example
console.log(words.reverse());


//Real world example
//The function checks for spam by checking certain words are in the text.
function checkSpam(str) {
  let lowerStr = str.toLowerCase();
  return lowerStr.includes('viagra') || lowerStr.includes('xxx');
}

console.log( checkSpam('buy ViAgRA now') );
//True, it's spam.
console.log( checkSpam('free xxxxx') );
//True, it's spam.
console.log( checkSpam("Job Interview Next Week") );
//It's not spam!

var thisArray = ["mary", "bob", "james"];
console.log(thisArray);


//METHODS OF ARRAYS
var thisArray = ["mary", "bob", "james"];
var reverse_array = thisArray.reverse();

console.log(reverse_array)

thisArray.push("Sam");
thisArray.push("Shark");
thisArray.push("dog");
thisArray.push("cat");
console.log(thisArray);

thisArray.pop();
console.log(thisArray);

thisArray.pop();
thisArray.pop();
thisArray.pop();
thisArray.pop();
thisArray.unshift("WhackaMole!")
console.log(thisArray);





//SCOPE EXAMPLES
//Global Scope
//Let and Var behave the same when they have global scope.

var data = 7
let data2 = 7
console.log("var data = " + data)
console.log("let data2 = " + data2)
//var has global scope -- it can be used anywhere
//let data has global scope -- it can be used anywhere


function someFunction() {
    data = 3
    data2 = 3
    //data is reused here inside of the function.
    //data2 can be reused here inside of the function
    console.log("inside of the function, data's value is changed to " +data)
    console.log("inside of the function, data2's value is changed to " +data2)

}
//the function runs and changes the value of data
someFunction()
console.log("outside of the the function, data's value has been change "+ data)
console.log("outside of the function, data2's value is changed to " +data)



///SCOPE EXAMPLES 2
var myNumber = 5;
//global

function UseMyNumber(number){
  //the global variable myNumber is used in to calcuate the result
  let result = myNumber + number;
  return result;
}

function ScopeExample(){
  var scopedVariable = "I was created inside of ScopeExample()";
  var results = scopedVariable;
  return results;

}

//Create a new number. The UseMyNumber function uses the global myNumber.
var newNumber = UseMyNumber(10)
console.log(newNumber);

//Create a new variable. It's value is creted inside of ScopeExample and returned.
var returnedValue = ScopeExample();
console.log(returnedValue);

//myNumber has not changed.
console.log(myNumber)