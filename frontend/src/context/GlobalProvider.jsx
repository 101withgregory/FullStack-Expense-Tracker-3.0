import  { createContext, useState } from 'react'
import axios from 'axios'
export const GlobalContext = createContext();
const BASE_URL = "http://localhost:3000/api/v1/"
const  GlobalProvider= ({children})=> {
  const [incomes, setIncomes] = useState([]);
  const [expenses, setExpenses] = useState([]);
  const [error, setError] = useState(null);

  //adding an income to DB
  const addIncome = async (income) =>{
    const response = await axios.post(`${BASE_URL}add-income`, income).catch((err)=>{
      setError(err.response.data.message)
    })
    getIncomes();
  }
  //getting all incomes
  const getIncomes = async()=>{

    const response = await axios.get(`${BASE_URL}get-incomes`)
    setIncomes(response.data)
  }

  //delete an income
  const deleteIncome = async (id)=>{
    const response = await axios.delete(
      `${BASE_URL}delete-income/${id}`
    )
    getIncomes()
  }
  //total income
  const totalIncome = ()=>{
    let totalIncome = 0 ;
    incomes.forEach((income)=>{
      totalIncome += income.amount
    })
    return totalIncome;
  }
  //CALCULATING EXPENSES
  const addExpense = async (income) => {
    const response = await axios.post(`${BASE_URL}add-expense`, income)
        .catch((err) =>{
            setError(err.response.data.message)
        })
    getExpenses()
}

const getExpenses = async () => {
    const response = await axios.get(`${BASE_URL}get-expenses`)
    setExpenses(response.data)
}

const deleteExpense = async (id) => {
    const res  = await axios.delete(`${BASE_URL}delete-expense/${id}`)
    getExpenses()
}

const totalExpenses = () => {
    let totalIncome = 0;
    expenses.forEach((income) =>{
        totalIncome += income.amount
    })

    return totalIncome;
}


const totalBalance = () => {
    return totalIncome() - totalExpenses()
}

const transactionHistory = () => {
    const history = [...incomes, ...expenses]
    history.sort((a, b) => {
        return new Date(b.createdAt) - new Date(a.createdAt)
    })

    return history.slice(0, 3)
}

  return (
    <GlobalContext.Provider value={{ addIncome,
      getIncomes,
      incomes,
      deleteIncome,
      expenses,
      totalIncome,
      addExpense,
      getExpenses,
      deleteExpense,
      totalExpenses,
      totalBalance,
      transactionHistory,
      error,
      setError}}>
{children}
    </GlobalContext.Provider>
  )
}

export default GlobalProvider
