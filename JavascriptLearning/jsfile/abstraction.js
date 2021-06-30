/*

Abstraction : Hide the details show the essentials
-declare the property with the let so it not access directly outside the function

*/



function Employee(name, age, salary) {

	this.name = name
	this.age = age
	this.salary = salary
	let bonas = 1000

	let finalSalary = function () {
		let netsalary = salary + bonas
		return netsalary
	}

	this.getEmployeeDetails = function () {

		console.log ("Name :"+this.name + "" + " Age :" + this.age + " " + "Salary :" + finalSalary())

		// calling function from another function
		
	}

}


const emp1 = new Employee("Bhavesh",32,1000)
emp1.getEmployeeDetails()

const emp2 = new Employee("Hina", 30, 3000)
emp2.getEmployeeDetails()
