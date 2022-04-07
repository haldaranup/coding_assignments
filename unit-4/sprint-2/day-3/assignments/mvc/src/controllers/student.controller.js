
const express=require('express');

const router = express.Router()
const Student=require('../models/student.model');

router.get("/",async(req,res)=>{
    try {
        const student=await Student.find({}).lean().exec();
        return res.status(200).send(student)
    } catch (error) {
        console.log(error);
    }
});

router.post("/",async(req,res)=>{
    try {
        const student=await Student.create(req.body)
        return res.status(200).send(student)
    } catch (error) {
        console.log(error);
    }
});
router.get("/:id",async(req,res)=>{
    try {
        const student=await Student.findById(req.params.id)
        return res.status(200).send(student)
    } catch (error) {
        console.log(error);
    }
});

module.exports=router;