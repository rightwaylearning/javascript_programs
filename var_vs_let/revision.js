'use strict'
var a = 10;
var a = 20; // here var keyword just ignore

//--------------------

n = 20;  // js consodering here var is available

//------------------------------
// scope var have only 2 scope that is function block scope & global scope

//---------------------------------------
var s1 = 10;

{
   var b1 = 30; 
}

function showUp(){
    var s3 = 100;
    {
        var s4 = 200;
    }
    console.log(s4);
    console.log(s3);
}


showUp();





// interveiw question diff between let & var
 // 1] let extra block scope but var have only 2 scope