//<parseInt>
const myString = "42";
const myString1 = "32.5"
const myString2 = "055"
const myString3 = "123"
const myString4 = "     345"
const myNumber = parseInt(myString);//default base-10
const myNumber1 = parseInt(myString1);//decimal part is truncated
const myNumber2 = parseInt(myString2);// leading zeros are ignored
const myNumber3 = parseInt(myString3, 10);// explicitly specify base-10
const myNumber4 = parseInt(myString4);// whiteSpace is ignored
console.log("myString:",myNumber)
console.log("myString1:",myNumber1)
console.log("myString3:",myNumber3)
console.log("myString4:",myNumber4)
console.log("myString5:",myNumber5)
//</parseInt>


//<some extra examples on parseInt>
console.log(parseInt("&123"));//NaN(not a number)
console.log(parseInt("-123"));// -123
console.log(parseInt("xyz"));//NaN
//note : input can't be converted to an integer

console.log(parseInt("0x123"));// 291
//prefix "0x" indicates that the number is in hexadecimal (base 16).
//"123" in hexadecimal is 1*16^2 + 2*16^1 + 3*16^0 which equals 256 + 32 + 3 = 291

console.log(parseInt("0b101"));// 0
//The parseInt function does not recognize the "0b" prefix as an indicator of a binary (base 2) number.
//Since the parseInt function expects decimal by default and doesn't recognize "0b", it returns 0.

console.log(parseInt("0o123"));// 0
//The parseInt function does not recognize the "0o" prefix as an indicator of an octal (base 8) number.
//Similar to the binary case, since parseInt doesn't recognize "0o", it returns 0.

console.log(parseInt("xyz"));
console.log(parseInt("@#$"));
//both xyz and @#$ are not numbers so we got NaN Output but the NaN are not same because it came from  different origns in our case one NaN is from xyz and other NaN is from @#$
//that is the reason why the below condition gives us a flase output

console.log(NaN == NaN);//false
if (5 == 5){
    console.log("both are equal")
}
else{
    console.log("not equal")
}
//</some extra examples on parseInt>


//<parseFloat>
const mystr = '3.14';
const myNumb1 = parseFloat(mystr);
console.log("mystr:",myNumb1)
//</parseFloat>


//<concatenation>
const str = "Hello" + "World";
console.log(str);
//</concatenation>


//<Type Coercion>
//node : Type coercion can lead to unexpected results in JavaScript
//implicit type conversion
let sum = "keshav" - 5;
let sum1 = "5" - 5;
let sum2 = "5" + 10;
console.log(sum);//NaN             
console.log(sum1);//0
console.log(sum2);//510

console.log(10 + "20");
console.log(9 - "5");
console.log("Java" + "Script");
console.log(" " + " ");
console.log(" " + 0);
console.log("keshav" - "Shetty");
//true = 1
//false = 0
console.log(true + true);
console.log(true + false);
console.log(false + true);
console.log(false + false);
console.log(false - true);

//</Type Coercion>