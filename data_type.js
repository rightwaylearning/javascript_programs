
// 8 are simple/ primitive  
// 8 = 7 are primitive & 1 object type(referance type)

//primitive

// number
let n = 123;

// bigint
let b = 378658734658734685n;

// string
let str1 = "Hello sir";  // go with double quate
let str2 = 'Hello sir';
let str4 = "india";
let str3  = `Hello Good morning ${str4}`;

//booelan (true or false)
let isUpdated = true ; // true, false

// undefined (undefined)
let name; // is equla to lt name = undefined
console.log(name);

console.log(typeof name);
// null (null)
let fullName = null;

console.log(fullName);


// symbol 
// ---------------------------------
// object
let n1 = 100;
let  user1 = {}; // empty object
//console.log(typeof user);

let user2 = {
    uname:"sangitaB",
    age:48,
    gender:"femal"
}

// curd opertaion
// 1] view, add , update, delete
// key : string
// value : 8 data type
let n11 = 100;

let user ={
    name : "sachin",
    pwd :"Newpass2@",
    email : "abc@gmail.com"
};  // empty object

// set or add


// view 
console.log(user)  // { name: 'sachin', pwd: 'Newpass2@', email: 'abc@gmail.com' }


console.log(user.name);

// update value or some time if email field is not in object then it will create new propetry
user.email = "abcpqre@gmail.com";

console.log(user);

delete user.pwd;

console.log(user);

// -----------------------------------

let first$name = "sachin"

// [A-Z][a-z][0-9][_,$]
// never strat with number

let user5 = {
    firstName:"pqr",
    lastName:"abc",
    "account Number":536457364,
    "99num" :34534
}

console.log(user5["firstName"]); 
confirm.log(user5.firstName);
console.log(user5["account Number"])

// . vs [] operator




























    

