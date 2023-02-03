import AppCss from './App.module.css';
import Avatar from './Componantes/Avatar.jsx'
import React  from 'react';

const arr =[1,2,3,4,5,6];
const squere = arr.map((el)=> <li>{el*2}</li>);
console.log(squere)







function App() {
  const [amount, setAmount] = React.useState(0);
  const diposit =()=>{
    setAmount(amount+100);
  }

  const withDarw=()=>{
    setAmount(amount-100);
  }

  return (
   
  <div className={AppCss.main}>
 
    <h1>Amount is {amount}</h1>
    <button onClick={diposit}>Diposit 100</button>
    <button onClick={withDarw}>withDraw 100</button>

  </div>
  );
}

export default App;
