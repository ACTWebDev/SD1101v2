
function validate(){

  let warn = document.getElementById("warn");
  warn.style.color = "red";


let fname = document.getElementById("name")
let re = /[0-9]/;
let result = fname.value.search(re);
console.log(result);
if(result != -1){
  warn.hidden = false;
  document.getElementById("submit").disabled= true;
}
else{
  document.getElementById("submit").disabled= false;
  warn.hidden = true;
  
}



}