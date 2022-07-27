
// let obj = {};

// obj.name = "Animesh";
// obj.lname = "Aptil";
// obj["full name"] = "Animesh Patil";

let obj = {
    name:"Animesh",
    lname:"patil",
    "full name":"Animesh patil",
    "show Up":function(){
        console.log("I am show function");
    }
}
// here we can say using . whatever we can do same thing we can achive using[]
// obj.show();  
// //  OR 
// obj["show"]();

obj["show Up"]();

// we can create objcet inside object

let mg = {
   name:{
     fname:"Animesh",
     lname:"patil"
   }
}

console.log(mg.name.fname);
console.log(mg["name"]["fname"]);











