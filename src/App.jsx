import Showbox from "./components/showbox";
import Buttons from "./components/buttons";
import { useState } from "react";
function App(){
  let [calval,setcalval]=useState("");
  const clicked=(event)=>{
    let a=event.target.innerText;
    if(a=="=")
    {
      try{
      setcalval(eval(calval));
      }
      catch(error)
      {
        setcalval(error);
      }
    }
    else if(a=="C")
    {
      setcalval("");
    }
    else
    {
      setcalval(calval+a);
    }
  }
  const b=[
    {
      'first':'C',
      'seccond':1,
      'third':2
    },
    {
      'first':'+',
      'seccond':3,
      'third':4
    },
    {
      'first':'-',
      'seccond':5,
      'third':6
    },
    {
      'first':'*',
      'seccond':7,
      'third':8
    },
    {
      'first':'/',
      'seccond':'=',
      'third':9
    },
    {
      'first':0,
      'seccond':'.',
      'third':'%'
    },
  ]
  return <>
  <h1 style={{'textAlign':'center','boxShadow':'2px 2px 2px 4px'}}>CALCULATOR</h1>
  <div className="container" style={{'width':'450px'}}>
    <br />
    <Showbox show={calval}></Showbox>
    <br />
    <Buttons buttonlist={b} onbuttonclick={clicked}></Buttons>
  </div>
  </>
}
export default App;