const mongoose = require("mongoose")

const { Schema } = mongoose



const bookSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    body: {
        type: String,
        required: true
    },
    sectionId: {
        type: Schema.Types.ObjectId,
        ref: "section"
    },
    authorId: {
        type: Schema.Types.ObjectId
    }
},{
    timestamps: true
})

const Book = mongoose.model("book", bookSchema)

module.exports = Book