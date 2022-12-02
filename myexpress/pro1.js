//here we will learn how to use express ??
//so express is a module or framework which is used to write the node js code in very quick way
//in large projects we generally use express js 

//importing express
const express=require('express');

//storing the express()  {express call in a variable}
const app=express();


//defining the port number
const port=4000;


//we use get method in case of if 
//which we were using in node js 
//for like if (url==='something') then this
//else this
//syntax:
// .get('path if',(req,res)=>{
//    body that will be executed when path will be same
// })
app.get("/",(req,res)=>{
   res.send("<h1>Hello World</h1>"); //we use send method instead of end();
});

//we basically use do CRUD operation
//here we have replace them with POST,GET,PUT,DELETE in case of API
//so GET means to read the data,
//POST to create
//PUT to update
//DELETE to delete

app.post("/",(req,res)=>{  //post is used to fetch the data from the form in the body
    const naam=req.body.name; //req se body(web_page) se naam(name(username)) ki value fetch kr re
})

//creating as well as listening the server
app.listen(port,()=>{
    console.log("server has been setup");
})