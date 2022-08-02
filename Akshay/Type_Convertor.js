// Type Conversion

// Number
// String
// Boolean

let a = "5" * "Akshay";
console.log("\nlet a = 5 * 'Akshay'; \nAnswer is = "+ a); // answer is "NaN"
console.log("------------------------------");

//----------------------------------------------------------------------------------------------

let b = Number("");
console.log("let b = Number('');\nAnswer is = "+b);
console.log("\n");

b = Number (" ");
console.log("b = Number (' ');\nAnswer is = "+b);
console.log("\n");

b = Number ("Akshay");
console.log("b = Number ('Akshay');\nAnswer is = "+b);
console.log("------------------------------");

//----------------------------------------------------------------------------------------------

let c = Number("100");
console.log("\nlet c = Number('100');\nAnswer is = "+c);
console.log("------------------------------\n");

c = Number(false);
console.log("c = Number(false);\nAnswer is = "+c);
console.log("------------------------------\n");

c = Number("false");
console.log("c = Number('false');\nAnswer is = "+c);
console.log("------------------------------\n");

//----------------------------------------------------------------------------------------------

let d = Number(undefined);
console.log("let d = Number(Undefined);\nAnswer is = "+d);

d = Number(null);
console.log("\nd = Number(null);\nAnswer is = "+d);
console.log("------------------------------\n");

//----------------------------------------------------------------------------------------------

let e = Number({key : "123"});
console.log("let e = Number({key : '123'});\nAnswer is = "+e);
console.log("------------------------------\n");

let f = Number(72658763457373458734657836487n);
console.log("let f = 72658763457373458734657836487n;\nAnswer is = "+f);
console.log("------------------------------\n");

f = Number(72658763457373458734657836487n);
console.log("f = Number(7265876345737345873465783648)7n;\nAnswer is = "+f);
console.log("------------------------------\n");


