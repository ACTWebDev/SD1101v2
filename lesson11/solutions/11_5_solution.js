'use strict'

let someNumber = 5;
let someText = "this is some text.";
let someArray = ['white','black','red'];

try{
  someNumber.ToUpperCase();
}
catch(err){
  console.log(err);
}
try{
  sometext.replace("text", "letters");
}
catch(err)
{
  console.log(err);
}
try{
  JSON.parse(someArray);
}
catch(err){
  console.log(err)
}



console.log('CONGRATULATIONS! SCRIPT RAN WITH ALL ERRORS HANDLED');