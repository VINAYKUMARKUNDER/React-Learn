
import './App.css';
import React from "react"

  const showData=()=>{
    return fetch('https://jsonplaceholder.typicode.com/posts')
        .then((res)=>{
          return res.json();
        })
  }

export default function App_day3() {
  const [posts,setPosts]=React.useState([]);

  const showPostHandler=async ()=>{
    try {
      const data = await showData();
      // console.log(data);
      setPosts(data);
    } catch (error) {
      console.log(error)
    }
    
  }

  // const style={
  //   border:"1px solid black",

  // }


  return (<div className='App'>

      <h2>Posts</h2>
      <button onClick={showPostHandler}>Clik me</button>
      {/* <p>{posts}</p> */}

    
        <div>
        {posts.forEach((post)=>{
         { console.log(post.id)}
          
            <h2>post.id</h2>
           
          
        })}
  </div>
    
  
  </div>);

 
}


