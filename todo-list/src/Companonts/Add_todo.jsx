import React from "react"

export default function Addtodo(handelAdd){

    const [text, setText]= React.useState;

    const handelChange=(el)=>{
        setText(el.target.value);
    }

    const handelTodo =()=>{
        handelAdd(text);
        setText("");
    }

    return (
        <div>

        <input value={text} onClick={handelChange} placeholder="Add something"/>
        <button onClick={handelTodo}>Add todo</button>

        </div>
    )
}