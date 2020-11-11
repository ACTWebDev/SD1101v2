'use strict'
let animals = ['Lion','Tiger','Zebra','Donkey','Catfish'];
console.log(animals);
let numbers = [42,8,12,30];
console.log(numbers);
let myTiger = animals[1];
console.log(myTiger);
let meaningOfLife = numbers[0];
console.log(meaningOfLife);
let mixedData = [101, 'Dog', 6,'George Washington', true, null];
console.log(mixedData);
animals[5] = 'Cobra'
console.log(animals);
mixedData[6] = animals[3];
console.log(mixedData);
animals.pop();  //pop() removes the last item in the array.
console.log(animals);
animals.push('Shark'); //push adds a new item at the end of the array
console.log(animals);
let myLion = animals.shift()  //shift takes the FIRST item from the array, everything else shifts -1 index value
console.log(myLion);
console.log(animals);
animals.unshift(myLion); //unshift adds back the FIRST item in the array, everything else shifts +1 index value
console.log(animals);
