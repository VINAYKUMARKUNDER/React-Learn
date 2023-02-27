
import './App.css';
import React from "react"

export default function App() {


  const [number,setNumber]=React.useState(0);
  
  // const incriment=setNumber(number+1)
  // const dicriment=0
  return (
  

    
    <div className='App'>
    <h1>Count: {number}</h1>

    <button disabled={number===10} onClick={()=>setNumber(number+1)}>Inc</button>
    <button disabled={number<=0} onClick={()=>setNumber(number-1)}>Dic</button>
    <button disabled={number===0 || number ===10} onClick={()=>setNumber(0)}>Reset</button>

    </div>
   
  );
}


