const TransferMoneyCard = () => {
  return (
    <div className=' shadow-2xl  px-5 flex flex-col  gap-3 '>
       <div>
         <h2 className='font-bold text-[20px]'>Transfer Money</h2>
         <span></span>
       </div>

        <div className='flex flex-col gap-1 '>
            <label htmlFor="fromAccount" className='font-medium'>From Account</label>
            <input type="text" name="fromAccount" id="fromAccount" placeholder='Saving Account (XXXXX 123)' className='outline-none border rounded-md px-2 py-1' />
        </div>
        <div className='flex flex-col gap-1 '>
            <label htmlFor="fromAccount" className='font-medium'>To Account</label>
            <input type="text" name="fromAccount" id="fromAccount" placeholder='Saving Account (XXXXX 123)' className='outline-none border rounded-md px-2 py-1' />
        </div>
        <div className='flex flex-col gap-1 '>
            <label htmlFor="fromAccount" className='font-medium'>Ammount</label>
            <input type="text" name="fromAccount" id="fromAccount" placeholder='$ 0.00' className='outline-none border rounded-md px-2 py-1' />
        </div>
       <div className='mt-5 mb-2'>
         <button className='bg-blue-600 text-white px-3 py-2 w-full rounded-lg '> <i className="ri-send-ins-line"></i> Send Money</button>
       </div>

    </div>
  )
}

export default TransferMoneyCard