const MongoClient=require('mongodb').MongoClient; //importing mongodb module
const url="mongodb://127.0.0.1:27017/?directConnection=true&serverSelectionTimeoutMS=2000&appName=mongosh+1.6.0";


MongoClient.connect(url,(err,db)=>{
  if(err) throw err;
  const dbs=db.db('emp'); //creating a var dbs to get acces to the db 'emp';
  //to create a collection ,use :
  //syntax: .createCollection('collection_name',callback);
  // dbs.createCollection('emp2',(err,res)=>{
  //   if(err) throw err;
  //   console.log("Successfully created the collection");
  //   db.close()// to close
  // });
   //to insert data
   const x={name:'Dhruv',class:6}  //created an object
   var col=dbs.collection('emp1'); //created a var to point to the collection
   col.insertOne(x,(err,res)=>{   //inserted query
     if(err) throw err;
     console.log('Successfully inserted');
   });
});