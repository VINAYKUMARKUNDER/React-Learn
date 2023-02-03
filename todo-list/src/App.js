import React from 'react';


function App() {

  const [amount, setAmount] = React.useState(0);

  const diposit=()=>{
    setAmount(amount+100);
  }

  const withdraw=()=>{
    setAmount(amount-100);
    console.log(amount)
  }
  

  return (
   <>
  <h1>Amout is: {amount}</h1>
  <button onClick={diposit}>Diposit 100ru.</button>
  <button onClick={withdraw}>Withdraw 100ru.</button>

   </>
  );
}

export default App;
