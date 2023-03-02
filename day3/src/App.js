
import './App.css';
import React from "react"
import Item from './Componantes/Item';

let itemData=[
    {
        itemId:1,
        itemName:"Noddels",
        itemPrice:30,
        itemCount:1
    },
    {
        itemId:2,
        itemName:"Biryani",
        itemPrice:90,
        itemCount:1
    },
    {
        itemId:3,
        itemName:"Chips",
        itemPrice:10,
        itemCount:1
    }

]

export default function App(){
   

    const style={
        border:"2px solid orange",
        padding:"3%",
        margin:"30px auto 30px auto",
        width:"70%"
    }
    return (
        <div className="container" style={style}>     
        {itemData.map(name => (  
          <div key={name.itemId}>  
            <Item itemName={name.itemName} itemPrice={name.itemPrice} itemCount={name.itemCount}/> 
            
          </div>  

          
        ))}  

        
    </div>  
    );
}