//Promises:obejct
//Promise way 1
const promiseOne=new Promise((resolve,reject)=>{
console.log("promise done");
resolve("operation successful");
let success=true;
  if(success){
    
  }
})
promiseOne.then((result)=>{
console.log(result);
}).catch((error)=>{
console.log(error);
})
