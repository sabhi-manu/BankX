import { NavLink, useNavigate } from "react-router";
import bank from "../../assets/bank.svg";

const navItems = [
  {
    title: "Dashboard",
    icon: "ri-dashboard-line",
    path: "/",
  },
  {
    title: "Accounts",
    icon: "ri-bank-card-line",
    path: "/account",
  },
  {
    title: "Transfer Money",
    icon: "ri-exchange-dollar-line",
    path: "/transfer",
  },
  {
    title: "Transactions",
    icon: "ri-history-line",
    path: "/transaction",
  },
  {
    title: "Profile",
    icon: "ri-user-3-line",
    path: "/profile",
  },
];

const SideNavBar = () => {
  const navigate = useNavigate()
  const logoutHandler = () => {
  localStorage.removeItem("token");
  navigate("/login");
};
  return (
    <aside className="w-72 h-screen bg-[#111827] text-white flex flex-col justify-between shadow-xl">
      <div>
        <div className="flex items-center gap-3 px-6 py-5 border-b border-gray-700">
          <img src={bank} alt="bank logo" className="w-12 h-12" />

          <div>
            <h1 className="text-2xl font-bold tracking-wide">BankPro</h1>

            <p className="text-xs text-gray-400">Smart Banking</p>
          </div>
        </div>

        <nav className="mt-6 px-3 space-y-2">
          {navItems.map((item) => (
            <NavLink
              key={item.title}
              to={item.path}
              className={({ isActive }) =>
                `flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 hover:bg-blue-600 hover:translate-x-1 ${
                  isActive ? "bg-blue-600 text-white" : "text-gray-300"
                }`
              }
            >
              <i className={`${item.icon} text-lg`}></i>

              <span className="font-medium text-sm">{item.title}</span>
            </NavLink>
          ))}
        </nav>
      <button
  className="w-[90%] mx-auto mt-6 flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium text-red-400 hover:bg-red-500 hover:text-white transition-all duration-200 hover:translate-x-1"
  onClick={logoutHandler}
>

  <i className="ri-logout-box-r-line text-lg"></i>

  <span>Logout</span>

</button>
      </div>

      <div className="p-4 border-t border-gray-700">
        <div className="bg-[#1f2937] rounded-xl p-4">
          <p className="text-sm text-gray-300 leading-6">
            Manage your finances securely and efficiently with BankPro.
          </p>
        </div>
      </div>
    </aside>
  );
};

export default SideNavBar;
