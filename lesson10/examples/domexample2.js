
//if name is in session storage..
let name = sessionStorage.getItem('name');
let age = sessionStorage.getItem('age');
let gender = sessionStorage.getItem('gender');

if(name == null){
  name = window.prompt("Enter your Name");
  sessionStorage.setItem('name', name);

}

if(age == null){
  age = window.prompt("Enter your age");
  sessionStorage.setItem('age', age);

}


if(gender == null){
  gender = window.prompt("Enter your gender");
  sessionStorage.setItem('gender', gender);

}


var h1 = document.createElement("h1");
h1.innerText = `Welcome ${name}!`;
document.body.appendChild(h1);

var div = document.createElement("div");
document.body.appendChild(div);

var age_output = document.createElement("p");
age_output.innerText = `You are ${age} years old.`
div.appendChild(age_output);

var votingStatus = document.createElement("p");

if(age > 18)
  {
    votingStatus.innerText = "You are old enough to vote." 
  }
else
  {
    votingStatus.innerText = "You are not old enough to vote." 
  }
  div.appendChild(votingStatus);


var gender_output = document.createElement("p");
gender_output.innerText = `You are ${gender}`
div.appendChild(gender_output);

var p = document.createElement("p");
p.innerText = "This page content was created completely created by Javascript."
p.style.color = "red";
div.appendChild(p);