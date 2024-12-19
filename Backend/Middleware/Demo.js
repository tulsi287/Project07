const test=(req,res,next)=>{

    console.log("Middleware Calling!");
    next()
    

}

module.exports=test;