import React from "react";
import { useNavigate } from "react-router";

const RecentTransactionsCard = () => {
const navigate = useNavigate()
  const transactionReDirHandler = ()=>{
    navigate('/transaction')
  }
  return (
    <div className="px-5 py-2 shadow-2xl flex flex-col justify-between ">
      <div className="flex items-center gap-5 px-3 py-2 justify-between ">
        <p className="font-bold">Recent Transaction</p>
        <p className="font-light text-blue-500 cursor-pointer hover:text-blue-800 "  onClick={transactionReDirHandler} >View All</p>
      </div>

      
      <div className="flex  gap-5 mt-3">
        <div className="flex gap-2">
          <i className="ri-arrow-up-long-line text-3xl "></i>
          <div>
            <p className="font-medium">Transfer to Michael Smith</p>
            <p className="font-light">TXN1234567890</p>
          </div>
        </div>
        <div>
          <p className="font-bold">-$5000.00</p>
          <p className="font-light">May 12 2024</p>
        </div>
      </div>


      <div className="flex  gap-5 mt-3">
        <div className="flex gap-2">
          <i className="ri-arrow-up-long-line text-3xl "></i>
          <div>
            <p className="font-medium">Transfer to Michael Smith</p>
            <p className="font-light">TXN1234567890</p>
          </div>
        </div>
        <div>
          <p className="font-bold">-$5000.00</p>
          <p className="font-light">May 12 2024</p>
        </div>
      </div>


      <div className="flex  gap-5 mt-3">
        <div className="flex gap-2">
          <i className="ri-arrow-up-long-line text-3xl "></i>
          <div>
            <p className="font-medium">Transfer to Michael Smith</p>
            <p className="font-light">TXN1234567890</p>
          </div>
        </div>
        <div>
          <p className="font-bold">-$5000.00</p>
          <p className="font-light">May 12 2024</p>
        </div>
      </div>


      <div className="bg-blue-500  text-center text-white py-2 rounded-lg">
        <button onClick={transactionReDirHandler}>Show All</button>
      </div>
    </div>
  );
};

export default RecentTransactionsCard;
