import { Link } from 'react-router-dom';

const UseerLogin = () => {
  return (
    <div className="p-7 flex flex-col justify-between h-screen">
      <div>
        <img className="w-16 mb-10" src="uber-logo.png" alt="logo" />
        <form>
          <h3 className="text-lg font-medium mb-2">
            What&apos;s your email address?
          </h3>
          <input
            className="bg-[#eeeeee] mb-7 rounded px-4 py-2 border w-full text-lg placeholder:text-base"
            type="email"
            required
            placeholder="example@example.com"
          />
          <h3 className="text-lg font-medium mb-2">Enter your password</h3>
          <input
            className="bg-[#eeeeee] mb-7 rounded px-4 py-2 border w-full text-lg placeholder:text-base"
            type="password"
            required
            placeholder="password"
          />
          <button className="bg-black mb-3 hover:bg-black/80 w-full font-semibold text-white py-2 text-lg rounded">
            Login
          </button>
        </form>
        <p className="text-center">
          New Here?{' '}
          <Link className="text-[#10b461] hover:underline" to="/signup">
            Create new Account
          </Link>
        </p>
      </div>

      <div className="">
        <button className="bg-[#10b461] mb-7 hover:bg-black/80 w-full font-semibold text-white py-2 text-lg rounded">
          Sign in as Captain
        </button>
      </div>
    </div>
  );
};

export default UseerLogin;
