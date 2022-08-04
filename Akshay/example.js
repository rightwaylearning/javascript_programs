var a = NaN * 100;
console.log(a);

let abc = "Akshay Tejale";
let pqr = `Hello ${abc} sir`;
// let msg =`Good morning ${str} sir`
console.log(pqr);

let user = {
    
    'UserName' : 'Akshay',
    'Password' : 'a1234'
}

let p = Symbol('Password');
user [p] = 'npass12';
user.password = 'ad123';

console.log(user);
