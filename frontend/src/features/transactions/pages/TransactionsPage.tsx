import React from "react";
import { useTransaction } from "../hooks/useTransaction";
import type { TransactionResponse } from "../../../types/Auth.type";

const TransactionsPage = () => {

  const { data, isLoading } = useTransaction();

  if (isLoading) {
    return (
      <div className="h-screen flex items-center justify-center">
        <p className="text-xl font-semibold">
          Loading Transactions...
        </p>
      </div>
    );
  }

  return (
    <div className="p-8">

      {/* Header */}
      <div className="mb-8">

        <p className="text-3xl font-bold">
          Transactions
        </p>

        <p className="text-gray-500 mt-2">
          View all your recent transactions
        </p>

      </div>

      {/* Table */}
      <div className="bg-white rounded-2xl shadow-lg overflow-y-auto h-[450px]">

        {/* Heading */}
        <div className="grid grid-cols-5 bg-gray-100 px-6 py-4 font-semibold sticky top-0">

          <div>Date</div>

          <div>Description</div>

          <div>From / To</div>

          <div>Status</div>

          <div>Amount</div>

        </div>

        {/* Rows */}
        {data?.transactions?.map(
          (item: TransactionResponse) => {

            return (
              <div
                key={item._id}
                className="grid grid-cols-5 px-6 py-5 border-t items-center text-sm"
              >

                {/* Date */}
                <p>
                  {new Date(
                    item.createdAt
                  ).toLocaleDateString()}
                </p>

                {/* Description */}
                <p className="capitalize">
                  {item.description}
                </p>

                {/* Accounts */}
                <div className="flex flex-col">

                  <span className="text-xs text-gray-500">
                    From
                  </span>

                  <span>
                    {item.fromAccount.slice(-4)}
                  </span>

                  <span className="text-xs text-gray-500 mt-1">
                    To
                  </span>

                  <span>
                    {item.toAccount.slice(-4)}
                  </span>

                </div>

                {/* Status */}
                <p
                  className={`font-medium ${
                    item.status === "COMPLETE"
                      ? "text-green-600"
                      : item.status === "FAILED"
                      ? "text-red-500"
                      : "text-yellow-500"
                  }`}
                >
                  {item.status}
                </p>

                {/* Amount */}
                <p className="font-bold text-blue-600">
                  ₹ {item.amount}
                </p>

              </div>
            );
          }
        )}

      </div>
    </div>
  );
};

export default TransactionsPage;