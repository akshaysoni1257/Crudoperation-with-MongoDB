
const mongoose =require('mongoose');

const AdminSchema=mongoose.Schema({
        name:
        {
            type: String,
            required : true
        },
        email:
        {
            type: String,
            required:true
        },
        password:
        {
            type:String,
            required:true
        },
        phone:
        {
            type: Number,
            required: true
        },
        city:
        {
            type:String,
            required:true
        },
        gender:
        {
            type:String,
            required:true
        },
        hobby:
        {
            type:Array,
            required:true
        },
        state:
        {
            type:String,
            required:true
        }
});

const Admin = mongoose.model('Admintbl',AdminSchema);
module.exports = Admin;
