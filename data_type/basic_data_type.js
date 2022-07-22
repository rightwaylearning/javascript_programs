
// primitive data type in js  8

// 1] number
// 2] bigint
// 3] string
// 4] object
// 5] symbol
// 6] boolean
// 7] null
// 8] undefined

let a = 10; // number
console.log(typeof a);

let n = 3746587366348756783475638475643785;
console.log(n);
console.log(typeof n);

// bigint

let n1 = 3746587366348756783475638475643785n;
console.log(typeof n1);
console.log(n1);

// string
let str1 ='hello Good morning india';
let str2 ="hello Good morning 'india'";  // this is good option

console.log(typeof str2);
console.log(str2);
let ind = "India.";
let str3 = `hello good morning ${ind}`;
let str4 = "hello good morning ${ind}";

console.log(str4);
// --------------------------

let obj = {
    name:"Mahesh",
    age:23,
    std:8,
    status:false
};
console.log(obj);
let str6 = "He is 'good' boy";
console.log(str6);