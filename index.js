const express=require('express');

const port=9000;

const app = express();

const path = require('path');

const db= require('./config/mongoose');

const Admin = require('./model/AdminModal');

app.use(express.urlencoded());

app.set('view engine','ejs');
app.set('views',path.join(__dirname,'views'));


app.get('/',(req,res)=>{
        return res.render('index');
});

// Insert Data
app.post('/insertdata',(req,res)=>{

   Admin.create({
        name : req.body.name,
        email : req.body.email,
        password : req.body.password,
        phone: req. body.phone,
        city:req.body.city,
        gender:req.body.gender,
        hobby:req.body.hobby,
        state:req.body.state
   },(err,data)=>{

        if(err){
          console.log(err);
          return false;
        }
        console.log("Record insert!!");
        return res.redirect('back');
   });

//View Data
app.get('/viewdata',(req,res)=>{
        Admin.find({},(err,record)=>{
                if(err)
                {
                        console.log("Record Not Insert");
                        return false;
                }
                return res.render('viewdata',{
                        recorddata:record   
                });

        });
});
});

// Delete Data
app.get('/deletadata/:id',(req,res)=>{

        let id=req.params.id;
        Admin.findByIdAndDelete(id,(err,data)=>{
                if(err)
                {       console.log("Data Not Delete");
                        return false;
                }
        });
        console.log("Data Deleted");
        return res.redirect('back');
});
// EditData
app.get('/editdata/:id',(req,res)=>{
        let id=req.params.id;
        Admin.findById(id,(err,singledata)=>{
                
                if(err)
                {
                        console.log("Record Not Found");
                        return false;
                }
                return res.render('editdata',{
                        single:singledata
                });
        });
});
// Update data
app.post('/updatedata',(req,res)=>{
        
        let edit_id = req.body.edit_id;
        
        Admin.findByIdAndUpdate(edit_id,{
                name : req.body.name,
                email : req.body.email,
                password : req.body.password,
                phone : req.body.phone,
                city : req.body.city,
                gender:req.body.gender,
                hobby:req.body.hobby,
                state:req.body.state
        },(err,editdata)=>{
                if(err)
                {
                        console.log("Record Not Update");
                        return false;
                }
                console.log("Record Successfully Updated");
                return res.redirect('/viewdata');
        });
});
// Server Listen
app.listen(port,(err)=>{
        if(err)
        {
            console.log("Server Not Start");
            return false;
        }
        console.log("Server Started");
});
