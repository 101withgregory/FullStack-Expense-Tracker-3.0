import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { InnerLayout } from '../../styles/Layouts'
import { useGlobalContext } from '../../context/shareGlobalContext'
import Form from '../form/Form';
import IncomeItem from './IncomeItem';
import Button from '../Button/Button';
import { plus } from '../../utils/icons';
import Modal from '../Modal/Modal';

function Incomes() {
    const {addIncome, incomes, getIncomes ,deleteIncome, totalIncome} = useGlobalContext();
    const [isOpen, setIsModalOpen] = useState(false);

    useEffect(()=>{
        getIncomes();
    },[]) 
  return (
    <IncomesStyled>

        <InnerLayout>
            
            <div className="income-top">
               <h1>Incomes</h1> 
               <Button 
            icon={plus}
                                bPad={'.5rem'}
                                bRad={'50%'}
                                bg={'skyblue'}
                                color={'#fff'}
                                iColor={'#fff'}
                                hColor={'var(--color-green)'}
                                onClick={()=>setIsModalOpen(true)}
            
            />
            </div>
            <h2 className="income-middle total-income">Total Income: <span>${totalIncome()}</span>
            </h2>
            <div className="income-content">
                {/* <div className="form-container"> 
                <Form/> </div> */}
                    <div className="incomes">
                    {incomes.map((income)=>{
                        const {_id, title, amount , date, category, description,type} = income;
                        return <IncomeItem key={_id}
                        id={_id}
                        title={title}
                        description={description}
                        amount={amount}
                        date={date}
                        type={type}
                        category={category}
                        indicatorColor="var(--color-green)"
                        deleteItem={deleteIncome}
                        />
                    })}
                    </div>
            </div>
        </InnerLayout>
        <Modal isOpen={isOpen} closeModal={() => setIsModalOpen(false)}>
                <Form closeModal={() => setIsModalOpen(false)} />
            </Modal>
    </IncomesStyled>
  )
}


const IncomesStyled = styled.div`

display: flex;
    overflow: auto;
    .total-income{
        display: flex;
        justify-content: center;
        align-items: center;
        background: #FCF6F9;
        border: 2px solid #FFFFFF;
        box-shadow: 0px 1px 15px rgba(0, 0, 0, 0.06);
        border-radius: 20px;
        padding: 1rem;
        margin: 1rem 0;
        font-size: 2rem;
        gap: .5rem;
        span{
            font-size: 2.5rem;
            font-weight: 800;
            color: var(--color-green);
        }
    }
    .income-top{
    display:flex;
    align-items:center;
    justify-content:space-between;

    }
    // .income-content{
    //     display: flex;
    //     gap: 2rem;
    //     .incomes{
    //         flex: 1;
    //     }
    // }
    
`
export default Incomes