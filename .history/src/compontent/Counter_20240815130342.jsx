import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment, reset } from '../Redux/counterSlice'

function Counter() {

    const dispatch = useDispatch()

    const count = useSelector((state)=>state.Counter.value)
  return (
    <div style={{marginTop:'200px'}} className='d-flex justify-content-center align-items-center w-100  flex-column   '>
        <div className='border p-3 bg-secondary '>
        <h1 style={{fontSize:'70px'}}>{}</h1>
        <div className='mt-5'>
            <button onClick={()=>dispatch(decrement())} className='btn btn-warning p-3'>Decrement</button>
            <button onClick={()=>dispatch(reset())} className='btn btn-danger p-3 ms-3'>Reset</button>
            <button onClick={()=>dispatch(increment())} className='btn btn-success p-3 ms-3'>Increment</button>

        </div>
        </div>
      
    </div>
  )
}

export default Counter
