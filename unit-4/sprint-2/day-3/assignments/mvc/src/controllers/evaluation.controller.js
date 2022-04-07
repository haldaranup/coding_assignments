

const express=require('express');
const router = express.Router()
const Evaluation=require('../models/evaluation.model');

router.get("/",async(req,res)=>{
    try {
        const evaluation=await Evaluation.find({}).lean().exec();
        return res.status(200).send(evaluation)
    } catch (error) {
        console.log(error);
    }
});

router.post("/",async(req,res)=>{
    try {
        const evaluation=await Evaluation.create(req.body)
        return res.status(200).send(evaluation)
    } catch (error) {
        console.log(error);
    }
});
router.get("/:id",async(req,res)=>{
    try {
        const evaluation=await Evaluation.findById(req.params.id)
        return res.status(200).send(evaluation)
    } catch (error) {
        console.log(error);
    }
});

module.exports=router;