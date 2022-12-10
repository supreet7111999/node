const express=require('express');
const MongoClient=require('mongodb').MongoClient;
const path=require('path');
const bodyParser=require('body-parser');
const url="mongodb://127.0.0.1:27017";

const app=express();
const port=4000;

app.use(bodyParser.urlencoded({extended:false}));

app.get("/",(req,res)=>{
   res.sendFile(path.join(__dirname+'/view.html')); 
});


app.post("/",(req,res)=>{  
    var name=req.body.name;
    var email=req.body.email;
    var pass=req.body.pass;
    var myobj={
        "name":name,
        "email":email,
        "pass":pass
    };
    MongoClient.connect(url,(err,db)=>{
        const dbo=db.db("emp");
        const col=dbo.collection("emp1");
        col.insertOne(myobj,(err,res)=>{
            if(err) throw err;
            console.log("inserted sucessfully");
            dbo.close;
            res.send("Yo , Inserted");
        });
    }) 
})

app.listen(port,()=>{
    console.log("server has been setup");
})