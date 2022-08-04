
let arr = [1,2,3,4,5]; // if array size is 5 then valid index strat from 0 to 4

console.log(arr);

console.log(arr[0]);

console.log(arr[5]);

let arr1 ={
    '0':10,
    '1':20,
    '2':30,
    '3':40,
    '4':50
}

console.log(arr1['2']);
console.log(arr['2']);

arr1.test = function(){
    console.log("I am object function");
}

arr1.test();

arr.test1 = function(){
    console.log("I am array function");
}

arr.test1();

console.log(arr.length);

arr['102'] = 6;

console.log(arr.length);

console.log(typeof arr);

  