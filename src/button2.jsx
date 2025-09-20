function Button2(props){
    return(
        <>
        <button>{props.label}</button>
        </>
    )
}

function colorSet(){
  const [color,setColor] = useState("red");
  return(
    <>
    <h1>{color}</h1>
   <button onClick={()=> setColor ("blue")}>Change Color</button> 
    </>
  );

}

export default Button2;