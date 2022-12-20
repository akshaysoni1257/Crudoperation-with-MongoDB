const mongoose=require('mongoose');

mongoose.connect("mongodb://localhost/crudmongodb");

const db= mongoose.connection;

db.on('error',console.error.bind(console,"Database Not Connected"));

db.once('open',(error)=>{
    if(error)
    {
        console.log("Database Not Start");
        return false;
    }
    console.log("Database Start");
});
module.exports=db;