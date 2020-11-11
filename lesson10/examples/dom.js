//document.getElementById("paragraph").innerText = "I was changed by Javascript";
document.getElementById("paragraph").style.color = "red";
var elements = document.getElementsByTagName("p");

for(var i = 0; i < elements.length; i++)
{
  elements[i].innerText = "JavaJava";
}

var javabutton = document.createElement("button");
javabutton.innerText = "I was created by JavaScript";
javabutton.style.background = "gray";
javabutton.style.color = "white";
document.body.appendChild(javabutton);

var elementToBeRemoved = document.getElementById("willberemoved");
document.body.removeChild(elementToBeRemoved);
