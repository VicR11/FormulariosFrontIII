import { useState } from 'react'

const Counter = () => {
    const [counter, setCounter]= useState(0);
  
    const handleAddCart = () =>{
      setCounter(counter+1);
    }
  
    const handleRemoveCart = () =>{
      setCounter(counter-1);
    }
  
    return(
      <>
      <button onClick={handleAddCart}>+</button>
      <span>{counter}</span>
      <button onClick={handleRemoveCart}>-</button>
      </>
      
  
    )
  
  }

  export default Counter;
  