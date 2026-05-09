import React from 'react'

const QuickLinksCard = () => {
  return (
    <div className='shadow-2xl px-3 py-2'>
        <h2 className='font-bold'>Quich Links</h2>
        <div className='flex items-center gap-2 shadow-2xl border-amber-100 '>
            <i className="ri-user-line text-2xl text-blue-500 "></i>
            <p className='font-semibold'>Add Beneficiary</p>
        </div>
        <div className='flex items-center gap-2 shadow-2xl border-amber-100 '>
            <i className="ri-file-user-line text-2xl text-blue-500 "></i>
            <p className='font-semibold'> Account Statement </p>
        </div>
        <div className='flex items-center gap-2 shadow-2xl border-amber-100 '>
            <i className="ri-download-2-line text-2xl text-blue-500 "></i>
            <p className='font-semibold'> Download Report </p>
        </div>
        <div className='flex items-center gap-2 shadow-2xl border-amber-100 '>
            <i className="ri-folder-5-line text-2xl text-blue-500 "></i>
            <p className='font-semibold'> Manage Cards </p>
        </div>
    </div>
  )
}

export default QuickLinksCard