import { useNavigate } from "react-router";
import { useCreateAccount } from "../hooks/useCreateAccount";

const CreateAccountCard = () => {
  const navigate = useNavigate();
  const { mutate, isPending } = useCreateAccount();

  const createAccountHandler = () => {
    mutate(undefined, {
      onSuccess: () => {
        navigate("/");
      },

      onError: () => {
        alert("Account creation failed");
      },
    });
  };

  return (
    <div className="flex items-center justify-center mt-10">
      <div className="bg-white shadow-xl rounded-3xl p-8 w-full max-w-md">
        {/* Icon */}
        <div className="flex justify-center mb-5">
          <div className="bg-blue-100 p-4 rounded-full">
            <i className="ri-bank-card-line text-4xl text-blue-600"></i>
          </div>
        </div>

        {/* Heading */}
        <h2 className="text-2xl font-bold text-center text-gray-800">
          Open Your Bank Account
        </h2>

        {/* Description */}
        <p className="text-sm text-gray-500 text-center mt-3 leading-6">
          Create your secure bank account and start managing your money,
          transfers, and transactions easily.
        </p>

        {/* Features */}
        <div className="mt-6 space-y-3">
          <div className="flex items-center gap-3">
            <i className="ri-check-line text-green-500 text-lg"></i>
            <p className="text-sm text-gray-700">Secure online banking</p>
          </div>

          <div className="flex items-center gap-3">
            <i className="ri-check-line text-green-500 text-lg"></i>
            <p className="text-sm text-gray-700">Instant money transfers</p>
          </div>

          <div className="flex items-center gap-3">
            <i className="ri-check-line text-green-500 text-lg"></i>
            <p className="text-sm text-gray-700">Track all transactions</p>
          </div>
        </div>

        {/* Button */}
        <button
          onClick={createAccountHandler}
          //   disabled={isPending}
          className="w-full mt-8 bg-blue-600 hover:bg-blue-700 transition text-white py-3 rounded-xl font-semibold"
        >
          {isPending ? "Creating Account..." : "Create Account"}
        </button>
      </div>
    </div>
  );
};

export default CreateAccountCard;
