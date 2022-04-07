const mongoose = require("mongoose")

const authorSchema = new mongoose.Schema({
    first_name: {
        type: String
    },
    last_name: {
        type: String
    },
    sectionId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "section"
    }
},{
    timestamps: true
})

const Author = mongoose.model("author", authorSchema)

module.exports = Author