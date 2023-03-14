import logo from './logo.svg';
import './App.css';
import React from 'react';


function App() {
  const [clickBtn, setClickBtn]=React.useState(0);
  const clickHandeler=()=>{
    setClickBtn(clickBtn+1);
  }
  const resetHandeler=()=>{
    setClickBtn(0);
  }
  return (
    <div className="App">
      <h1>Clicked ${clickBtn} times</h1>
      <button onClick={clickHandeler}>Click me</button>
      <button onClick={resetHandeler}>Reset</button>
    </div>
  );
}

export default App;
