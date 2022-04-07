const express = require("express")
const Author = require("../models/author.model")

const router = express.Router()


router.post("/", async (req, res)=>{
    try {
        const author = await Author.create(req.body)
        return res.status(201).send(author)
    } catch (error) {
        console.log('error:', error)
        
    }
})




module.exports = router