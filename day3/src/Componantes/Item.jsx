import React from "react";
import item from "./item.css"

let total=0;

export default function Item(props){
    // const [itemName, itemPrice]=[0,0];
    // console.log(App)
    total+=props.itemPrice;
    

    const [countItem, setCountItem]=React.useState(props.itemCount);

    const descHandler=()=>{
        setCountItem(countItem-1);
    }

    const incHandler=()=>{
        setCountItem(countItem+1);
    }
    return (<>
        <div className="item">
            
            <div>{props.itemName} </div>
            <div>Ru. {props.itemPrice*countItem}</div>
            <div>
                <button  disabled={countItem<=0} onClick={descHandler}>-</button>
                <div>{countItem}</div>
                <button onClick={incHandler}>+</button>
            </div>
            <div>Total: {total}</div>
        </div>

    </>)
}

