'use strict'

function CoinFlip(){
    let randomNum = Math.random();
     if (randomNum >= .5){
       console.log("HEADS!");
    }
    else{
      console.log("TAILS!");
    }
}

for (let i = 0; i < 10; i++)
{
  CoinFlip()
}


function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
}

let years = ['1980','1990','2000','2010'];


let someYear = getRandomInt(0, 4);

switch(someYear){
  case 0: console.log(years[someYear]);
  break;
  case 1: console.log(years[someYear]);
  break;
  case 2: console.log(years[someYear]);
  break;
  case 3: console.log(years[someYear]);
  break;
}
