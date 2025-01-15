import  { createContext, useState } from 'react'
import axios from 'axios'
export const GlobalContext = createContext();
const BASE_URL = "http://localhost:3000/api/v1"
function GlobalProvider({children}) {
  const [incomes, setIncomes] = useState([]);
  const [expenses, setExpenses] = useState([]);
  const [error, setError] = useState(null);


  const addIncome = async (income) =>{
    const response = await axios.post(`${BASE_URL}add-income`, income).catch((err)=>{
      setError(err.response.data.message)
    })
  }
  return (
    <GlobalContext.Provider value={addIncome}>
{children}
    </GlobalContext.Provider>
  )
}

export default GlobalProvider
