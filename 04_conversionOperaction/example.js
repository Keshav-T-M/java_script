let numb = "123" //string
let numb1 = "123abc" //string
let numb2 = "keshavshetty" //string
let numb3 = null //object
let numb4 = undefined //undefined
let numb5 = true //Boolean
// let numb6 = NaN //nan( not a number)
// console.log(typeof numb6) //output Number

console.log("string(inside number) to Number")
let valueofNumb = Number(numb)
console.log(valueofNumb)
console.log(typeof valueofNumb)

console.log("\nstring(inside alphanumeric) to Number")
let valueofNumb1 = Number(numb1)
console.log(valueofNumb1)
console.log(typeof valueofNumb1)

console.log("\nstring to Number")
let valueofNumb2 = Number(numb2)
console.log(valueofNumb2)
console.log(typeof valueofNumb2)

console.log("\nnull to Number")
let valueofNumb3 = Number(numb3)
console.log(valueofNumb3)
console.log(typeof valueofNumb3)

console.log("\nundefined to Number")
let valueofNumb4 = Number(numb4)
console.log(valueofNumb4)
console.log(typeof valueofNumb4)

console.log("\nboolean to Number")
let valueofNumb5 = Number(numb5)
console.log(valueofNumb5)
console.log(typeof valueofNumb5)

//boolean conversions
let numb6  = ""
console.log("\nstring(empty string) to boolean")
let valueofNumb6 = Boolean(numb6)
console.log(valueofNumb6)
console.log(typeof valueofNumb6)

let numb7  = "keshav"
console.log("\nstring to boolean")
let valueofNumb7 = Boolean(numb7)
console.log(valueofNumb7)
console.log(typeof valueofNumb7)

// string conversions
let variable = 50
console.log("\nnumber to string")
let valueofvariable = String(variable)
console.log(valueofvariable)
console.log(typeof valueofvariable)