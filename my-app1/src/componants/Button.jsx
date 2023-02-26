
export default function Button(props){
    const {text}=props;
    const style={
        backgraundColor:"red"
    }

    return (<>
        <div style={style}>{text}</div>
    </>)

}