/*

Create a Date object
there are 4 ways to create date object in the javascript
new Date()
new Date(year, month, day, hours, minutes, second, miliseconds)
Note: Javscript count month form 0 to 11. Means 0=January and 11 is December
new Date(miliseconds)
new Date(date strings)

*/

// new Date() is constructor
let currTime = new Date()
console.log(currTime)
console.log(currTime.toLocaleString())
console.log(currTime.toString())
console.log("get Year :"+currTime.getFullYear()) // return the current year
console.log("getMonth :"+currTime.getMonth()) // return the current month
console.log("getDate :"+currTime.getDate()) // return only current date
console.log("getDay :"+currTime.getDay()) // sunday =0 and saturday =6
console.log("getHours : "+currTime.getHours())
console.log("get only time :" + currTime.toLocaleTimeString())
console.log("get only date :" +currTime.toLocaleDateString())
 
/*
Date.now() : It returns the total miliseconds from 1 January 1970
*/ 

console.log(Date.now())


/* date string format */

let dat = new Date("June 20, 2021  18:10:25")
console.log(dat.toLocaleString())

/* date with miliseconds */

let mils = new Date(1624201555723)
console.log(mils.toLocaleString())
