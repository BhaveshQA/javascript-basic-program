/* 
- Array datatype
- Array store the multiple data store in single variable
- Array is class and arrays is prototype of the class
*/

/*
Array declaration
*/


let fruits = ['Banana', 'Mango', 'WaterMelon', 'Grapes'];
let veggie = ['potato','tomato']

// access the array item by passing index
console.log(fruits[1]);


// change the array item 
fruits[0] = 'Orange'

// print all array items on console

console.log(fruits)

// find length of the array
// length start with 1 and index startwith 0
console.log(fruits.length)

// access the last element of array
console.log(`last element of the array ${fruits.length-1}`)
// access array elements using the for loop

console.log("Element Access Using simple for loop")
for(i =0 ; i<fruits.length; i++)
{
	console.log(fruits[i])
}


// access array elements using the for in loop

console.log("Element access using the for..in ")
for (let element in fruits)
{   // using this we find the index of element
	console.log(element)

	// using this we can get the element
	console.log(fruits[element])
}

// access element using the for..of loop
console.log("Element Access Using the for..of loop")

for(let e of fruits)
{
	console.log(e)
}


// access element using the forEach loop
console.log("Access Element using the forEach loop")

fruits.forEach(function(ele, index, array ){
	console.log(ele)
})


// create fat-arrow function
console.log("fat - arrow function")
fruits.forEach((ele, index, array )=>{
	console.log(ele)
})

/* 

indexOf method
if element found then return index
if element not found then return -1

*/
console.log("indexOf() : "+(fruits.indexOf('Mango')))
console.log("indexOf() : "+(fruits.indexOf('Mango', 3)))


/*
find() >> It returns the first index of the element which satisfy the condition
-it return undefined if not found

*/
console.log("find() function")
var ages = [15, 20, 25, 26, 30, 31]
//var age18 = ages.find(age => age > 18)
var age = ages.find(checkage)
function checkage(age)
{
	return  age > 40
}
console.log(age)



/* 
  filter() method
- It create new array from the existing array based on the filter criteria

*/
console.log("filter() function")
var ages = [15, 20, 25, 26, 30, 31]
var age18 = ages.filter(age => age > 25)
console.log(age18)


/* 
splice() method
-it can used for remove,replace or add new element in the array
-splice(startIndex, DeleteIndex, 'value')
-this method return the deleted item from the  array
*/
console.log('splice method')
const  months = ['jan','feb','march','apil']
// 4 = index where element add, 3 = afer this index , 'may' >> element which need to add
months.splice(4,3,'may')
console.log(months)

console.log('Update value in the array')

const updateMonth = months.indexOf('march')
if (months != -1)
{
	months.splice(updateMonth,1,'March')
	console.log(months)
}
else
{
	console.log('Element not found')
}

console.log("Delete Element from Array")

const delMonth = months.indexOf('March')
if (months != -1)
{
	months.splice(delMonth,1)
	console.log(months)
	console.log(delMonth)
} 
else
{
	console.log('Element not found')
}

////////////////////////////////////////////////////

/*
map()
- this will return new array with perform action on element as per method
- this is not change the original array. It create new array after perform action
*/

console.log('Map() method')

let count = [ 1 , 5, 6 ,7, 9]
const pow = count.map(curEle => curEle ** 2).filter(curEle => curEle > 30)
console.log(pow)

// convert array to string
console.log(fruits.toString())

// join the array item 
console.log(fruits.join('='))

// remove the last item from array
console.log(fruits.pop(),fruits)


// Add items in exiting array list
console.log(fruits.push('poligrains'),fruits)


// remove the item on first index
console.log(fruits.shift("grapes"),fruits)

// add item on first index
console.log(fruits.unshift("grapes"),fruits)

// combine two array

let grocery = fruits.concat(veggie)
console.log(grocery)

// array slice
console.log(grocery.slice(1,4))

//reverse the array item list
//console.log(grocery.reverse())


// sorting of array items
console.log(grocery.sort())

// numeric array

let num = [5,4,3,2,1]
console.log(num.sort())
