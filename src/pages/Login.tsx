import React, { useState } from "react";
import "./styles/login.css";
import bg from "../assets/backg.png";
import goggle from "../assets/goggle.png";
import linkd from "../assets/174857 1.png";
import { Link, useNavigate } from "react-router-dom";
import { path } from "../Router/router";
import { auth } from "../firebase";
import {
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";

const Login: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log(userCredential);
        navigate("/");
      })
      .catch((error) => {
        setError("Invalid email or password.");
        console.log(error);
      });
  };

  const handleGoogleSignIn = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
      .then((result) => {
        console.log(result);
        navigate("/");
      })
      .catch((error) => {
        setError("Google sign-in failed. Please try again.");
        console.log(error);
      });
  };

  return (
    <div className="flex flex-col md:flex-row flex-b h-screen mt-4">
      <div className="w-full md:w-1/3">
        <div className="flex justify-center items-center md:h-screen">
          <img
            className="w-[622px] h-[1024px] left-0 top-0 absolute hidden xl:block"
            src={bg}
            alt=""
          />
          <div className="w-[622px] h-[1024px] left-0 top-0 absolute bg-black bg-opacity-50 hidden xl:block" />
          <div className="left-[36px] top-[385px] absolute flex-col justify-center items-center gap-6 inline-flex">
            <div className="text-white text-[48px] font-bold leading-10 hidden xl:block">
              CHATTER
            </div>
            <div className="w-[550px] text-white text-[24px] font-medium leading-9 hidden xl:block">
              Unleash the Power of Words, Connect with Like-minded Readers and
              Writers
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center w-full md:w-2/3 mx-auto mb-5 p-10">
        <div className="list flex mb-2">
          <h1 className="mr-24 md:mr-48">REGISTER</h1>
          <h1 className="ml-24 md:ml-48">LOG IN</h1>
        </div>
        <div className="flex items-center mb-10">
          <hr className="w-44 md:w-64 flex-grow border-t-8 rounded border-slate-200" />
          <hr className="w-44 md:w-64 flex-grow border-t-8 rounded border-blue-900" />
        </div>
        <div className="flex mt-5 mb-10">
          <h1 className="text-3xl">Welcome Back</h1>
        </div>
        <form className="w-full max-w-lg" onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-gray text-sm mb-2 md:mb-4"
            >
              Email address
            </label>
            <input
              className="appearance-none text-lg rounded-lg shadow border border-slate-300 mb-3 w-full py-4 px-3 text-gray-700 leading-tight focus:outline-none focus:border-blue-500"
              id="username"
              type="text"
              placeholder="abdulkyacee@gmail.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray text-sm mb-2 md:mb-4">
              Password
            </label>
            <input
              className="appearance-none text-lg rounded-lg shadow border border-slate-300 mb-3 w-full py-4 px-3 text-gray-700 leading-tight focus:outline-none focus:border-blue-500"
              id="password"
              type="password"
              placeholder="******************"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          {error && <div className="text-red-500 mb-4">{error}</div>}

          <div className="flex items-center justify-between mt-5">
            <button
              className="appearance-none rounded text-white text-lg font-bold bg-blue-900 hover:bg-blue-700 w-full py-4 px-4 mt-3 leading-tight focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Log in
            </button>
          </div>
          <div className="text-end cursor-pointer mt-2">
            <Link to="/">
              <h1 className="text-blue-700 font-bold">Forgot password?</h1>
            </Link>
          </div>
          <div className="">
            <button
              className="items-center cursor-pointer justify-center flex appearance-none text-lg rounded-lg border bg-white-200 shadow w-full py-4 px-3 text-gray-700 mt-4 mb-4 leading-tight focus:outline-none"
              onClick={handleGoogleSignIn}
            >
              <img className="mr-2" src={goggle} alt="" />
              <h1>Sign in with Google</h1>
            </button>

            <button className="items-center cursor-pointer justify-center flex appearance-none text-lg rounded-lg border bg-white-200 shadow w-full py-4 px-3 text-gray-700 mt-4 mb-4 leading-tight focus:outline-none">
              <img className="mr-2" src={linkd} alt="" />
              <h1>Sign in with Linkedin</h1>
            </button>
          </div>
          <div className="text-center items-center">
            <h1>
              I don't have an account?{" "}
              <Link
                className="text-blue-900 cursor-pointer font-bold"
                to={path.REGISTER}
              >
                Register
              </Link>
            </h1>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
