let a = 10;
var b = 100;

{
    let m = 20;
    var n = 200;
}

console.log(a);
console.log(n);

console.log(b);
// console.log(m);
// here we can't access m varible becuase m have block scope
// but how can u access n becuase is declare with the help var keyword
// & var have no block scope

