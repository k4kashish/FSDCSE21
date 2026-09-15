class MyEmitter extends eventemitter{}
const event=new MyEmitter()
event.on("greet",()=>{
    console.log(`hello ${msg}`);//Template literals: `${var}`
})
event.on("exit",()=>{
    console.log("exits myemitter application...");
})
event.emit("greet","CSE 21 this is your fsd class");
event.emit("exit");

