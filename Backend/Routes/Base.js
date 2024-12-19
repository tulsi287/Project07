const express=require("express");
const router=express.Router();
const Testing=require("../Controller/Testing.js")
const test=require("../Middleware/Demo.js")

router.get("/testing",test,Testing.testing);

module.exports=router;