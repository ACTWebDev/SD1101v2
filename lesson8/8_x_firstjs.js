'use strict'

var someNumber = 10;
var myFirstArray = [1,8,12,52,64,18,0,4,6,-1,-18,2.22,44];
for (var i = 0; i < myFirstArray.length; i++)  //start our loop
{
  console.log(myFirstArray[i])
}
//for loop
for (var counter = 1; counter <= 5; counter++ )
{
  console.log("This loop has ran " + counter + " times");
}

for(var magicWord in myFirstArray)
{
  console.log(myFirstArray[magicWord]);
}
//not everything can be iterrated with the in keyword





console.log(myFirstArray[0]);
//first element in the array is the value of 1.   Position 0, or INDEX 0
console.log(myFirstArray[1]);
console.log(myFirstArray[2]);
console.log(myFirstArray[10]);

var myFriendsList = ['John', 'Paul', 'Mark', 'Sarah'];
console.log(myFriendsList[2])
//3rd element in the array is at INDEX 2, value of "Mark"

var mixedArray = [4, 'Javascript', true, null];
console.log(mixedArray[2]);


console.log(myFriendsList.length);
console.log(myFriendsList[99]);
myFriendsList[99] = "My New Friend!"
console.log(myFriendsList.length);
//SIZE of the ARRAY or LENGTH of the ARRAY --> how many items are in the array
//SIZE is IMMUTABLE IN MANY LANGUAGES
//BUT JAVASCRIPT IS FRIENDLY.  ARRAYS CAN GROW IN SIZE.


