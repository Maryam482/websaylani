import React,{useState} from 'react';

function Room() {
    const [isLit, setisLit] = useState(true);
    let [count, setCount] = useState(0);
    return (
        <div>
         <br/>   {isLit? 'Lightup' : 'dark'} <br/>
            <button onClick= {()=>setisLit(!isLit)}> Flip </button><br/>
            {/* {count? (<button onClick={() => setCount(count+1)}>count2</button>) : 'dark'} 
    <p>{count}</p> */}
            <br/> <button onClick={() => setCount(count+1)}>{count}Counting</button><br/>
        </div>
    )}
export default Room
