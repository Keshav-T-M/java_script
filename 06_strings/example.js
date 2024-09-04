const name = "keshav"
const lastname = "shetty"
console.log(name + lastname)//string concatination
//string interpolation 
console.log(`Hello my first name is ${name} and my last name is ${lastname} `);
const gameName = new String('grand-theft-auto') //another way to create a stringṄṄ
//accessing string object key value
//String - prototype is object
//grandtheftauto - primitive value
console.log(gameName[0])
console.log(gameName.__proto__)
console.log(gameName.__proto__.length)
console.log(gameName.length)
console.log(gameName.toUpperCase())
console.log(gameName.charAt('6'))//it only takes positive number 
console.log(gameName.at('-14'))//we can give both positve and negative number 
console.log(gameName.indexOf('a'))
const first =  gameName.substring(-6,5)//it neglect the negative number and takes the index from 0
const middle =  gameName.substring(6,11)
const last =  gameName.substring(12,16)

console.log("first=",first ,"middle=",middle,"last =",last)
const newString = gameName.slice(2,10)
const anotherString = gameName.slice(-14, 4) // this is the only fuction that takes negative value //note = it starts form reverse of the string
console.log("slice with positive value =",newString,"\nslice with negative number =",anotherString)
let temp = "     kesh   av"
const trimfunction = temp.trim()
console.log(trimfunction)//it removes the starting space of string
const url = "https://keshav.com/keshav%20shetty"
console.log(url.replace('%20','replaced')) //we can use replace to replace a specice part of a string
console.log(url.includes('keshav'))//we can ask questions through includes
console.log(url.includes('michel'))
const temp1 = "hi-my-name-is-keshav"
console.log(temp1.split('-'))//we can divide a string and store in a array //note the seperator should be menction seperator can be any thing like "white space" and "-" anything like this unique
