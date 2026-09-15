import fs from 'fs';
const fileName ="student.txt"
async function createFile(){
    try{
        await fs.writeFile(fileName,"name:Kashish\n Email:abc@gmail.com")
        console.log("file created....");
    }
    catch(err){
        console.log("Error, err.message");
    }
}
//read a file
async function readFile(){
    try{
        await fs.readFile()
    }
    catch(err){
        
    }
}