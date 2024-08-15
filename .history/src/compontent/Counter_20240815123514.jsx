import React from 'react'

function Counter() {
  return (
    <div className='d-flex justify-content-center align-items-center w-100 flex-column mt-5  '>
        <h1 style={{fontSize:'90px'}}>100</h1>
        <div className='mt-5'>
            <button className='btn btn-warning p-3'>Decrement</button>
            <button className='btn btn-danger p-3 ms-3'>Decrement</button>
            <button className='btn btn-success p-3 ms-3'>Decrement</button>

        </div>
      
    </div>
  )
}

export default Counter
