
let name = "india";


// so there are three options are to represet string
// 1] use ''
let str1 ='hello';
// 2] use "" (recommeded)
let str2 = "he How are 'you'";
// 3] use `` (if u want to add dynamically any string in current string)
let str = `Hi Good morning ${name}`;
console.log(str);

//---------------------------------------
// nubmer
// bigint
// string
// object

 let student ={
    name:"sahil",
    age:23,
    schoolName:"SKDV",
    rollNumber:3,
 }

student.division='C';  // add 
student.name = "Animesh"; // update

delete student.rollNumber; // delete

//console.log(student) //.view
//==========================================
let myObj = {}; 
myObj.firstName = "Kedar";
myObj.lastName = "Jadhav";
//console.log(myObj);



// ========================
//let data;    // default value is undefined

let data ;  // undefined


console.log(typeof data);
console.log(data);

// --------------------
let isValid = true;
console.log(typeof isValid);
console.log(isValid);
//------------------------------
let result = null;
console.log(typeof result); // anwser should be null but now its showing object
console.log(result); // null

// -----------------------------------




// number
// BigInt
// string
// object
// undefined
// boolean
// null
// symbol

let obj = {
    name:"Kedar"
}

obj.lname="Jadhav";
//======================

let pwd = Symbol("skey");

obj[pwd] = "Newpass2@";

//=========================
console.log(obj[pwd]);



























































