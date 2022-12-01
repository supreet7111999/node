const {MongoClient}=require('mongodb'); //importing the fun MongoClient
// getting url steps:
//1:) open cmd;
//2:) type mongosh
//3:) copy the path 
const url="mongodb://127.0.0.1:27017/?directConnection=true&serverSelectionTimeoutMS=2000&appName=mongosh+1.6.0";

//creating the new obj
const client =new MongoClient(url);

//we use asyn fun. to create the connection
async function getData(){
    let result= await client.connect(); //connecting the mongodb
    let db=result.db('emp');//using emp database
    let coll=db.collection('emp1'); //using emp1 collection
    let response=await coll.find({}).toArray(); //finding all the data present in the emp1 collection
    console.log(response); //printing the response
}

getData(); //calling the fun