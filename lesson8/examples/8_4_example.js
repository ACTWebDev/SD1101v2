
//ARRAYS EXAMPLES

//create an array of 5 numbers.
var myArray = [1, 2, 3, 4, 5];
console.log(myArray.length); // 5
//the length is 5

console.log(myArray[2])
//index 0, index 1, index 2
//returns the 3rd item in the array
//returns 3


console.log(myArray[50])
//we try to access index 50. nothing is there, so we get undefined returned
//in other languages, we would get a error, but not in JS

var animals = ['cats', 'dogs', 'elephants', 'lions', 'bears']
console.log(animals[4])
//arrays can contain text or any other datatype. it can mix data types

var mixed = ['cats', 'dogs', 102, 'lions', true, undefined]
console.log(mixed[3], mixed[4], mixed[5])

//we can take a value from an array and assign it to a new variable
var myLion = animals[3]
console.log(myLion)

//comparing the lions
if (myLion == animals[3]){
  console.log("two " + myLion + " in the jungle")
}

if (myLion != animals[0])
  {
    console.log(myLion + " are not the same as " + animals[0] )
  }

//loop examples
var list = ['a','b','c','d','e','f','g','h']


//1 use for (x in array) for quick loop

for (item in list){
    console.log(list[item] + " is a letter of the alphabet.")

}

//2 classic loop
//i = 0, while i is less than length of the array, run the loop. increase i each time.

for (var i = 0; i < list.length; i++)
{
  console.log("loop has ran " + i + " times")
}

//3 while 
let z = 1;
while(z < 10){
    console.log("loop has ran " + z + " times")
    z++
}

