const IncomeSchema = require('../models/incomeModel')
exports.addIncome = async (req, res)=>{
    const {title, amount , category, description, date} =  req.body;

    const income = IncomeSchema({
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
        await income.save()
        res.status(200).json({message:"Income Added"})
    }catch(error){
        return res.status(500).json({ message: 'Failed to save income', error: error.message });
    }

    console.log(income)
}

exports.getIncomes = async (req, res)=>{
    try{
        const incomes = await IncomeSchema.find().sort({createdAt: -1})
        res.status(200).json(incomes)
    }catch(error){
        res.status(500).json({messagee:"Server Error"})
    }
}
exports.deleteIncomes = async (req, res)=>{
    const id = req.params.id;
    IncomeSchema.findByIdAndDelete(id).then((income)=>{
      res.status(200).json({message:"Income Deleted"})
    }).catch((err)=>{
        res.status(500).json({message:"Error"})
    })
    
}