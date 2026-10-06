
import { useState } from "react";
function MyComponent(){
    
    const[count , setCount] = useState(0)
    function handleClick(){
           setCount( c => c + 1)     
 
    }
    function handleClickSub(){
        setCount(c => c - 1)
    }
  

    return(<>
      <h1>Counter : {count}</h1>
      <button onClick={handleClick}>+</button>
      <button onClick={handleClickSub}>-</button>
    </>)
}
export {MyComponent}