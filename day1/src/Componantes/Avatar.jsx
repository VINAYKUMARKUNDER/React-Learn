 function Avatar(props){

    const styles ={
       borderRadius:"50%" ,
        border:"red 1px solid"
    };
    return (
        <div>
            <img 
            style={styles}
            src={props.imgSrc} alt={props.name} 
            width={200}/>
        </div>
    )
 }

 export default Avatar;