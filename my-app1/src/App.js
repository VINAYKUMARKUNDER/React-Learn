
import './App.css';
import React from "react";

function App() {
  const [amount, setAmount]=React.useState(0);
  const [time, setTime]=React.useState(0);

  const withdraw=()=>{
    setAmount(amount-100);
  }

  const deposit=()=>{
    setAmount(amount+100);
  }


  

  return (
    <>
   <div className="App">
      <h1 id='amount'>Amount: {amount}</h1>
      <button id='deposit' onClick={deposit}>Deposit 100ru.</button>
      <button id='withdraw' onClick={withdraw}>Withdraw 100ru.</button>

      <h1>Time: {time}</h1>
      
   </div>

    

    </>
  );
}

export default App;
