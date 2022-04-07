const express = require("express")


const Section = require("../models/section.model")

const router = express.Router()

router.get("/", async (req, res)=>{
    try {
        const section = await Section.find().lean().exec()
    
        return res.status(200).send(section)
        
    } catch (error) {
        console.log('error:', error)
        
    }
})

module.exports = router