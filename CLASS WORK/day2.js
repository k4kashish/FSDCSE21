//Synchronous and Asynchronous programming
//synchronous programming:code is executed line by line
// console.log("javascript");
// function hello(){
//     console.log("Hello, World!");
// }
// hello();
// console.log("This is synchronous programming");

// //Async programming: code is executed line by line
// const hello1=()=>{
//     setTimeout(()=> {
//         console.log("Hello World");
//     },2000);
// }
// hello1();
// console.log("This is asynchronous programming");  

// //callback
// function add(n1,n2,callback){
//     console.log(n1+n2);
//     callback();
// }
// let a=10;
// let b=20;
// add(a,b,sayHi);
// add(a,b,Hi);
// add(Hi,sayHi);
// function sayHi(){
//     console.log("This is callback");
// }

// function Hi(){
//     console.log("Hello");
// }

//create a function display(callback) that print "welcome to abes", then callback which print learning "FSD in cs"

function display(callback){
     console.log("Welcome to ABES");
     callback();
}
display(FSD);
function FSD(){
    console.log("FSD in CS");
}