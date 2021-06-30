/*

backslash escape (\) : turn special character into string
-it used when we want to escape special character defined in string
- when we required doble quotes inside string the define string in single quotes
*/

let str = " we are only \"indian\". "
console.log(str)

let str1 = 'we are only "indian".' 
console.log("withsingle quotes  "+ str1)

/*
 indexOf() - It strart search from left to right in the string
 It returns the first occurenace of the searched element
*/

let str2 = 'Bhavesh'
console.log("indexOf :"+str2.indexOf('h'))

/* 
lastIndexOf(searchstring, fromIndex) : fromIndex is optional
It start search from right to left
return -1 if string not find.
- if searchvalue is " " then it return the fromIndex
*/
let str3 = 'Bhavesh'
console.log("lastIndexOf :"+str3.lastIndexOf('h'))


/*
search() >> it returns the position of the searched string
-we can't pass the fromindex in search()

*/

console.log("search() :"+str3.search('h'))


/*
slice(startIndex,endIndex)
-It not count the endIndex while slicing the string
-Using the slice we can display data as per requirement. like [0,280] >>it display string character upto 280

*/

const str4 = 'Hello Alliens how are you?'
const slic = str4.slice(5,-2) // it remove 2 character from the last string
const s1 = str4.slice(5)
console.log(slic)
console.log(s1)


/*
substring() 
-This method is same like the slice(), but the difference it that it can't accept the negative index

*/

const str5 = "Apple, Banana, Mango"
const subst = str5.substring(7,-2)
const subsr = str5.substr(7,-2)
console.log(subsr)
console.log(subst)


/*

replace(searchtext, replacetext)
- it replace the text with search text
- bydefualt it replace the first match among the multiple match
- it is case sensitive
*/

const str6 = "Hello, John how are you? "
const replace = str6.replace('John','James')
console.log(str6,replace)


/*

charAt() - It return the character position index

*/

//const str6 = "Hello, John how are you? "
console.log(str6.charAt(0))


/*

charCodeAt() - return the Unicode of the provided character from the string
*/

const strabc = 'abc'
console.log(strabc.charCodeAt('a'))


/* uppercase and lowercase */

console.log(strabc.toUpperCase())
console.log(strabc.toLowerCase())

/* concat() method */

const fname = 'Bhavesh'
const lname = 'Rathod'

console.log(fname.concat(lname))
console.log(fname.concat(" ",lname))

/* trim() 
-it removes the whitespace from start and end
*/

const demo = "              Hello  Bhavesh            "
console.log(demo.trim())


/* split() -using this we can convert string into the array */

const text = 'a,b,c,d,e,f'
console.log(text.split())
console.log(text.split("  "))