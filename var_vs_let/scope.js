var a = "Niral";  // global scope

function show(){
    var b = "Sushil";  // b have boundry of function block scope
    console.log(a);
    console.log(b);
}

show();
console.log(a);
//console.log(b);


// var keyword or way of variable declaration with help of var  
// having only 2 scope that is global scope & function block scope
// var keyword scope
// 1] global
// 2] function block scope

// let have 3 scope
// 1] global
// 2] funactional block scope
// 3] block scope

