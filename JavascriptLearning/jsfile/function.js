/*

function : It is block of the code to perform the particular task
1. create a function
2. call the function
*/

/*function greeting() {

	var name = prompt("Say your name please");
	var greet = "Hello " + name 
	console.log(greet)
}

// call function
greeting()*/

// simple function

function add(){

	var a = 5, b = 5 , 
	c = a + b

	// if we not write console.log inside the block then while calling function it print 'undefined'
	// so avoid above case just return the value
	return c
}

console.log(add())


/* function with the argument
- function parameter are that value which we defined in function defination
- function with real value is called argument.
*/

function sum (num1 , num2) {
	
	sum = num1 + num2;
	console.log(sum)

}

sum(10 , 20)

//---------------------------------------------------


/*
 function expression : create function and put into a variable
*/


function sub(val1, val2){

	var substract = val1 - val2

	return substract
}


var funExpr = sub(15, 10)
console.log(funExpr)


//-----------------------------------------------------------

/*
anonymous function : function without name is called as anonymous function

*/


var division = function(n1 , n2) {

	return n1/n2

}

var div = division(50,10)
console.log(div)


/*
function with default parameter

*/

function default_(a , b=5){
	return a * b
}

def = default_(6)
console.log(`${def}`)