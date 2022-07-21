let a ="global";

function show(){
    let b ="function block scope";


{
 var v = 100;
 let b = 200;
 console.log(b);
}

}
show();