function FizzBuzz(maxNum, fizzVal, buzzVal){
	
	let numbers = "";
	
	for (let i = 1; i <= maxNum; i++){
		if(i % 3 == 0 && i % 5 == 0){
			numbers += fizzVal + " " + buzzVal + "<br>";
		} else if(i % 3 == 0){
			numbers += fizzVal + "<br>";
		} else if (i % 5 == 0){
			numbers += buzzVal + "<br>";
		} else {
			numbers += i + ' <br>';
		}
	}
	
	console.log(numbers);
	document.getElementById("People").innerHTML = "Fizz Buzz: <br>" + numbers;
	
}