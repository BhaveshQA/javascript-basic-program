/*
Types of Operator
1. Assignment 2.Airthmetic 3.comparision 4.conditional 5.String 6.Ternary operator

*/


// Assignment operator
// it assign value to its Lefthand operand

var a = 5
var b = 5

console.log("is a and b are equal? " +a == b)
console.log("is a and b are equal? " +(a == b))
console.log(`is a and b are equal ?" ${a == b}`)


/*airthmetic operator */
console.log ( 5 + 5)
console.log ( 5 - 5)
console.log ( 5 * 5)
console.log ( 5 / 5)
console.log ( 5 % 3)

/* increment / decrement operator */

console.log('post-fix increment')
var x = 6
console.log(x) // x =6
var y = x++ // Here x value first assigned the Y operator. So Y have value 6. After assinged it increment the value of x.
console.log(x) // x = 7
console.log(y) // y = 6


console.log('Prefix increment')

var c = 6
console.log(c) //6
var d = ++c  // here it first increment the value of c and then assigned to the d variable
console.log(c) // 7
console.log(d) // 7

/* comparision operator */

console.log('Comparision Operator')
var val1 = 10
var val2 = 15

console.log(val1 > val2) //false
console.log(val1 < val2) // true
console.log(val1==val2) //false
console.log(val1!=val2) // true



/* Logical operator 
AND - Both expression should be true
OR - Any one of the expression should be true
Not - It will reverse the expression value . If expression true then it reverse to false vice-varsa
*/
console.log('Logical operator')
console.log(val1 < val2 && val1 > 0)
console.log(val1 < val2 || val1 > 0)
console.log(!(val1 < val2 || val1 > 0))


/* Exponetial Operator */
console.log (9**2) // 9*9 = 81

/*
-What is differance between == and === ?
- in == it only check the value of the variable
- in === it check the value of the variable as well as variable type

*/

var aa = 5
var bb ='5'
console.log(aa==bb) // true
console.log(aa===bb) // false



/*
Conditional(ternary) operator
-It accept the oprand 
*/

var p = 10

console.log ((p < 15 )? " p is less" : " p is grater")

