/*
Adding / Removing the function property
*/

function Square (){

	this.height = 10,
	this.width = 20

}

const sq = new Square()
console.log(sq.height)


// Add property in function
sq.length = 30


// aslo using this way add property
sq['area'] = function area () { }


// delete the property

delete sq.height




// access object property and method using for loop

for(let key in sq)
{
	//console.log(key);

	// this will print the value of the property
	//console.log(sq[key])

	if (typeof sq[key] == 'function')
	{
		console.log(sq[key])
	}
	
}



// Other way to access the object property
// this return the array of the object property
var prop = Object.keys(sq)
console.log(prop)




// to check property is in object or not

if('height' in sq)
{
	console.log("This is part of the object")
}