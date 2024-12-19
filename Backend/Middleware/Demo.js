const test=(req,res,next)=>{
     const date=new Date();
    console.log(`Date:${date}, Url: ${req.originalUrl}`);
    next()
    

}

module.exports=test;