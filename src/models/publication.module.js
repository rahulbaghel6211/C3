const mongoose=require("mongoose");
const publicationSchema=new mongoose.Schema(
    {
       name:{type:String,required:false},
     

    },
    {
        versionKey:false,
        timestamps:true,
    }
    
);
module.exports=mongoose.model("user",publicationSchema);