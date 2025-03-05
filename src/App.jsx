
import { useDispatch, useSelector } from 'react-redux'
import './App.css'

import React, { useState } from 'react'
import { decrement, reset, increment,incrementByAmount } from './features/counter/counterSlice';

function App() {

   const [amount, setamount] = useState(0);
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();
  function handleIncrementClick() {
    dispatch(increment());
  }
  function handleDecrementClick() { 
    dispatch(decrement());
  }
  function handleResetClick() { 
    dispatch(reset());
  }
  function handleAmountClick() {
    dispatch(incrementByAmount(amount));
  }
  return (
    <div className='container'>

<button onClick={handleIncrementClick}>Increment +</button>
<p>count : {count}</p>
<button onClick={handleDecrementClick}>Decrement -</button>  
<br></br>    
<button onClick={handleResetClick}>Reset</button>
<br></br>
<input type="number" value={amount} placeholder='enter amount' onChange={(e)=> setamount(e.target.value)} />  

<br></br>
<button onClick={handleAmountClick}>Increment by Amount</button>
</div>
  )
}

export default App