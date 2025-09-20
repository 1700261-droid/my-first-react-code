import Button2 from "./button2.jsx"
import {useState} from "react"


function Fruit(){
const x = 15;
return(
  <>  
  <h5>{(x) < 10 ? "Banana" : "Apple"}</h5>
  </>
);
}

function ColorSet(){
  const [color,setColor] = useState("any color you want");
  
  return(
    <>
    <h1>{color}</h1>

    <input type="text" placeholder="Enter Color" onChange={(e)=> setColor(e.target.value)}/>

   <button onClick={(clicked)=> setColor ("Type any Color you want (it cant change color...)")}>Change Color</button> 
    </>
  );

}


function Button(){

  const mystyles = {
    color: "red",
    fontSize: "20px",
    backgroundColor: "lightyellow",
  };

  const name = "Im a button";
  
  const Clicked = () => {
    alert("Button clicked!");
  };

  return (
    <>
        <button onClick={Clicked} style={mystyles}>{name}</button>
    </>
  )
}

const myElement = <h5>Hello World!</h5>
const myElement2 = <h5>The result of 5+5 is {5+5}</h5>

const name = "Daffyl Fran";
const age = 20;

function App() {

  return (
    <>
        <h5>Hello, My name is {name}</h5>
        <h5>I am {age} years old</h5>

        {myElement}
        {myElement2}
        <Fruit/>
        <ColorSet clicked=""/>
        <Button2 label="Click me."/>
        <Button2 label="Press me."/>
        <Button/>
    </>
  )
}

export default App
