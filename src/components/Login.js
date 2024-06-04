import { useState } from "react";
import Header from "./Header";

const Login = () => {
  const [isSignInForm, setisSignInForm] = useState(true);
  const toggleSignForm = () => {
    setisSignInForm(!isSignInForm);
  };
  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/dd4dfce3-1a39-4b1a-8e19-b7242da17e68/86742114-c001-4800-a127-c9c89ca7bbe4/IN-en-20240527-popsignuptwoweeks-perspective_alpha_website_large.jpg"
          alt="not found"
        ></img>
      </div>
      <form className=" w-4/12 absolute p-12 mx-auto right-0 left-0 my-36 bg-black rounded-sm opacity-80">
        <h1 className="text-white text-3xl py-2">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>
       { !isSignInForm&&<input
          type="email"
          placeholder="Enter Full Name"
          className="p-2 my-2 w-full border-2 border-gray-500 text-white  bg-black rounded-sm opacity-11"
        />}
        <input
          type="email"
          placeholder="Enter email Address"
          className="p-2 my-2 w-full border-2 border-gray-500 text-white  bg-black rounded-sm opacity-11"
        />
        <input
          type="password"
          placeholder="Enter password"
          className="p-2 my-2 w-full border-2 border-gray-500 text-gray-900  bg-black rounded-sm opacity-11"
        />
        <button className="text-white p-2 my-6 w-full bg-red-600 text-center rounded-sm hover:bg-red-700">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>
        <p
          className="py-4 text-white cursor-pointer hover:underline"
          onClick={toggleSignForm}
        >
          {isSignInForm
            ? "New to Netflix? Sign Up Now"
            : "Already Registered? Sign In Now"}
        </p>
      </form>
    </div>
  );
};
export default Login;
