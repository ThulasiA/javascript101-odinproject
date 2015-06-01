/*** Sum of multiple of 3 or 5 under 1000 ***/

function multiple3or5() {
    var j = 0;
    for (var i = 1; i < 1000; i++) {
        if ((i % 3 === 0) || (i % 5 === 0)) {           
            j = j+i;            
        }
    }
    alert(j);
};

/*** Sum of Even fibonacci series  ***/

function sumOfEvenFibonaaci(){
	var sum = 0, firstNum = 0, secondNum = 1, sequence = 0;
	while (sequence <= 4000000){
		  sequence = firstNum + secondNum;
		  firstNum = secondNum;
		  secondNum = sequence;

		  if (sequence % 2 === 0){
		  	 sum = sum + sequence; 
		  }

	}
	alert(sum);
};

/*** Finding the largest prime factor of a number ***/

var isPrime = function(number) {
    var prime = true;
    var squareOfNumber = Math.round(Math.sqrt(number));
    for (var i = 2; i <= squareOfNumber; i++ ) {
        if(number%i === 0){
            prime = false;
        }
    }
    return prime;    
};

function largestFactor(number) {
    var factor = 2;
    var factorArray = [];
    while (factor <= number) {
        if(number%factor === 0) {
            if(isPrime(factor)) {
                factorArray.push(factor);
            }
        }
        factor++;
    }
   alert(Math.max.apply(null, factorArray));
};

function callLargest(){
    largestFactor(999999);
}

/*** jQuery library to call all functions when the button is clicked ***/

$(document).ready(function(){
     $('#program1').on('click', multiple3or5);
     $('#program2').on('click', sumOfEvenFibonaaci);
     $('#program3').on('click', callLargest);
});
    
