import React from "react";
import item from "./item.css"


export default function Item(props){
    // const [itemName, itemPrice]=[0,0];

   

    return (<>
        <div className="item">
            <span>{props.itemName} </span>
            <span>Ru. {props.itemPrice}</span>
        </div>

    </>)
}