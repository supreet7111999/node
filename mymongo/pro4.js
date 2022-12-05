const MongoClient=require('mongodb').MongoClient; //importing mongodb module
const url="mongodb://127.0.0.1:27017/?directConnection=true&serverSelectionTimeoutMS=2000&appName=mongosh+1.6.0";

MongoClient.connect(url,(err,db)=>{
  if(err) throw err;
  const dbo=db.db('emp');
  const coll=dbo.collection('emp1');
  //filtering the data
  var query={age:20};
  coll.find(query).toArray((err,res)=>{
    if(err) throw err;
    console.log(res);
});
});