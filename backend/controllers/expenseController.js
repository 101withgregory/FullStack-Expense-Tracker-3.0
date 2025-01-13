const ExpenseSchema = require('../models/expenseModel')
exports.addExpense = async (req, res)=>{
    const {title, amount , category, description, date} =  req.body;

    const expense = ExpenseSchema({
        title,
        amount,
        category,
        description,
        date
    })

    try{
        //validations
        if(!title||!category||!description||!date||!amount){
            return res.status(400).json({message:'All fields are required! '})
        }
        if(amount<=0 || amount === 'number'){
            return res.status(400).json({message:'Amount must be a positive integer'})
        }
        await expense.save()
        res.status(200).json({message:"Expense Added"})
    }catch(error){
        return res.status(500).json({ message: 'Failed to save expense', error: error.message });
    }

    console.log(expense)
}

exports.getExpenses = async (req, res)=>{
    try{
        const expenses = await ExpenseSchema.find().sort({createdAt: -1})
        res.status(200).json(expenses)
    }catch(error){
        res.status(500).json({messagee:"Server Error"})
    }
}
exports.deleteExpense = async (req, res)=>{
    const id = req.params.id;
    ExpenseSchema.findByIdAndDelete(id).then(()=>{
      res.status(200).json({message:"Expense Deleted"})
    }).catch((err)=>{
        res.status(500).json({message:"Error"})
    })
    
}