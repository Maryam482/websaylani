import React,{useState} from 'react';

function Onoff() {
    const [isOn, setisOn] = useState(true)
  
    return (
        <div>
          <button onClick={()=>setisOn(true)}>On</button> 
          <button onClick={()=>setisOn(false)}>Off</button> 

      {isOn ? <img src="https://toppng.com/uploads/preview/light-bulb-on-off-png-11553940319kdxsp3rf0i.png"/> : <img src ="https://toppng.com/uploads/preview/light-bulb-on-off-png-11553940208oq66nq8jew.png"/>}
        </div>
    )  
}

export default Onoff
