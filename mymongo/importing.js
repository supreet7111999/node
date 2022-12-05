const {MongoClient,url,client}=require('./exporting.js');

MongoClient.connect(url,function(err,db){
    if(err) throw err;
    var dbo=db.db('college');
    dbo.collection('student').findOne({},function(err,result){
        if(err) throw err;
        console.log(result.name);
        db.close();
    });
});