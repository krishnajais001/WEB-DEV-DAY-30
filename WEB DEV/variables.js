/* 
    JavaScript Variables can be declared using four different ways:
    let
    const
    var 
    automatically (without any keyword)
*/
// automatically (without any keyword)=> dont use this method
x=5;
y=10;
sum=x+y;
console.log(sum);

// var => dont use this method
var a=15;
// var a=20; // this is not an error but this can create confusion
console.log(a);

// function scope of var
function varTest() {
    var b=25;   
    console.log(b);
}
// varTest();
// console.log(b); // error: b is not defined


const m = Symbol( 39 );
console.log(m);
