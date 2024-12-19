const Express=require("express");
const app=Express();
const router=Express.Router();
const Base=require("./Routes/Base.js")
app.listen(8000,()=>{
    console.log("App start on port 8000");
    
})
app.use(Base);



