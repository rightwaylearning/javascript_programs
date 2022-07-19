let a = "global";  // global scope

function show(){
    let b = "functional_scope";  // b have boundry of function block scope
    {
        var block_a = 100;
        let block_b = 1000;
        console.log(block_b)
    }
    console.log(block_b)  
    // here we cant access block_b because it's declated with let keyword
    // and let keyword have block scope an access block_a because it declared with help of var keyword
    // var keyword have no block scope only function block scope & blobal scope
}


show();


