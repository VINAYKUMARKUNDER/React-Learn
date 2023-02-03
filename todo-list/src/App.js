import React from 'react';
import styles from './App.css';

function App() {

  const [text, setText]=React.useState("");
  const [todos, setTodo]= React.useState([]);

  const changeHandeler=(event)=>{
    // console.log(event.target.value);
    setText(event.target.value);
  }


  const handelText=()=>{

    let newTodo={
      id: Math.random()+Date.now().toLocaleString()+text,
      title: text,
      status : false,

    }

    setTodo([...todos,newTodo])
  }

  console.log(todos)

  return (
    <div className={styles.App}>

      <div>   
        <input  value={text} onChange={changeHandeler} placeholder='add Something here'/>
        <button onClick={handelText}>Add in todo</button>
      </div>


     <div>
        {
        todos.map((data)=> (
        <div>
        
        </div>
        ))
        }
      </div> 
  
      {/* <h1>{text}</h1> */}
    </div>
  );
}

export default App;
