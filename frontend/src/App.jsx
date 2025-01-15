import { useMemo, useState } from 'react';
import './App.css';
import styled from 'styled-components';
import bg from './img/img/bg.png';
import { MainLayout } from './styles/Layouts';
import Orb from './components/Orb/Orb';
import Navigation from './components/Navigation/Navigation';
import Dashboard from './components/Dashboard/Dashboard';
import Expenses from './components/expenses/Expenses';
import Incomes from './components/incomes/Incomes';
import { useGlobalContext } from './context/shareGlobalContext';


function App() {
  const [clicked, setClicked] = useState(1);
  const orbMemo = useMemo(()=>{
       return <Orb/>
  },[])
  const global = useGlobalContext();
  console.log(global)
  const displayData = ()=>{
    switch(clicked){

      case 1:
        return <Dashboard/>
      case 2:
        return <Dashboard/>
      case 3:
        return <Incomes/>
      case 4:
        return <Expenses/>
      default: return <Dashboard/>
    }
  }
  return (
    <AppStyled $bg={bg} className="App">
      {orbMemo}
      <MainLayout>
        <Navigation clicked={clicked} setClicked={setClicked}/>
        <main>

        {displayData()}
        </main>
      </MainLayout>
    </AppStyled>
  );
}

const AppStyled = styled.div`
  height: 100vh;
  background-image: url(${(props) => props.$bg});
  position: relative;
  main{
  flex:1;
  background:rgba(252, 246, 249, 0.78);
  border: 3px solid #FFFFFF;
  backdrop-filter:blur(4.5px);
  border-radius:16px;
  overflow:auto;
  overflow-x:hidden;
  &::-webkit-scrollbar{
  width: 0;
  }
  }
`;

export default App;
