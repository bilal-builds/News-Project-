import { useState } from "react";
import Nav from "./Nav";

export default function Header({getKeywords}){
// const onChangeHandler=(event)=>{
//   const value=event.target.value===''?false:true;
//  setKeywords(value);

// }
  const [active,setActive]=useState(false);
   const [keywords,setKeywords]=useState('')
  return(<>
  
   <header style={{background: active ? "red" : "pink"}}>
    <div className="logo">Awesome News</div>
    <input  onChange={getKeywords}
      
    />
    {/* <p>The keywords are:{keywords}</p> */}
    <Nav/>
   </header>
  
  </>);
}
