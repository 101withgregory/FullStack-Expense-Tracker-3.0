const { default: mongoose, Schema } = require("mongoose")

const ExpenseSchema = new Schema({
    title:{
        type:String,required:true,trim:true,maxLength:50
    },
    amount:{
        type:Number,
        required:true,
        min:1,
        trim:true
    },
    type:{
        type:String,
        default:'expense'
    },
    date:{
        type:Date,
        required:true,
        trim:true
    },
    
    category:{
        type:String,
        required:true,
        trim:true
    },
    description:{
        type:String,
        required:true,
        trim:true
    },
    
}, {timestamps:true});


module.exports = mongoose.model('Expense', ExpenseSchema)