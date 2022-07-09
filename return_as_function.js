function sum(a){
  a = a*a;
  return a;
}

var r = sum(10);
console.log(r);
// case 1

function sayHello(){
    console.log("good >>>>>>>>>>>");
}

function test(){
    return sayHello;
}

var result = test();
result();
//========================
// case 2

function message(msg){
    return function(){
       console.log(msg);
    };
}



var f1 = message("good morning");
f1();



















