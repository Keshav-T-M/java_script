const accountId = 144553 // constant variable
let accountEmail = "Keshavshetty@gmail.com" // variable
var accountPassword = "12345" //variable *note:issue in block scope and functional scope
accountCity = "karnataka" //another type to declare a variable
let accountState; //undefined variable

// accountId = 3 //its not allowed
accountEmail = "keshav@gmail.com"
accountPassword = "67890"
accountCity = "Bangalore"

console.table([accountId , accountEmail , accountPassword , accountCity , accountState])