import React, { useState } from "react";
import "./styles/register.css";
import bg from "../assets/backg.png";
import goggle from "../assets/goggle.png";
import linkd from "../assets//174857 1.png";
import { Link, useNavigate } from "react-router-dom";
import { path } from "../Router/router";
import {
  createUserWithEmailAndPassword,
  sendEmailVerification,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import { auth } from "../firebase";

const Register: React.FC = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [passwordError, setPasswordError] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        sendEmailVerification(user)
          .then(() => {
            console.log("Email verification sent");
            navigate("/confirmcode");
          })
          .catch((error) => {
            console.log(error);
            setErrorMessage("Failed to send verification email");
          });
      })
      .catch((error) => {
        console.log(error);
        setErrorMessage("Email already in use");
      });

    if (password !== confirmPassword) {
      setPasswordError(true);
      return;
    }
  };

  const handleGoogleSignUp = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
      .then((result) => {
        console.log(result);
        navigate("/dashboard");
      })
      .catch((error) => {
        setError("Google sign-in failed. Please try again.");
        console.log(error);
      });
  };

  return (
    <div className="flex flex-col md:flex-row flex-b h-screen items-center">
      <div className="w-full md:w-1/3">
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
      </div>
      <div className="flex flex-col justify-center items-center w-full md:w-2/3 mx-auto md:mt-56 p-8 ">
        <div className="list flex mb-2">
          <h1 className="mr-24 md:mr-48">REGISTER</h1>
          <h1 className="ml-24 md:ml-48">LOG IN</h1>
        </div>
        <div className="flex items-center mb-10">
          <hr className="w-44 md:w-64 flex-grow border-t-8 rounded border-blue-900" />
          <hr className="w-44 md:w-64 flex-grow border-t-8 rounded border-slate-200" />
        </div>
        <div className="flex  mb-10">
          <h1 className="text-3xl">Register as a Writer/Reader</h1>
        </div>
        <form onSubmit={handleSubmit} className="w-full max-w-lg">
          <div className="flex mb-4">
            <div className="">
              <label className="block text-gray-700 text-sm mb-2">
                First Name
              </label>
              <input
                className="appearance-none text-sm rounded-lg border shadow w-full bg-white py-4 px-3 text-gray-700 leading-tight focus:outline-none focus:border-blue-500"
                id="first name"
                type="text"
                placeholder="john"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                required
              />
            </div>
            <div className="ml-10">
              <label className="block text-gray-700 text-sm mb-2">
                Last name
              </label>
              <input
                className="appearance-none text-sm rounded-lg border shadow w-full bg-white py-4 px-3 text-gray-700 leading-tight focus:outline-none focus:border-blue-500"
                id="last name"
                type="text"
                placeholder="john"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                required
              />
            </div>
          </div>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-slate-500 text-sm mb-2"
            >
              You are joining as?
            </label>
            <select
              className="appearance-none text-lg border  rounded-lg shadow bg-white mb-3 w-full py-4 px-3 text-slate-500 leading-tight focus:outline-none focus:border-blue-500"
              id="username"
              placeholder="abdulkyacee@gmail.com"
              required
            >
              <option className="text-sm">Writer</option>
              <option className="text-sm">Reader</option>
            </select>
          </div>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-slate-500 text-sm mb-2"
            >
              Email address
            </label>
            <input
              className="appearance-none text-lg  rounded-lg border shadow bg-white mb-3 w-full py-4 px-3 text-gray-700 leading-tight focus:outline-none focus:border-blue-500"
              id="username"
              type="text"
              placeholder="abdulkyacee@gmail.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray text-sm text-slate-500 mb-2">
              Password
            </label>
            <input
              className="appearance-none text-lg rounded-lg bg-white border shadow w-full py-4 px-3 text-gray-700 mb-4 leading-tight focus:outline-none focus:border-blue-500"
              id="password"
              type="password"
              placeholder="******************"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray text-sm text-slate-500 mb-2">
              Confirm password
            </label>
            <input
              className={`appearance-none text-lg rounded-lg shadow border bg-white w-full py-4 px-3 text-gray-700 mb-4 leading-tight focus:outline-none ${
                passwordError ? "border-red-500" : ""
              }`}
              id="password"
              type="password"
              placeholder="******************"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
            {passwordError && (
              <p className="text-red-500 text-sm">Passwords do not match</p>
            )}
            {errorMessage && (
              <p className="text-red-500 text-sm">{errorMessage}</p>
            )}
          </div>
          <div className="flex items-center justify-between mt-2">
            <button
              className="appearance-none rounded text-white text-lg font-bold bg-blue-900 hover:bg-blue-700 w-full py-4 px-4 leading-tight focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Create account
            </button>
          </div>
          <div className="text-center mt-2">
            <h1>
              Already have an account?{" "}
              <Link
                to={path.LOGIN}
                className="text-blue-900 cursor-pointer font-bold"
              >
                Login
              </Link>
            </h1>
          </div>
          <div className="">
            <button
              onClick={handleGoogleSignUp}
              className="items-center justify-center flex border shadow  appearance-none text-lg rounded-lg bg-white w-full py-3 px-3 text-gray-700 mt-4 mb-4 leading-tight focus:outline-none"
            >
              <img className="mr-2" src={goggle} alt="" />
              <h1>Sign up with Goggle</h1>
            </button>
            <button className="items-center justify-center flex appearance-none text-lg rounded bg-white shadow border w-full py-3 px-3 text-gray-700 mt-4 mb-4 leading-tight focus:outline-none">
              <img className="mr-2" src={linkd} alt="" />
              <h1>Sign up with Linkedin</h1>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
