import React from 'react'
import { decrement, increment, incrementByAmount } from '../Feature/Slices.js'
import {useSelector, useDispatch} from 'react-redux'
import {useState} from 'react'

function Counter() {

    const count = useSelector((state) => state.counter.value)  // Dikhana hai to count baitha hai
    const dispatch = useDispatch() // action karna hai to dispatch
    

    const [num, setNum] = useState('')
    console.log(num)

  return (
    <div>
      <div>
        <button
        aria-label="Increment value"
        onClick={()=> dispatch(increment())}
        >
            increment
        </button>
        <span>{count}</span>
        <button
        aria-label="Decrement value"
        onClick={()=>dispatch(decrement())}
        >
            Decrement
        </button>
         <input value={num} className='border-2' type="number" onChange={(e) => {
          setNum(e.target.value)
        }}/>
        <button
        aria-label='increases by 5'
        onClick={()=>{
          dispatch(incrementByAmount(Number(num)))
        }}
        >
          IncreaseByAmount
        </button>
       
      </div>
    </div>
  )
}

export default Counter
