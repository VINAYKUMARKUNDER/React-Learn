
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
    return (<>
           
           {/* <div><Item itemName="Noddels" itemPrice={30}/></div> */}

          <div> {itemData.forEach((data)=>{
            // <Item itemName={data.itemName} itemPrice={data.itemPrice}/>
            <ul>
                <li key={data.itemId}>{data.itemName}</li>
            </ul>
            // console.log(data)
           })}
    </div>
    </>);
}