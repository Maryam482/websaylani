import React,{useState} from 'react';

function Temp(){
    const [isTemperature, setTemperature] = useState(72);
  return (
  <div>
        <button onClick={()=>setTemperature(isTemperature+1)}>+</button>
        <button onClick={()=>setTemperature(isTemperature-1)}>-</button>
        <p>{isTemperature}</p>
    </div>
    )
}

export default Temp;