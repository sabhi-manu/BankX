import React from 'react'


const Card = () => {
  return (
    <div className=' shadow-xl/30 px-2 py-3 w-3xs text-center '>
        <div className='flex items-center gap-2 ' >
           <i className="ri-wallet-line text-4xl text-blue-700 "></i>
           <p className=' font-medium '>Total Balance</p>
            
        </div>
        <div>
            <p className=' font-bold '> $ 12345678 </p>
            <p>Across all account</p>
        </div>
    </div>
  )
}

export default Card