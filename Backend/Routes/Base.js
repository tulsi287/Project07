const express=require("express");
const router=express.Router();
const Testing=require("../Controler/Testing.js")


router.get("/testing",Testing.testing);

module.exports=router;