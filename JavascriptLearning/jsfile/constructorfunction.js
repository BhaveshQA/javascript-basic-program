/*
constructor function
- Objet instace created with constructor , this is special function
- It advisable to first letter of the function name should be in Capital. 
- we can use this keyword to define the property and method
- this keyword refer the new intance object
*/

function Mobile() {

	this.model = 'galaxy',
	this.getprice = function(){
		console.log(this.model + " 5000 ");
	}

}

//create object of the constructor
var lenova = new Mobile();
//Access the constructor property and method
lenova.getprice();



// constructor with parameter

function Car(model){

	this.carModel = model,
	this.carPrice = function(price) {

		this.price = price
		console.log(this.carModel + "" + price )
	}
}

// create constructor object 

var tata = new Car("TATA safari")
tata.carPrice(100000)


// primitive and ref tyep

//premitive are copied by their values
let a = 30
let b = a
a = 20

//object are copied by their reference
let d = {value :10}
let e = d
d.value = 15



let nuumber = 10

function increment(nuumber){
	nuumber++
}

increment(nuumber)
console.log(nuumber)



