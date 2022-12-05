const MongoClient=require('mongodb').MongoClient; //importing mongodb module
const url="mongodb://127.0.0.1:27017/?directConnection=true&serverSelectionTimeoutMS=2000&appName=mongosh+1.6.0";


MongoClient.connect(url,(err,db)=>{
  if(err) throw err;
  const dbs=db.db('emp');
  const x=[
    {name:'Dhruv',class:6},
    {name:'Govind',class:9},
    {name:'Arun',class:10}
    ] ; //created an object containing a lot of data
  var col=dbs.collection('emp1'); //created a var to point to the collection
  col.insertMany(x,(err,res)=>{   //inserted query
    if(err) throw err;
    console.log('Successfully inserted');
  });
});