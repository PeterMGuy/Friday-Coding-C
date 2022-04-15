alert("Choose to Deposite Money or Withdraw Money")

var depositemoney = "Deposite"
var withdrawmoney = "Withdraw"

let userInput = prompt("Please type Deposite or Withdraw");

if(userInput == "Deposite"){
    console.log("How much would you like to deposite?")
}

else if (userInput == "Withdraw"){
    console.log("How much would you like to withdraw?")
}

else{
    alert("Invalid.  Please enter Deposite or Withdraw")
}