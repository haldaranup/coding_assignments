

const express=require('express');
const router = express.Router()
const Batch=require('../models/batch.model');

router.get("/batchs",async(req,res)=>{
    try {
        const batch=await Batch.find({}).lean().exec();
        return res.status(200).send(batch)
    } catch (error) {
        console.log(error);
    }
});

router.post("/batchs",async(req,res)=>{
    try {
        const batch=await Batch.create(req.body)
        return res.status(200).send(batch)
    } catch (error) {
        console.log(error);
    }
});
router.get("/batchs/:id",async(req,res)=>{
    try {
        const batch=await Batch.findById(req.params.id)
        return res.status(200).send(batch)
    } catch (error) {
        console.log(error);
    }
});

module.exports=router;