
import './App.css';
import React from "react"

export default function App() {


  const [number,setNumber]=React.useState(0);
  
  const incriment=3
  const dicriment=0
  return (
  

    
    <div className='App'>
    <h1>Count: {number}</h1>

    <button onClick={incriment}>Inc</button>
    <button onClick={dicriment}>Dic</button>

    </div>
   
  );
}


