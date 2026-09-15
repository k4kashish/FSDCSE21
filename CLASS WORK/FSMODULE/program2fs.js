const fs=require("fs");
fs.writeFile("student.txt","Name:Rahul\nRoll No: 101",(res)=>{
    if(res){
        console.log()}
    });
console.log("File Created Successfully");

 let data=fs.readFile("student.txt","utf8");

 console.log("\nFile Content:");
 console.log(data);

 fs.appendFile("student.txt","\nCourse: B.Tech CSE");
 console.log("\nFile updated successfully");