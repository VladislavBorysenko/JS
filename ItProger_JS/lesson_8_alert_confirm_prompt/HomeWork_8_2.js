var firstNumber;
var secondNumber;

firstNumber = prompt("Please enter first number");
secondNumber = prompt("Please enter second number");

    alert("You first number is " + firstNumber);
    alert("You second number is " + secondNumber);

firstNumber = new Number(firstNumber);
secondNumber = new Number(secondNumber);
    if (firstNumber > secondNumber) {
    alert(firstNumber+ " Is bigger "+ secondNumber);
}else if (firstNumber < secondNumber){
        alert(secondNumber+" Is bigger "+ firstNumber)
    } else {
        alert("not number")
    }