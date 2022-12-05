const express=require('express');//importing express
const app=express();//assigning the express() {call} to a var.
const path=require('path');//this module is must when we want to specify the path
const bodyParser=require('body-parser');
const port=4000;//assigning port


app.use(bodyParser.urlencoded({extended:false}));


// app.get("/",(req,res)=>{
//     req.send("C:\Users\User\Desktop\Fynd Assgn\Ass-2\NodeJS\nodeJS\nodeJS\myexpress\index.html");
// })

app.get("/",(req,res)=>{//this method will run when the method in form will be get
    console.log(path.join(__dirname+"/index.html"));
    res.sendFile(path.join(__dirname+"/index.html")); //we use send method instead of end();
});

app.post("/",(req,res)=>{//this method will run when the method in form will be post
    // res.send("<h1>Success</h1>");
    //to access the elements(tags) of the form will use body-parser
    //npm i body-parser
    console.log(req.body);//to get the requested data in the form , here body is an obj which have all the data;  
    res.send(`<h1>Welcome${req.body.name}</h1>`);//here we are sending name var of body of req 
})
 
app.listen(port,()=>{
    console.log("Server started");
})