var f = function(){
    console.log(" I am f function");
}

function hello(a){
   a();
}

hello(f);

// =======================
function say(){
    console.log("Say, I am function say");
}

hello(say);

//========================

hello(function(){
    console.log("i am instance function");
})


hello(function good(){
    console.log(">>>>>>>>>>>>>>>");
});
// =======================

