import React, { useState } from "react";
import { useTransferMoney } from "../hook/useTransferMoney";
import { v4 as uuidv4 } from "uuid";


const TransferMoneyPage = () => {
  const [to, setTo] = useState("");
  const [amount, setAmount] = useState("");
  const [description, setDescription] = useState("");

  const { mutate, isPending } = useTransferMoney();

  const submitHandler = () => {
    if (!to || !amount) return;


    mutate({
      toAccount: to,
      amount,
      description,
      idempotenceKey: uuidv4(),
    });
  };

  return (
    <div className="min-h-screen bg-slate-100 px-5 py-6 overflow-y-scroll">

      {/* Header */}
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-slate-800">
          Transfer Money
        </h2>

        <p className="text-sm text-gray-500 mt-1">
          Send money securely to another account
        </p>
      </div>

      {/* Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

        {/* Left Section */}
        <div className="bg-white rounded-2xl shadow-lg p-6 h-fit">

          <h3 className="text-xl font-bold mb-5">
            Send Money
          </h3>

          <div className="flex flex-col gap-5">

            {/* To Account */}
            <div className="flex flex-col gap-2">
              <label
                htmlFor="to"
                className="font-medium text-sm text-gray-700"
              >
                To Account
              </label>

              <input
                type="text"
                id="to"
                value={to}
                onChange={(e) => setTo(e.target.value)}
                placeholder="Receiver account number"
                className="border border-gray-300 rounded-xl px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* Amount */}
            <div className="flex flex-col gap-2">
              <label
                htmlFor="amount"
                className="font-medium text-sm text-gray-700"
              >
                Amount
              </label>

              <input
                type="number"
                id="amount"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                placeholder="Enter amount"
                className="border border-gray-300 rounded-xl px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            {/* description */}
            <div className="flex flex-col gap-2">
              <label
                htmlFor="description"
                className="font-medium text-sm text-gray-700"
              >
                Description
              </label>

              <input
                type="text"
                id="description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder="Enter description"
                className="border border-gray-300 rounded-xl px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* Button */}
            <button
              onClick={submitHandler}
              disabled={isPending}
              className="bg-blue-500 hover:bg-blue-600 transition text-white rounded-xl py-3 text-sm font-semibold shadow-md"
            >
              {isPending ? (
                "Sending..."
              ) : (
                <span className="flex items-center justify-center gap-2">
                  <i className="ri-send-plane-fill"></i>
                  Send Money
                </span>
              )}
            </button>

          </div>
        </div>

        {/* Right Section */}
        <div className="flex flex-col gap-5">

          {/* Recent Transactions */}
          <div className="bg-white rounded-2xl shadow-lg p-5 max-h-[320px] overflow-y-auto">

            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-bold">
                Recent Transfers
              </h2>

              <button className="text-blue-500 text-sm font-medium">
                View All
              </button>
            </div>

            <div className="space-y-4">

              {/* Item */}
              <div className="flex items-center justify-between border-b pb-3">

                <div className="flex items-center gap-3">

                  <div className="bg-slate-100 rounded-full p-3">
                    <i className="ri-user-3-line text-lg"></i>
                  </div>

                  <div>
                    <p className="font-medium text-sm">
                      Michael Smith
                    </p>

                    <p className="text-gray-500 text-xs">
                      XXXX XXXX 1234
                    </p>
                  </div>

                </div>

                <p className="text-red-500 font-bold text-sm">
                  - ₹5,000
                </p>

              </div>

              {/* Item */}
              <div className="flex items-center justify-between border-b pb-3">

                <div className="flex items-center gap-3">

                  <div className="bg-slate-100 rounded-full p-3">
                    <i className="ri-user-3-line text-lg"></i>
                  </div>

                  <div>
                    <p className="font-medium text-sm">
                      Emma Watson
                    </p>

                    <p className="text-gray-500 text-xs">
                      XXXX XXXX 5678
                    </p>
                  </div>

                </div>

                <p className="text-green-500 font-bold text-sm">
                  + ₹10,000
                </p>

              </div>

              {/* Item */}
              <div className="flex items-center justify-between border-b pb-3">

                <div className="flex items-center gap-3">

                  <div className="bg-slate-100 rounded-full p-3">
                    <i className="ri-user-3-line text-lg"></i>
                  </div>

                  <div>
                    <p className="font-medium text-sm">
                      Sarah Johnson
                    </p>

                    <p className="text-gray-500 text-xs">
                      XXXX XXXX 8765
                    </p>
                  </div>

                </div>

                <p className="text-red-500 font-bold text-sm">
                  - ₹2,500
                </p>

              </div>

              {/* Item */}
              <div className="flex items-center justify-between">

                <div className="flex items-center gap-3">

                  <div className="bg-slate-100 rounded-full p-3">
                    <i className="ri-user-3-line text-lg"></i>
                  </div>

                  <div>
                    <p className="font-medium text-sm">
                      John Doe
                    </p>

                    <p className="text-gray-500 text-xs">
                      XXXX XXXX 4321
                    </p>
                  </div>

                </div>

                <p className="text-green-500 font-bold text-sm">
                  + ₹7,500
                </p>

              </div>

            </div>
          </div>

        </div>

      </div>
    </div>
  );
};

export default TransferMoneyPage;