let a = 10;
var b = 20;

{
    let m = 25;
    console.log(m); 
    var n = 26;
}

console.log(a);
console.log(b);
// console.log(m); here 'm' is let keyword hence could not be print because let have block scope.
// let variable can be print in under block only.
// & var have no block scope
console.log(n);
console.log("========================================");

////////////////////////////////////////////////////////////////////////////////////////////////////////////

/// One more example

let a1 = "Globle"; // This is global scope

function show () {
    var a3 = "Var Functional_Scope"
    let a2 = "functional_scope";  // b have boundry of function block scope
    {
        var akshayt = 100;
        let akshayv = 200;
        console.log(akshayv);
        console.log(a2);
    }

    // console.log(akshayv); - This is block scope of let keyword hence won't be print & will print only their block.
    console.log(akshayt);

    console.log("let a1 = 'Globle' = "+a1); // This is a globle scope of let
    console.log("let a2 = 'functional_scope'; = "+a2); // This is a functional scope of let
    console.log(a3); // This is a fuctional scope of var
}

show();

