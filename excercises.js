/*************************************
	Gsoc assigments
**************************************/

//Excercise 1



function palindrome(){
	var string_provided = prompt("Please enter a string", "Provide a string");

	if(string_provided != null && string_provided != ""){
		
		reversed_str = string_provided.split('').reverse().join('');
		alert(reversed_str);
		if(reversed_str === string_provided){
			console.log("The word entered is a palindrome");
			return true;
		}
	}
	else{
		console.log('Please try again and type something');
		return null;
	}
	//Everything being constant

}


function evenFibonacciNumber(){
	var f={};
	 f[0] = 0;
	 f[1] = 1;

	for(var i=2; i<10; i++){
		f[i] = f[i-1] + f[i-2];
		console.log(f[i]);
	}

}