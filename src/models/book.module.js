const mongoose=require("mongoose");
const bookSchema=new mongoose.Schema(
    {
       like:{type:Number,required:false},
       coverImage:{type:String,required:true},
       content:{type:String,required:true},
       

    },
    {
        versionKey:false,
        timestamps:true,
    }
    
);
module.exports=mongoose.model("user",bookSchema);