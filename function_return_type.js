function doAdd(a,b){
  var c = a + b;
  return c;
}

var result = doAdd(10,30);
console.log(result);

console.log(">>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>");
var r1 = doAdd(10,20,30);
console.log(r1);

console.log(">>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>");

var r2 = doAdd(10);   // 10 + undefined  >> NaN
console.log(r2);

console.log(">>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>");

var r3 = doAdd();
console.log(r3);





