// All About the Object oriented programing concept
console.log ("oops concept");

// create object , object have property and method. property used for store value and method/function used for define the logic

// its same like dictionary in python , dict = { "Name" : "Bhavesh", "Job":"QA", "Age" : 32}

let circle = 
{
	radius : 1,
	location : 
	{
		x : 1,
		y : 1
	},

	draw: function() 
	{
		console.log(" Draw circle");
	}

}

// access the object property

circle.draw()
console.log(circle.location)



/*
factory function : Factory function return the new object
it can create object instance without new keyword

*/


function mobile(model){

	return {

		model : model,

		price : function(amount){

			console.log(amount)
		}
	}
}


const samsung = mobile("Galaxy")

console.log(samsung.model)
samsung.price(50000)