
export default function Button(props){
    const {text}=props;
    const style={
        color:"tomato",
        padding:"1rem"
    }

    return (<>
        <button style={style}>{text}</button>
    </>)

}