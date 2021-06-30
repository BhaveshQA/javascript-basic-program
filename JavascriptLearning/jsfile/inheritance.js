/*
Inheritance >> Extends property and method of the parent class by child class
-javascript not have concept of the class . It is one type of the Object
-ES6 -javascript we can have class concept
- using the 'extends' keyword we can implement Inheritance
*/

/*class Parent{

	show() {

		console.log (" This is parent class method")
	}
	
}


class Child extends Parent
{
	display()
	{
		console.log (" this is child class")
	}
}


// create object for the child class

const ch = new Child()

// Access parent class function using the child class object

ch.show()

*/

//--------------------------------------------------



class Employee {

//initialize the property when class object created
	constructor(empName, empDivision,empExp) {
		this.name = empName
		this.exp = empExp
		this.division = empDivision

	}

	displayEmpDetails(){

		//console.log(this.name, this.exp, this.division)

		return ` I am ${this.name} working in ${this.division} division. I have total ${this.exp} year experience`

 
	}

	// In static method we can't use the this keyword

	static salary(){

		let empSalary = 10000
		return empSalary
	}


}


// Inherit the Employee class

class EmpAddress extends Employee {

	constructor(empName,empDivision,empExp,empAddress){

		// using the super() we can call the parent class constructor

		super(empName,empDivision,empExp)
		this.address = empAddress

	}

	employeeAddress(){

		return ` I am ${this.name} working in ${this.division} division. I have total ${this.exp} year experience.
		I am live at ${this.address}.I have earned ${Employee.salary()}`
	}

}

// create class object

 bhavesh = new EmpAddress("Bhavesh",'QA',10, 'Ahamedabd')
 console.log(bhavesh.employeeAddress())

// static method accessed by the class name
console.log(Employee.salary())

