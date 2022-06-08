//Creating the schema for the document: schema is the fields which appeqar in the document
//mongoose is the name of ODM here
const mongoose=require('mongoose');

const contactSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true //this is called the validation
    },
    {
        phone:
    }
})