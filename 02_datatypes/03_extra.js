//parseInt
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

//<some extra examples on parseInt>
console.log(parseInt("&123"));//NaN(not a number)
console.log(parseInt("-123"));// -123
console.log(parseInt("xyz"));//NaN
//note : input can't be converted to an integer

console.log(parseInt("0x123"));// 291
console.log(parseInt("0b101"));// 0
console.log(parseInt("0o123"));// 0

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

//parseFloat
const mystr = '3.14';
const myNumb1 = parseFloat(mystr);
console.log("mystr:",myNumb1)

