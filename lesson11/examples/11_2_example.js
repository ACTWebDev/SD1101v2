
function jsFunction(){
  var requestURL = 'https://raw.githubusercontent.com/ACTWebDev/SD101/master/mydata.json';
  
  var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
  
  var request = new XMLHttpRequest;
  request.open('GET', requestURL);
  
  request.onreadystatechange = function(){
    console.log(this.readyState + " " + this.status + " " + this.statusText);
    if (this.readyState == 4 && this.status == 200){
      var result = this.responseText;
      console.log(result);
    }
  }

  request.send();

  }


jsFunction()