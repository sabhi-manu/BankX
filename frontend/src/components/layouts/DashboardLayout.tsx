import SideNavBar from "./SideNavBar";
import Header from "./Header";

import Card from "../ui/Card";
import TransferMoneyCard from "../ui/TransferMoneyCard";
import RecentTransactionsCard from "../ui/RecentTransactionsCard";
import QuickLinksCard from "../ui/QuickLinksCard";
import AccountsPage from "../../features/accounts/pages/AccountsPage";
import Transactions from "../../features/transactions/pages/TransactionsPage";
import TransferMoneyPage from "../../features/TransferMoney/page/TransferMoneyPage";
import ProfilePage from "../../features/profile/page/ProfilePage";

const DashboardLayout = () => {
  return (
    <div className="flex max-h-screen bg-gray-100">
      
      
      <SideNavBar />

      
      <div className="flex-1 flex flex-col overflow-hidden">
        
        
        <Header />

        
        {/* <main className="flex-1 p-6 overflow-y-auto">
          
      
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
          
        </main> */}

          {/* <AccountsPage/> */}
          {/* <Transactions/> */}
          {/* <TransferMoneyPage/> */}
          <ProfilePage/>

      </div>
    </div>
  );
};

export default DashboardLayout;