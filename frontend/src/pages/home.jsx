import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <div className="bg-cover bg-left bg-no-repeat bg-[url(traffic.avif)] h-screen pt-8 flex justify-between flex-col w-full bg-red-400 ">
        <img className="w-14 ml-8" src="uber-logo.png" alt="logo" />
        <div className="bg-white pb-7 py-4 px-4">
          <h2 className="text-3xl font-bold">Get Started with Uber</h2>
          <Link
            to="/login"
            className="flex items-center justify-center w-full bg-black text-white py-3 mt-5 font-medium rounded"
          >
            Continue
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
