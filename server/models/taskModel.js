const mongoose = require("mongoose");

const taskSchema =  new mongoose.Schema({
    title : {
        type : String,
        require : true 
    },
    description :{
        type : String,
        require : true
    },
    active :{
        type : Boolean,
        require : true
    
    }
})

module.exports = mongoose.model('task', taskSchema);