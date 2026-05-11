import React from "react";

const TransactionsPage = () => {
    
  return (
    <div className="p-8">
      {/* Header */}
      <div className="mb-8">
        <p className="text-3xl font-bold">Transactions</p>

        <p className="text-gray-500 mt-2">View all your recent transactions</p>
      </div>

      {/* Table */}
      <div className="bg-white rounded-2xl shadow-lg overflow-y-auto h-[350px] ">
        {/* Heading */}
        <div className="grid grid-cols-5 bg-gray-100 px-6 py-4 font-semibold">
          <div>Date</div>
          <div>Description</div>
          <div>Account</div>
          <div>Type</div>
          <div>Amount</div>
        </div>

        {/* Row */}
     
         <div className="grid grid-cols-5 px-6 py-5 border-t items-center">
          <p>May 12, 2024</p>

          <p>Salary Credit</p>

          <p>XXXX 1234</p>

          <p className="text-green-600 font-medium">Credit</p>

          <p className="text-green-600 font-bold">+ ₹50,000</p>
        </div>
      

      </div>
    </div>
  );
};

export default TransactionsPage;
