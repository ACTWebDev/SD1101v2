"use strict";

let sky = 'blue';

if (sky=='blue') 
{
  console.log('The sky is blue during the day.');
}

else if(sky=='black'){
  console.log('The sky is black at night.')
}
else{
  console.log('The sky isn\'t blue or black. Something is very wrong!');
}

let age = 30;
let canDrive = (age > 16) ? true : false;


canDrive = false;
if(age > 16){
  canDrive = true;
}
else {
  canDrive = false;
}

let sodaFlavor = 'orange';
switch(sodaFlavor){
  case 'strawberry':
    console.log('Strawberry Flavored Soda');
    break;
  case 'apple':
    console.log('Apple Flavored Soda');
    break;
  case 'orange':
    console.log('Orange Soda');
    break;
  case 'grape':
    console.log('Grape Soda');
    break;
}

for (let i = 1; i < 6; i++) {

  if(i == 3){
    console.log("i is equal to 3. Skipping ahead.")
    continue;
  }

  console.log("Loop has ran " + i + " times.");

}