import { useEffect, useState } from "react";
import { useSearchAccount, useTransferMoney } from "../hook/useTransferMoney";
import { v4 as uuidv4 } from "uuid";
import { useNavigate } from "react-router";
import { useTransaction } from "../../transactions/hooks/useTransaction";
import type { TransactionResponse } from "../../../types/Auth.type";

const TransferMoneyPage = () => {
  const [toAccount, setToAccount] = useState("");

  const [search, setSearch] = useState("");

  const [amount, setAmount] = useState("");
  const [description, setDescription] = useState("");

  const [debouncedSearch, setDebouncedSearch] = useState("");
  const [showSuggestions, setShowSuggestions] = useState(false);

  const navigate = useNavigate();

  const resetForm = () => {
    (setToAccount(""), setSearch(""));
    setAmount("");
    setDescription("");
    setShowSuggestions(false);
  };

  const { mutate, isPending } = useTransferMoney(resetForm);

  const { data } = useTransaction();

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedSearch(search);
    }, 500);

    return () => clearTimeout(timer);
  }, [search]);

  const { data: searchData } = useSearchAccount(debouncedSearch);

  const submitHandler = () => {
    if (!toAccount || !amount) return;

    mutate({
      toAccount,
      amount,
      description,
      idempotenceKey: uuidv4(),
    });
  };

  return (
    <div className="min-h-screen bg-slate-100 px-5 py-6 overflow-y-scroll">
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-slate-800">Transfer Money</h2>

        <p className="text-sm text-gray-500 mt-1">
          Send money securely to another account
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Left */}
        <div className="bg-white rounded-2xl shadow-lg p-6 h-fit">
          <h3 className="text-xl font-bold mb-5">Send Money</h3>

          <div className="flex flex-col gap-5">
            <div className="flex flex-col gap-2 relative">
              <label htmlFor="to" className="font-medium text-sm text-gray-700">
                To Account
              </label>

              <input
                type="text"
                id="to"
                value={search}
                onChange={(e) => {
                  setSearch(e.target.value);
                  setShowSuggestions(true);
                }}
                placeholder="Search by username or email"
                className="border border-gray-300 rounded-xl px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-blue-500"
              />

              {showSuggestions && search && searchData?.users?.length > 0 && (
                <div className="absolute top-[75px] w-full bg-white border border-gray-200 rounded-xl shadow-lg max-h-60 overflow-y-auto z-50">
                  {searchData.users.map((user: any) => (
                    <div
                      key={user._id}
                      onClick={() => {
                        setToAccount(user._id);
                        setSearch(user.userDetails.userName);
                        setShowSuggestions(false);
                      }}
                      className="px-4 py-3 hover:bg-slate-100 cursor-pointer border-b"
                    >
                      <p className="font-medium text-sm">
                        {user.userDetails.userName}
                      </p>

                      <p className="text-xs text-gray-400">
                        XXXX {user._id.slice(-4)}
                      </p>
                    </div>
                  ))}
                </div>
              )}
            </div>

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

        <div className="flex flex-col gap-5 mb-15">
          <div className="bg-white rounded-2xl shadow-lg p-5 max-h-[320px] overflow-y-auto">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-bold">Recent Transfers</h2>

              <button
                onClick={() => navigate("/transaction")}
                className="text-blue-500 text-sm font-medium hover:cursor-pointer"
              >
                View All
              </button>
            </div>

            <div className="space-y-4">
              {data?.transactions
                ?.slice(0, 3)
                .map((item: TransactionResponse) => (
                  <div
                    key={item._id}
                    className="flex items-center justify-between border-b pb-3"
                  >
                    <div className="flex items-center gap-3">
                      <div className="bg-slate-100 rounded-full p-3">
                        <i className="ri-user-3-line text-lg"></i>
                      </div>

                      <div>
                        <p className="font-medium text-sm">
                          {item.description}
                        </p>

                        <p className="text-gray-500 text-xs">
                          XXXX {item.toAccount.slice(-4)}
                        </p>
                      </div>
                    </div>

                    <p className="font-bold text-sm">₹ {item.amount}</p>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TransferMoneyPage;
