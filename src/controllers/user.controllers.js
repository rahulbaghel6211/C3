const express=require("express");
const {body,validationResult}=require("express-validator");
const user=require("../models/user.module");
const router=express.Router();

router.post(
    "/",
    body("firstName")
    .trim()
    .isEmpty()
    .withMessage("first name canot be empty")
    .isLength({min:3,max:30})
)
body("lastName")
.isLength({min:3,max:30});

body("email")
.isEmail()
.custom(async(value)=>{
    const user=await user.findOne({email:value});
    if(user){
        throw new Error("Email is alredy taken");
    }
    return true;
})
body("age")
.not()
.isEmpty()
.withMessage("Age cannot be empty")
.isNumeric()
.withMessage("age must be a number between 1 and 150")
.custom((val)=>{
    if(val<1||val>150){
        throw new Error("Incorrect age provided");
    }
    return true;

});
async(req,res)=>{
    try {
      console.log(body("firstName"));
      const error=validationResult(req);
      console.log({errors});
      if(!errors.isEmpty()){
        return res.status(400).send({errors:errors.array()})

      }
      const user=await user.create(req.body);
      return res.status(201).send(user);

    } catch (error) {
        return res.status(500).send({message:error.message});

        
    }
}
module.exports=router;




