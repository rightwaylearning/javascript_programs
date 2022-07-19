let a = "global";

function show(){
    let b = "function_scope";
    {
        var block_a=1111;
        let block_b=4585;
        console.log(block_b);
    }
    console.log(block_b);

}

show();