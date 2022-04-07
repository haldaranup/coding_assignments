const mongoose = require("mongoose");

const sectionSchema = new mongoose.Schema({
  sectionName: {
    type: String,
    required: true
  }
},{
  timestamps: true
});

const Section = mongoose.model("section", sectionSchema)



module.exports = Section;