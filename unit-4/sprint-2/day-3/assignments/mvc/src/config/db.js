

const mongoose=require('mongoose')
const connectdb=()=>{
    return mongoose.connect('mongodb://localhost:27017');

}
module.exports=connectdb;