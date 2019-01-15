function DivByThree(NumberToDivide){
	
	let numbers = "";
	
	let i = NumberToDivide;
	
	while(i >= 1){
		if(i == 1){
			i = 0;
		}
		else if(i == 2){
			numbers += i + " - 1 = ";
			i--;
			numbers += i + ".";
			i = 0;
		}
		else if(i % 3 == 0){
			numbers += i + " / 3 = ";
			i = i / 3;
			numbers += i + ", <br>";
		} else if((i + 1) % 3 == 0){
			numbers += i + " + 1 = ";
			i ++;
			numbers += i + ", <br>";
		} else if((i - 1) % 3 == 0){
			numbers += i + " - 1 = ";
			i --;
			numbers += i + ", <br>";
		} else {
			numbers += "failed";
		}
		
		
	}
	
	console.log(numbers);
	document.getElementById("People").innerHTML = "Number: <br>" + numbers;
	
}