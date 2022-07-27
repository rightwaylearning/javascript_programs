
let obj = {
    name:"Animesh",
    lname:"Patil",
    "fulla#name":"Animesh Patit"
}
// valid variabl name : mean u can use [A-Z][a-z][0-9][$,_]
// dont start with number

// if you want any type ket , which is wrong as per variable declaration rule , use add double ("") quate 
// then there is no any error

console.log(obj.name);
console.log(obj.lname);
// --------------------------- using[] syntax u can access any key it may be correct or wrong
console.log(obj["fulla#name"]);
console.log(obj["name"]);
