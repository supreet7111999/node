const {MongoClient}=require('mongodb').MongoClient; //importing mongodb module
const url="mongodb://127.0.0.1:27017/?directConnection=true&serverSelectionTimeoutMS=2000&appName=mongosh+1.6.0";
const client =new MongoClient(url);

module.exports={MongoClient,url,client};