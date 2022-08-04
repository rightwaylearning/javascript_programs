

// function we can caal before declaed also no problem
function test(){
    console.log("Hello Good morning...");
}

test();


//test1();
// function expression syntax if u call before declaration it will throw error
let test1 = function(){
    console.log("I am test1 function...");
}

let b = 10+20;

console.log(typeof test1);

