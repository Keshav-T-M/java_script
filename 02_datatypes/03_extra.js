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


//parseFloat
const mystr = '3.14';
const myNumb1 = parseFloat(mystr);
console.log("mystr:",myNumb1)

