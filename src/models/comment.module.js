const mongoose=require("mongoose");
const commentSchema=new mongoose.Schema(
    {
       body:{type:Number,required:false},
    },
    {
        versionKey:false,
        timestamps:true,
    }
    
);
module.exports=mongoose.model("user",commentSchema);