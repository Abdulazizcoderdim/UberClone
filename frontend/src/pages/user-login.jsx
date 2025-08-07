import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { UserDataContext } from "../context/user-context";
import $axios from "../http";

const UseerLogin = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [userData, setUserData] = useState({});

  const { user, setUser } = useContext(UserDataContext);
  const navigate = useNavigate();

  const onSubmit = async (data) => {
    const res = await $axios.post("/users/login", data);
    console.log(res.response.data.message);

    if (res.status === 200) {
      const data = res.data;
      setUser(data.user);
      localStorage.setItem("token", data.token);
      navigate("/home");
    }
  };

  console.log(errors);
  console.log(userData);
  return (
    <div className="p-7 flex flex-col justify-between h-screen">
      <div>
        <img className="w-16 mb-3" src="uber-logo.png" alt="logo" />

        <div>
          <h2 className="text-[#1C160C] tracking-light text-[28px] font-bold leading-tight px-4 text-center pb-3 pt-5">
            Welcome Back!
          </h2>
          <p className="text-[#1C160C] text-base font-normal leading-normal pb-3 pt-1 px-4 text-center">
            Please log in to continue.
          </p>
        </div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <h3 className="text-[#1C160C] text-base font-medium leading-normal pb-2">
            What&apos;s your email address?
          </h3>
          <div className="mb-7">
            <input
              {...register("email", {
                required: true,
                pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: "Invalid email address",
              })}
              name="email"
              id="email"
              className="bg-[#eeeeee] rounded-lg px-4 py-2 border w-full text-lg placeholder:text-base"
              type="email"
              required
              placeholder="example@example.com"
            />
            {errors.email && (
              <p className="text-red-500 text-xs">Invalid email address</p>
            )}
          </div>
          <h3 className="text-[#1C160C] text-base font-medium leading-normal pb-2">
            Enter your password
          </h3>
          <div className="mb-7">
            <input
              {...register("password", {
                required: true,
                minLength: 6,
                message: "Password must be at least 6 characters long",
              })}
              className="bg-[#eeeeee] rounded-lg px-4 py-2 border w-full text-lg placeholder:text-base"
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
            className="bg-black mb-3 hover:bg-black/80 w-full font-semibold text-white py-2 text-lg rounded-full"
          >
            Login
          </button>
        </form>

        <p className="text-center">
          New Here?{" "}
          <Link className="text-[#10b461] hover:underline" to="/signup">
            Create new Account
          </Link>
        </p>
      </div>

      <div className="">
        <Link
          to="/captain-login"
          className="flex items-center justify-center bg-[#10b461] mb-5 hover:bg-black/80 w-full font-semibold text-white py-2 text-lg rounded-full"
        >
          Sign in as Captain
        </Link>
      </div>
    </div>
  );
};

export default UseerLogin;
