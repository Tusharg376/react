import React,{useState} from "react";

export default function App() {
  const [para,setPara] = useState("")
  const handleChange = (event) => {
    //console.log(event.target.value)
    setPara(event.target.value)
  }
  return (
    <div>
     your paragraph here <input value={para} onChange={handleChange}/>
     <button onClick = {() => {
     let newPara = para
       setPara(newPara.toUpperCase())
     }}> Submit </button>
     <p>{para}</p>
    </div>
  );
}
