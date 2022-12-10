const express=require('express');
const MongoClient=require('mongodb').MongoClient;
const path=require('path');
const app=express();
const bodyParser=require('body-parser');
const url="mongodb://127.0.0.1:27017";

app.use(bodyParser.urlencoded({extended:false}));
const port=3000;

app.get("/",(req,res)=>{
    res.sendFile(path.join(__dirname+'/view.html')); 
 });

app.post("/",(req,res)=>{
    MongoClient.connect(url,(err,db)=>{
        const dbo=db.db("emp");
        const col=dbo.collection("emp1");
        col.findOne({},(err,result)=>{
            if(err) throw err;
            res.send(result);
        });
        dbo.close;
    }) 
}) 


app.listen(3000);