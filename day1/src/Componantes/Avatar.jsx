 function Avatar(props){

    const styles ={
       borderRadius:"40%" ,
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