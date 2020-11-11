function amountErrorCheck(amount){
    if (amount <= 0.00){
        throw "amount can not be a negative number"
    }
}

var amount = -50.00

try{
    amountErrorCheck(amount)
}
catch{
    amount = 0.00
    console.log("Handled error -- amount can not be a negative number")
}

