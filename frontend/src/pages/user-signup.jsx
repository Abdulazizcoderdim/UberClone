import { useContext } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { UserDataContext } from "../context/user-context";
import $axios from "../http";

const UserSignup = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  const { user, setUser } = useContext(UserDataContext);
  const navigate = useNavigate();

  const onSubmit = async (data) => {
    try {
      const res = await $axios.post("/users/register", data);
      console.log(res);
      if (res.status === 201) {
        const data = res.data;
        setUser(data.user);
        localStorage.setItem("token", data.token);
        navigate("/home");
      }

      console.log(res);
    } catch (error) {
      console.log(error);
    }

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
              {...register("fullname.firstname", { required: true })}
              type="text"
              className="bg-[#eeeeee] w-1/2 rounded px-4 py-2 border text-base placeholder:text-sm"
              required
              placeholder="First Na me"
            />
            <input
              type="text"
              {...register("fullname.lastname", { required: true })}
              className="bg-[#eeeeee] w-1/2 rounded px-4 py-2 border text-base placeholder:text-sm"
              placeholder="Last Name"
            />
          </div>

          <h3 className="text-base font-medium mb-2">
            What&apos;s your email address?
          </h3>
          <div className="mb-5">
            <input
              {...register("email", {
                required: true,
                pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: "Invalid email address",
              })}
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
              {...register("password", { required: true, minLength: 6 })}
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
            Create account
          </button>
        </form>

        <p className="text-center">
          Already have a account?{" "}
          <Link className="text-[#10b461] hover:underline" to="/login">
            Login here
          </Link>
        </p>
      </div>

      <div>
        <p className="text-[10px] leading-tight">
          This site is protected by reCAPTCHA and the{" "}
          <span className="underline">Google Privacy Policy</span> and{" "}
          <span className="underline">Terms of Service apply</span>.
        </p>
      </div>
    </div>
  );
};

export default UserSignup;
