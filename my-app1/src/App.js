import "./App.css";
import react  from 'react';
import Button  from "./componants/Button";



export default function app() {

    const [user,setUser]=react.useState({});

  const userDetails={
    name:"Vinay Kumar",
    address:"Songardha",
    district:'Mirzapur',
    pincode:"231211",
    mobile:"7390016161"
  }
    function showUserData(){
      console.log(userDetails);
      setUser(userDetails);
      // return userDetails;
    }
  return (<>
      <Button text="click me"/>
        <div>
        <h1>{user.name}</h1>
        <h1>{user.address}</h1>
        <h1>{user.district}</h1>
        <h1>{user.mobile}</h1>
        <h1>{user.pincode}</h1>
        </div>
      <button onClick={showUserData}>click</button>




      
  </>)

}