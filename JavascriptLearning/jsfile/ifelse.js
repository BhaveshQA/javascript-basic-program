/*
if statement
if else
nested if 
if else if

if((y % 400 == 0) || (y % 100 != 0) && (y % 4 == 0))
*/

//debugger
var year = 2100
if (year%4==0)
{
	if ((year%400==0) || (year%100!==0))
	{
		console.log("leap year"+ year)
	}
	else
	{
		console.log("Not leap year" + year)
	}
}

else
{
	console.log("Not leap year" + year)
}


// simple if statement
/*var no = prompt("Enter No")
if (no==10)
{
   console.log("You are great")
}*/


// if else statement

var name = "bhavesh"

if (name == "bhavesh")
{
	console.log ("You are in if block")
}

else
{
	console.log (" You are in else block")
}


// nested if statment
// second if only execute when first if condition come true


var a = 16
var b = 15
var c = 12

if (a < b)
{
	if (b>c)
	{
		console.log(" b is grater")
	}
	else
	{
		console.log(" b is smaller than c")
	}
}

else
{
	console.log(" a is grater")
}


// if else if ledder

var n = 20

if ( n == 15)
{
	console.log( " n =" + n)

}

else if(n ==20)
{
	console.log( " n =" + n)
}

else if(n == 25)
{
	console.log( " n =" + n)
}

else
{
	console ("Default")
}




//------------------------------------------

/* javascript have 5 falsy value
0,"",NaN,undefined,Null
*/


if(a = 0) {

	console.log("You lost the game")
}
else
{
	console.log("You win the game")
}

