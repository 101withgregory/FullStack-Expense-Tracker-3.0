 const router = require('express').Router()
const { addExpense, getExpense, getExpenses, deleteExpense } = require('../controllers/expenseController')
const {addIncome, getIncomes, deleteIncomes} = require('../controllers/incomeController')


 router.post('/add-income', addIncome).get('/get-incomes', getIncomes).delete('/delete-income/:id', deleteIncomes).post('/add-expense', addExpense).get('/get-expenses', getExpenses).delete('/delete-expense/:id', deleteExpense)


 module.exports = router