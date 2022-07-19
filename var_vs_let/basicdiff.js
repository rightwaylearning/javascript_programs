'use strict'
var a = 10;
var a = 20; /// in second Js ignore var keyword 
console.log(a);

let b = 10;
let b = 20;  // SyntaxError: Identifier 'b' has already been declared

//====================================

// ReferenceError: n is not defined if use on op of programming 'use strict'
n = 100;  // js just check somebady declared n if not declare it
console.log(n);