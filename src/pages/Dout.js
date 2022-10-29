import React, { useState } from "react";
import { Button } from "@material-tailwind/react";

const Dout = () => {
  const [Ask, setAsk] = useState(true);
  return (
    <div>
      <section class="bg-white dark:bg-gray-900 shadow-lg">
        {Ask ? (
          <div class="container flex items-center shadow-lg justify-center min-h-screen px-6 mx-auto">
            <form class="w-full shadow-md p-4 rounded-lg max-w-md">
              <div class="flex items-center  justify-center mt-6">
                <Button
                  href="#"
                  class="w-1/3 pb-4 font-medium text-center text-gray-500 capitalize border-b dark:border-gray-400 dark:text-gray-300"
                >
                  ASK
                </Button>

                <Button
                  href="#"
                  onClick={() => setAsk(false)}
                  class="w-1/3 pb-4 font-medium text-center text-gray-800 capitalize border-b-2 border-blue-500 dark:border-blue-400 dark:text-white"
                >
                  AnSwer
                </Button>
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
                  placeholder="Topic"
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
                  type="Question?"
                  class="block w-full py-3 text-gray-700 bg-white border rounded-md px-11 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
                  placeholder="question"
                />
              </div>

              <div class="mt-6">
                <button class="w-full px-6 py-3 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-500 rounded-md hover:bg-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50">
                  Send
                </button>

                <div class="mt-6 text-center ">
                  <a
                    href="#"
                    class="text-sm text-blue-500 hover:underline dark:text-blue-400"
                  >
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
                  href="#"
                  class="w-1/3 pb-4 font-medium text-center text-gray-500 capitalize border-b dark:border-gray-400 dark:text-gray-300"
                  onClick={() => setAsk(true)}
                >
                  ASK
                </a>

                <a
                  href="#"
                  onClick={() => setAsk(false)}
                  class="w-1/3 pb-4 font-medium text-center text-gray-800 capitalize border-b-2 border-blue-500 dark:border-blue-400 dark:text-white"
                >
                  AnSwer
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
                  placeholder="Topic"
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
                  type="Question?"
                  class="block w-full py-3 text-gray-700 bg-white border rounded-md px-11 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
                  placeholder="question"
                />
              </div>

              <div class="mt-6">
                <button class="w-full px-6 py-3 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-500 rounded-md hover:bg-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50">
                  Ans
                </button>

                <div class="mt-6 text-center ">
                  <a
                    href="#"
                    class="text-sm text-blue-500 hover:underline dark:text-blue-400"
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

export default Dout;
