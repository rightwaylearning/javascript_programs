
let obj = {
   name :'Animesh',
   lname:'patil',
   "full name":"Animesh patil"
}

function readKey(key){
   console.log(obj[key])
}

readKey("name");
readKey("lname");
console.log(obj["full name"]);

// let keyName = "name";
// console.log(obj[keyName]); // Animesh
// console.log(obj.keyName); //undefined

// []  vs .
// simple if you want to use . operator they directly key name (which is valid)
// u have to use
// obj.name;
// in other places u can use [] also in above also we can use [] bracket

// whatever we are doing with help of . operator , same thing we can do with the
// help of [] operator but vise versa not applicable















