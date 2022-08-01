// type convertion
// Number()
// String()
// Boolean()

let  m  = "10" * "sachin";
//console.log(m); // NaN (not a number)

let n = Number("");  // 0
console.log(n);

n = Number(" "); // 0
console.log(n);

n =  Number("test"); 
console.log(n);  // NaN

// --------------------------

n =  Number("100"); 
console.log(">>>>>>>>>>>>>"+n);  // 1


n =  Number(false); 
console.log(n);  // 0





n =  Number(undefined); 
console.log(n);  // Nan

n =  Number(null); 
console.log(n);  // 0

//-------------------------------------------




















n =  Number({ key : "123"}); 
console.log(n);  

let big = 72658763457373458734657836487n;

n =  Number(big); 
console.log(n); 

// Number()
// Boolena()
// String()


























