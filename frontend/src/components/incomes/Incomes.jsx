import React from 'react'
import styled from 'styled-components'
import { InnerLayout } from '../../styles/Layouts'
import { useGlobalContext } from '../../context/shareGlobalContext'
import Form from '../form/Form';

function Incomes() {
    const {addIncome } = useGlobalContext();
  return (
    <IncomesStyled>

        <InnerLayout>
            <h2>Incomes</h2>
            <div className="income-content">
                <div className="form-container"> 
                <Form/>
                    <div className="incomes">
                    
                    </div>
                </div>
            </div>
        </InnerLayout>
    </IncomesStyled>
  )
}


const IncomesStyled = styled.div`


`
export default Incomes