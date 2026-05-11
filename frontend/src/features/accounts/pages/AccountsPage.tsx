import React, { useState } from "react";
import { useAccounts } from "../hooks/useAccounts";

const AccountsPage = () => {
  const [open, setOpen] = useState<boolean>(false);

  const { isPending, isError, data, error } = useAccounts();
  console.log("data", data);

  if (isPending) {
    return (
      <div className="h-screen flex flex-col items-center justify-center gap-4">
        <div className="w-10 h-10 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>

        <p className="text-xl font-semibold">Loading Accounts...</p>
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-8 h-screen px-8 py-8">
      {/* Header */}
      <div className="flex flex-col lg:flex-row lg:justify-between gap-6 px-5">
        <p className="font-bold text-2xl">My Accounts</p>

        <div>
          <button
            onClick={() => setOpen(!open)}
            className="text-white bg-blue-500 px-5 py-1 rounded-lg"
          >
            + Open New Account
          </button>
        </div>
      </div>

      {/* Error */}
      {isError && <p className="text-center text-red-500">{error.message}</p>}

      {/* Empty State */}
      {(!data || data.length === 0) && (
        <p className="text-center text-gray-500">
          No account found. Please create one.
        </p>
      )}

      {/* Account Card */}
      {data?.length > 0 && (
        <div>
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6 shadow-2xl px-6 py-3">
            <div className="flex items-center gap-4">
              <i className="ri-bank-line text-3xl text-green-500"></i>

              <div>
                <p className="font-bold">Savings Account</p>
                <p className="font-light">XXXX XXXX 1234</p>
              </div>
            </div>

            <div>
              <p>Available Balance</p>
              <p className="font-bold">$ 123345.50</p>
            </div>

            <div>
              <p className="font-extralight">Account Type</p>
              <p>Savings</p>
            </div>
          </div>
          <div className="text-center bg-white rounded-2xl shadow-lg p-6">
            <p className="text-gray-500">Total Balance (All Accounts)</p>

            <h2 className="text-2xl font-bold text-gray-800 mt-2">
              $12,345,678
            </h2>
          </div>
        </div>
      )}

      {/* Total Balance */}
    </div>
  );
};

export default AccountsPage;
