$(document).ready(function(){

	let firstNumber;
	let secondNumber;
	let operator;

	$('.number').click(function(){

		let result = $('#result').text();
		let currentNumber = $(this).text();
		
		let newResult = Number(result + currentNumber);

		$('#result').text(newResult);
	})

	$('.operator').click(function(){
		//store the first number
		firstNumber = Number ($('#result').text());

		//fetch operator

		operator = $(this).text();

		//set the screen equal to 0


		$('#result').text(0);
		});

	//Clear Function
	$('#clear').click(function(){
		$('#result').text(0);
	});

	$('#equalto').click(function(){

		secondNumber = Number($('#result').text());


		if(operator==="+"){
			$('#result').text(firstNumber + secondNumber);
		}else if(operator==="-") {
			$('#result').text(firstNumber - secondNumber);
		}else if(operator==="*"){
			$('#result').text(firstNumber * secondNumber);
		}else if(operator==="/"){
			$('#result').text(firstNumber / secondNumber);
		}else if(operator==="sin"){
			$('#result').text(Math.sin(secondNumber*Math.PI/180));
		}else if(operator==="cos"){
			$('#result').text(Math.cos(secondNumber*Math.PI/180));
		}else if(operator==="tan"){
			$('#result').text(Math.tan(secondNumber*Math.PI/180));
		}else if(operator==="log"){
			$('#result').text(Math.log(secondNumber));
		}else if(operator==="π"){
			$('#result').text(Math.PI);
		}else if(operator==="x²"){
			$('#result').text(secondNumber*secondNumber);
		}else if(operator==="x³"){
			$('#result').text(secondNumber*secondNumber*secondNumber);
		}else if(operator==="√"){
			$('#result').text(Math.sqrt(secondNumber));
		}
	})
})