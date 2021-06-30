/*
javascript Datatypes

primitive datatype
string, boolean, number, bigint, undefined, sysmbol

Difference between null and undefined

What is NaN
-it is property of the global object
isNaN() using this we can check enter data is number or not

*/




let number = 20  //number datatype
let string = 'Bhavesh'  // string datatype
let group = {a :'Apple', b:'Banana', c:'Cat'} // Object datatype
let condition = false  // boolean datatype
let vehicles = ['Bike','Car','Cycle']  // this is array datatype
let random; // this is undefined
let value = null  // this is null value 


// to check the datatype of variable
console.log(typeof(value)) // this return Object which a bug in js
console.log(typeof(condition))

console.log(number + string) // 20bhavesh
console.log(number - string) // it show Nan
console.log(string - string) // Nan
console.log(" " + " ") // blank space
console.log(false - false) // 0
console.log(true + true ) // 2
console.log(true + false) // 1
console.log(false + false) // 0
 

// string method in javascript
let fruits = 'Mango'

// display fruits in new line
let morefruits = "Mango\nApple \nBanana"  
console.log(morefruits)

//display length of string
console.log(fruits.length)     

// find the index of the character
console.log(fruits.indexOf('M')) 

// string sliceing
console.log(fruits.slice(0,3))  

// convert string in uppper case
console.log(fruits.toUpperCase(fruits))

// convert string in lower case
console.log(fruits.toLowerCase(fruits))


//replace the string
console.log(fruits.replace('Man','lan'))


// find char from string using charAt()
console.log(fruits.charAt(1))


// also retrive character by passing index no
console.log(fruits[1])

// split the string
console.log(fruits.split(''))


// check console
console.log("Close")