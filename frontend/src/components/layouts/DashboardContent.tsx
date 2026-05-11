import React from 'react'
import Card from '../ui/Card'
import TransferMoneyCard from '../ui/TransferMoneyCard'
import RecentTransactionsCard from '../ui/RecentTransactionsCard'
import QuickLinksCard from '../ui/QuickLinksCard'

const DashboardContent = () => {
  return (
    <div className='h-screen overflow-y-auto'>
         <main className="flex-1 p-6 ">
          
      
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
            <Card />
            <Card />
            <Card />
          </div>

         
          <div className="grid grid-cols-1 xl:grid-cols-3 gap-5 mt-4">
            
            
            <div className="xl:col-span-1">
              <TransferMoneyCard />
            </div>

            
            <div className="xl:col-span-1">
              <RecentTransactionsCard />
            </div>

            
            <div className="xl:col-span-1">
              <QuickLinksCard />
            </div>
          </div>
          
        </main>
    </div>
  )
}

export default DashboardContent