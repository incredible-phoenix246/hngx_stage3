"use client";

import { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../../firebase";
import { useRouter } from "next/navigation";
import Link from "next/link";

type Props = {};

const Login = (props: Props) => {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const validateForm = () => {
    let isValid = true;

    if (!email) {
      setEmailError("Email is required");
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      setEmailError("Invalid email format");
      isValid = false;
    } else {
      setEmailError("");
    }

    if (!password) {
      setPasswordError("Password is required");
      isValid = false;
    } else if (password.length < 6) {
      setPasswordError("Password must be at least 6 characters long");
      isValid = false;
    } else {
      setPasswordError("");
    }

    return isValid;
  };

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault(); 

    if (validateForm()) {
      setIsLoading(true);

      try {
        await signInWithEmailAndPassword(auth, email, password);

        // If login is successful, navigate to the desired page ("/" in this case)
        router.push("/");
      } catch (error) {
        setError("Invalid email or password");
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    }
  };

  return (
    <div className='w-[100vw] h-[100vh] flex flex-col items-center justify-center'>
      <section className='bg-white'>
        <div className='flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0'>
          <div className='w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 '>
            <div className='p-6 space-y-4 md:space-y-6 sm:p-8'>
              <h1 className='text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl '>
                Login to your account
              </h1>
              <form className='space-y-4 md:space-y-6' onSubmit={handleLogin}>
                <div>
                  <label
                    htmlFor='email'
                    className='block mb-2 text-sm font-medium text-gray-900 '
                  >
                    Your email
                  </label>
                  <input
                    type='email'
                    name='email'
                    id='email'
                    className={`bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5  dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500 ${
                      emailError ? "border-red-500" : ""
                    }`}
                    placeholder='user@example.com'
                    required
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                      setEmailError("");
                    }}
                  />
                  {emailError && (
                    <p className='text-sm text-red-700 font-semibold mt-1'>
                      {emailError}
                    </p>
                  )}
                </div>
                <div>
                  <label
                    htmlFor='password'
                    className='block mb-2 text-sm font-medium text-gray-900 '
                  >
                    Password
                  </label>
                  <input
                    type='password'
                    name='password'
                    id='password'
                    placeholder='Use this: 1Password'
                    className={`bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5  dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500 ${
                      passwordError ? "border-red-500" : ""
                    }`}
                    required
                    value={password}
                    onChange={(e) => {
                      setPassword(e.target.value);
                      setPasswordError("");
                    }}
                  />
                  {passwordError && (
                    <p className='text-sm text-red-700 font-semibold mt-1'>
                      {passwordError}
                    </p>
                  )}
                </div>
                {error && (
                  <p className='text-sm text-red-700 font-semibold mt-2'>
                    {error}
                  </p>
                )}
                <button
                  type='submit'
                  className={`w-full text-white hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center ${
                    isLoading
                      ? "bg-gray-400 cursor-not-allowed"
                      : "bg-black dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                  }`}
                  disabled={isLoading}
                >
                  {isLoading ? "Logining in .." : "Login in"}
                </button>
              </form>
                <p className='text-sm font-light text-gray-500 dark:text-gray-400'>
                Check Out the  {" "}
                <Link
                  href='https://github.com/incredible-phoenix246/hngx_stage3.git'
                  className='font-medium text-primary-600 hover:underline dark:text-primary-500'
                >
                  Github repo
                </Link>
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Login;
