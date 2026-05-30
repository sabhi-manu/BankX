
import Card from "../ui/Card";
import TransferMoneyCard from "../ui/TransferMoneyCard";
import RecentTransactionsCard from "../ui/RecentTransactionsCard";
import QuickLinksCard from "../ui/QuickLinksCard";
import { useNavigate } from "react-router";
import { useAccounts, useBalance } from "../../features/accounts/hooks/useAccounts";

const DashboardContent = () => {
const navigate = useNavigate()

  const { data } = useAccounts();
  // console.log("account data :",data)
  const {data: balanceData, isPending} = useBalance(data?.account?._id)
  // console.log('see the balance :-',balanceData)

  const transferMoneyReDirectHandler = ()=>{
  navigate('/transfer')
  }
  return (
    <div className="h-screen overflow-y-auto">
      <main className="flex-1 p-6 ">
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
          <Card
            title="Total Balance"
          value={isPending ? "₹ --" : `₹${balanceData?.balance}`}
            subtitle="Across all accounts"
            icon="ri-wallet-3-line"
          />

          <Card
            title="Savings Account"
            value={`₹${0}`}
            subtitle={`XXXX ${123}`}
            icon="ri-bank-line"
          />

          <Card
            title="Total Transactions"
            value="0"
            subtitle="This Month"
            icon="ri-history-line"
          />
        </div>

        <div className="grid grid-cols-1 xl:grid-cols-3 gap-5 mt-4">
          <div onClick={transferMoneyReDirectHandler} className="xl:col-span-1">
            <TransferMoneyCard  />
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
  );
};

export default DashboardContent;
