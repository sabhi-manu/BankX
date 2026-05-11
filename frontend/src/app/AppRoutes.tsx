import { Route, Routes } from "react-router";
import LoginPage from "../features/auth/pages/LoginPage";
import RegisterPage from "../features/auth/pages/RegisterPage";
import DashboardLayout from "../components/layouts/DashboardLayout";
import ProfilePage from "../features/profile/page/ProfilePage";
import TransactionsPage from "../features/transactions/pages/TransactionsPage";
import AccountsPage from "../features/accounts/pages/AccountsPage";
import TransferMoneyPage from "../features/TransferMoney/page/TransferMoneyPage";
import DashboardContent from "../components/layouts/DashboardContent";
import ProtectedRoute from "./ProtectedRoute";


const AppRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />



        <Route path="/" element={<ProtectedRoute><DashboardLayout /></ProtectedRoute>}>
          <Route index element={<DashboardContent />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/transaction" element={<TransactionsPage />} />
          <Route path="/account" element={<AccountsPage />} />
          <Route path="/transfer" element={<TransferMoneyPage />} />
        </Route>


      </Routes>
    </div>
  );
};

export default AppRoutes;
