// primitive types
// these are call by value (original data reference will be shared means copy of a original data)
// 7 types  : Strings , Number , Boolean , null , undefined , Symbol , BigInt


const score = 100 //Number
const scoreValue = 100.3//Number

const isLoggedIn = false//boolean

const outsideTemp = null // object 
let userEmail //undefined

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(typeof id) //symbol
console.log(typeof anotherId)//symbol
console.log(id === anotherId)//false

const bigNumber = 1234567891011121314n //BigInt