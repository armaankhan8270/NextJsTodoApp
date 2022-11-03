import React, { useState } from "react";
import { Button } from "@material-tailwind/react";
import axios from "axios";
import { GlobalUserContetx } from "../Context/UserContext";
const Contact = () => {
  const [Ask, setAsk] = useState(true);
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const data = { email, password };
  const { UserLogin, setUserLogin, NameOfUser, setNameOfUser } =
    GlobalUserContetx();

  const Post = async (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:3000/api/task", data)
      .then((e) => {
        console.log(e);
        alert("askm" + e.data.test.email);
        setNameOfUser(e.data.test.email);
        setemail("");
        setpassword("");
      })
      .catch((e) => {
        alert(e);
      });
  };
  const Login = async (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:3000/api/task/Login", data)
      .then((e) => {
        console.log(e);
        if (e.data == "Login") {
          setUserLogin(true);
          setNameOfUser(e.data);
        } else {
          setUserLogin(false);
        }
        setemail("");
        setpassword("");
      })
      .catch((e) => {
        alert(e);
      });
  };

  return (
    <div>
      <h1 className="shadow-md text-black font-extrabold border-b-2 border-gray-300 lg:mx-20 lg:my-6 lg:text-3xl text-center p-4">
        {Ask ? "REGISTER" : "LOGIN"}
      </h1>
      <section class="bg-white dark:bg-gray-900 shadow-lg">
        {Ask ? (
          <div class="container flex items-center shadow-lg justify-center min-h-screen px-6 mx-auto">
            <form class="w-full shadow-md p-4 rounded-lg max-w-md">
              <div class="flex items-center  justify-center mt-6">
                <a
                  onClick={() => setAsk(true)}
                  class={`w-1/3 pb-4 font-medium text-center ${
                    Ask ? "text-black" : "text-gray-500"
                  }  capitalize border-b dark:border-gray-400 dark:text-gray-300`}
                >
                  REGISTER
                </a>

                <a
                  onClick={() => setAsk(false)}
                  class={`w-1/3 pb-4 font-medium text-center ${
                    Ask ? "text-gray-500" : "text-black"
                  }  capitalize border-b dark:border-gray-400 dark:text-gray-300`}
                >
                  LOGIN
                </a>
              </div>

              <div class="relative flex items-center lg:mt-8">
                <span class="absolute">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="w-6 h-6 mx-3 text-gray-300 dark:text-gray-500"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    stroke-width="2"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                    />
                  </svg>
                </span>

                <input
                  type="text"
                  class="block w-full py-3 text-gray-700 bg-white border rounded-md px-11 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setemail(e.target.value)}
                />
              </div>

              <div class="relative flex items-center mt-6">
                <span class="absolute">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="w-6 h-6 mx-3 text-gray-300 dark:text-gray-500"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    stroke-width="2"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </span>

                <input
                  type="password"
                  class="block w-full py-3 text-gray-700 bg-white border rounded-md px-11 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
                  placeholder="password"
                  value={password}
                  onChange={(e) => setpassword(e.target.value)}
                />
              </div>

              <div class="mt-6">
                <button
                  onClick={Post}
                  class="w-full px-6 py-3 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-500 rounded-md hover:bg-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50"
                >
                  REGISTER
                </button>

                <div class="mt-6 text-center ">
                  <a class="text-sm text-blue-500 hover:underline dark:text-blue-400">
                    Already have an account?
                  </a>
                </div>
              </div>
            </form>
          </div>
        ) : (
          <div class="container flex items-center shadow-lg justify-center min-h-screen px-6 mx-auto">
            <form class="w-full shadow-md p-4 rounded-lg max-w-md">
              <div class="flex items-center  justify-center mt-6">
                <a
                  class={`w-1/3 pb-4 font-medium text-center ${
                    Ask ? "text-black" : "text-gray-500"
                  }  capitalize border-b dark:border-gray-400 dark:text-gray-300`}
                  onClick={() => setAsk(true)}
                >
                  Register
                </a>

                <a
                  onClick={() => setAsk(false)}
                  class={`w-1/3 pb-4 font-medium text-center ${
                    Ask ? "text-gray-500" : "text-black"
                  }  capitalize border-b dark:border-gray-400 dark:text-gray-300`}
                >
                  Login
                </a>
              </div>

              <div class="relative flex items-center mt-8">
                <span class="absolute">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="w-6 h-6 mx-3 text-gray-300 dark:text-gray-500"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    stroke-width="2"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                    />
                  </svg>
                </span>

                <input
                  type="text"
                  class="block w-full py-3 text-gray-700 bg-white border rounded-md px-11 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setemail(e.target.value)}
                />
              </div>

              <div class="relative flex items-center mt-6">
                <span class="absolute">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="w-6 h-6 mx-3 text-gray-300 dark:text-gray-500"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    stroke-width="2"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </span>

                <input
                  type="password"
                  class="block w-full py-3 text-gray-700 bg-white border rounded-md px-11 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
                  placeholder="password"
                  value={password}
                  onChange={(e) => setpassword(e.target.value)}
                />
              </div>

              <div class="mt-6">
                <button
                  onClick={Login}
                  class="w-full px-6 py-3 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-teal-500 rounded-md hover:bg-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50"
                >
                  Login
                </button>

                <div class="mt-6 text-center ">
                  <a
                    href="#"
                    class="text-sm text-teal-500 hover:underline dark:text-blue-400"
                  >
                    Already have an account?
                  </a>
                </div>
              </div>
            </form>
          </div>
        )}
      </section>
    </div>
  );
};

export default Contact;
