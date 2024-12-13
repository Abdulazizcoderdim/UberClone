import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';

const UserSignup = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  const [captainData, setCaptainData] = useState({});

  const onSubmit = data => {
    console.log(data);
    setCaptainData(data);
    reset();
  };

  return (
    <div className="p-7 flex flex-col justify-between h-screen">
      <div>
        <img className="w-16 mb-10" src="uber-driver.svg" alt="logo" />

        <form onSubmit={handleSubmit(onSubmit)}>
          <h3 className="text-base font-medium">What&apos;s your name?</h3>
          <div className="flex gap-4 mb-4">
            <input
              type="text"
              className="bg-[#eeeeee] w-1/2 rounded px-4 py-2 border text-base placeholder:text-sm"
              required
              placeholder="First Na me"
            />
            <input
              className="bg-[#eeeeee] w-1/2 rounded px-4 py-2 border text-base placeholder:text-sm"
              placeholder="Last Name"
            />
          </div>

          <h3 className="text-base font-medium mb-2">
            What&apos;s your email address?
          </h3>
          <div className="mb-5">
            <input
              className="bg-[#eeeeee] rounded px-4 py-2 border w-full text-base placeholder:text-sm"
              required
              placeholder="example@example.com"
            />
            {errors.email && (
              <p className="text-red-500 text-xs">Invalid email address</p>
            )}
          </div>
          <h3 className="text-base font-medium mb-2">Enter your password</h3>
          <div className="mb-5">
            <input
              className="bg-[#eeeeee] rounded px-4 py-2 border w-full text-base placeholder:text-sm"
              required
              placeholder="password"
            />

            {errors.password && (
              <p className="text-red-500 text-xs">
                Password must be at least 6 characters long
              </p>
            )}
          </div>
          <button
            type="submit"
            className="bg-black mb-3 hover:bg-black/80 w-full font-semibold text-white py-2 text-lg rounded"
          >
            Login
          </button>
        </form>

        <p className="text-center">
          Already have a account?{' '}
          <Link className="text-[#10b461] hover:underline" to="/login">
            Login here
          </Link>
        </p>
      </div>

      <div className="">
        <Link
          to="/login"
          className="flex items-center justify-center bg-[#d5622d] mb-5 hover:bg-black/80 w-full font-semibold text-white py-2 text-lg rounded"
        >
          Sign in as User
        </Link>
      </div>
    </div>
  );
};

export default UserSignup;
