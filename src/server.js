
const app=require("/.index");
const connect=require("./configs/db");
app.listen(9999,async function(){
    try {

        await connect();
        console.log("listening on port 9999");

        
    } catch (error) {
        console.log(error)
        
    }
});