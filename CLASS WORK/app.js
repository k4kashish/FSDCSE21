//function in js:block of code
//syntax :
//function fname(){
//}
//fname();
function add (num1, num2){
    console.log(num1+num2);
}
add(2,1);
function add1 (num1,num2){
    return num1+num2;
}
add1(2,1);

//arrow function
//variable in js : container to store data
//var,let,const
//syntax: ()=>{}
    const add2=()=>{
console.log("arrow function")
}
add2();
const add3=(num1,num2)=>{
    return num1+num2;
}
console.log(add3(2,1));

//arguments:array like objects
function addNum()
{
    console.log(arguments);
}
addNum(2,1,3,4,5,6,7,8,9,10);

//node js: runtime environment to run js code outside the browser