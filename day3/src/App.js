
import './App.css';
import React from "react"
import Item from './Componantes/Item';

export default function App(){
    const itemData=[
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

    const style={
        border:"2px solid orange",
        padding:"30px",
        margin:"30px"
    }
    return (
        <div className="container" style={style}>     
        {itemData.map(name => (  
          <div key={name.itemId}>  
            <Item itemName={name.itemName} itemPrice={name.itemPrice}/>  
          </div>  
        ))}  
    </div>  
    );
}