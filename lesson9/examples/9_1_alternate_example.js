//this is the alterate example showing highlighting how arguements work.

var y = 3
var x = 2

//thisFunction works the same, even when we name the arguements jelly and peanutButter
function thisFunction(jelly,peanutButter){
     var result = jelly+peanutButter
     return result
}

thisVar = thisFunction(10,10)
console.log(thisVar)

thatVar = thisFunction(x,y)
console.log(thatVar)