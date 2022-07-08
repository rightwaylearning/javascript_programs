

function printNumbers(a,b,c,d){
   console.log(a);
   console.log(b);
   console.log(c);
   console.log(d);
}

// here argument count & function parameter count is match
printNumbers(10,20,30,40);  
console.log("--------------------------------");
// here argument is less than parameter so pending parameters are undefined
printNumbers(1,2,3);
console.log("--------------------------------");
// if we passing more arg , fuction is just ignoring
printNumbers(5,6,7,8,9); 
console.log("--------------------------------");
// here we are passing string as arg
printNumbers("A","B","C","D");
