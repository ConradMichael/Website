function Divide(num1, num2){
	
	totalNum = num1 / num2;

	console.log(totalNum);
	document.getElementById("People").innerHTML = num1 + " / " + num2 + " = " + totalNum;
	
}

function Multiply(num1, num2){
	
	totalNum = num1 * num2;

	console.log(totalNum);
	document.getElementById("People").innerHTML = num1 + " * " + num2 + " = " + totalNum;
	
}

function Add(num1, num2){
	
	totalNum = +num1 + +num2;

	console.log(totalNum);
	document.getElementById("People").innerHTML = num1 + " + " + num2 + " = " + totalNum;
	
}

function Subtract(num1, num2){
	
	totalNum = num1 - num2;

	console.log(totalNum);
	document.getElementById("People").innerHTML = num1 + " - " + num2 + " = " + totalNum;
	
}

function Root(num1){
	
	totalNum = Math.pow(num1, 1/2);

	console.log(totalNum);
	document.getElementById("People").innerHTML = "The root of " + num1 + " is: " + totalNum;
	
}

document.body.style.backgroundImage = "url('../Calculator/background.jpg')";