import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';

const CaptainLogin = () => {
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

  console.log(captainData)

  return (
    <div className="p-7 flex flex-col justify-between h-screen">
      <div>
        <img className="w-16 mb-10" src="uber-driver.svg" alt="logo" />

        <form onSubmit={handleSubmit(onSubmit)}>
          <h3 className="text-lg font-medium mb-2">
            What&apos;s your email address?
          </h3>
          <div className="mb-7">
            <input
              {...register('email', {
                required: true,
                pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: 'Invalid email address',
              })}
              name="email"
              id="email"
              className="bg-[#eeeeee] rounded px-4 py-2 border w-full text-lg placeholder:text-base"
              type="email"
              required
              placeholder="example@example.com"
            />
            {errors.email && (
              <p className="text-red-500 text-xs">Invalid email address</p>
            )}
          </div>
          <h3 className="text-lg font-medium mb-2">Enter your password</h3>
          <div className="mb-7">
            <input
              {...register('password', {
                required: true,
                minLength: 6,
                message: 'Password must be at least 6 characters long',
              })}
              className="bg-[#eeeeee] rounded px-4 py-2 border w-full text-lg placeholder:text-base"
              type="password"
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
          Join a fleet?{' '}
          <Link className="text-[#10b461] hover:underline" to="/captain-signup">
            Register as a Captain
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

export default CaptainLogin;
