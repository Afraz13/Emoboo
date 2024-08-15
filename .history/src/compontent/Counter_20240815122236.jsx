import React from 'react'

function Counter() {
  return (
    <div className='d-flex justify-content-center align-items-center w-100 mt-5 flex-column'>
        <h1 style={{fontSize:'90px'}}>100</h1>
        <div className='mt-5'>
            <button className='btn btn-warning'>Decrement</button>

        </div>
      
    </div>
  )
}

export default Counter
