

const express=require('express');
const router=express.Router();
const Submission=require('../models/submission.model');

router.get("/",async(req,res)=>{
    try {
        const submision=await Submission.find({}).lean().exec();
        return res.status(200).send(submision)
    } catch (error) {
        console.log(error);
    }
});

router.post("/",async(req,res)=>{
    try {
        const submision=await Submission.create(req.body)
        return res.status(200).send(submision)
    } catch (error) {
        console.log(error);
    }
});
router.get("/:id",async(req,res)=>{
    try {
        const submision=await Submission.findById(req.params.id)
        return res.status(200).send(submision)
    } catch (error) {
        console.log(error);
    }
    
});

module.exports=router;