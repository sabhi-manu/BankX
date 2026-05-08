import { useForm, type SubmitHandler } from "react-hook-form";
import { Link } from "react-router";
import Button from "../components/Button";
import bank from "../../../assets/bank.svg";
import { useRegister } from "../hooks/useRegister";


interface IFormInput {
  userName: string;
  password: string;
  email: string;
}

const RegisterPage = () => {
  const {mutate,isPending} = useRegister()
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInput>();

  const onSubmit: SubmitHandler<IFormInput> = (data) => {
    console.log(data);
    mutate(data)
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="bg-gray-100 w-full max-w-md rounded-2xl shadow-lg p-8">
        
        {/* Header */}
        <header className="flex flex-col items-center mb-8">
          <img
            src={bank}
            alt="bank logo"
            className="w-20 h-20 mb-3"
          />

          <h1 className="text-3xl font-bold text-gray-800">
            BankPro
          </h1>

          <p className="text-gray-500 text-sm mt-1">
            Create your account and start banking
          </p>
        </header>

        {/* Title */}
        <h2 className="text-2xl font-semibold text-center mb-6">
          Register
        </h2>

        {/* Form */}
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="space-y-5"
        >
          {/* Username */}
          <div className="flex flex-col">
            <label className="mb-1 font-medium text-gray-700">
              Username
            </label>

            <input
              type="text"
              placeholder="Choose a username"
              className="border border-gray-300 rounded-lg px-4 py-2 outline-none focus:ring-2 focus:ring-blue-500"
              {...register("userName", {
                required: "Username is required",
              })}
            />

            {errors.userName && (
              <p className="text-red-500 text-sm mt-1">
                {errors.userName.message}
              </p>
            )}
          </div>

          {/* Email */}
          <div className="flex flex-col">
            <label className="mb-1 font-medium text-gray-700">
              Email
            </label>

            <input
              type="email"
              placeholder="Enter your email"
              className="border border-gray-300 rounded-lg px-4 py-2 outline-none focus:ring-2 focus:ring-blue-500"
              {...register("email", {
                required: "Email is required",
              })}
            />

            {errors.email && (
              <p className="text-red-500 text-sm mt-1">
                {errors.email.message}
              </p>
            )}
          </div>

          {/* Password */}
          <div className="flex flex-col">
            <label className="mb-1 font-medium text-gray-700">
              Password
            </label>

            <input
              type="password"
              placeholder="Create a password"
              className="border border-gray-300 rounded-lg px-4 py-2 outline-none focus:ring-2 focus:ring-blue-500"
              {...register("password", {
                required: "Password is required",
               
              })}
            />

            {errors.password && (
              <p className="text-red-500 text-sm mt-1">
                {errors.password.message}
              </p>
            )}
          </div>

          {/* Terms */}
          <div className="flex items-start gap-2 text-sm text-gray-600">
            <input type="checkbox" className="mt-1" />

            <p>
              I agree to the{" "}
              <span className="text-blue-600 cursor-pointer">
                Terms & Conditions
              </span>{" "}
              and{" "}
              <span className="text-blue-600 cursor-pointer">
                Privacy Policy
              </span>
            </p>
          </div>

          {/* Button */}
          <Button text="Create Account" type="submit" isPending={isPending} />
        </form>

        {/* Footer */}
        <p className="text-center text-sm text-gray-600 mt-6">
          Already have an account?{" "}
          <Link
            to="/login"
            className="text-blue-600 font-medium hover:underline"
          >
            Login here
          </Link>
        </p>
      </div>
    </div>
  );
};

export default RegisterPage;