import axios from "axios";
import Link from "next/link";
import React, { useState } from "react";
import { useEffect } from "react";

const Homes = () => {
  const [Data, setData] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:3000/api/task/User").then((e) => {
      console.log(e.data.test);
      setData(e.data.test);
    });
  }, []);
  return (
    <div>
      {/* {Data.map((User, id) => {
        return (
          <div key={id}>
            <div class="max-w-2xl px-8 py-4 bg-white rounded-lg shadow-md dark:bg-gray-800">
              <div class="flex items-center justify-between">
                <span class="text-sm font-light text-gray-600 dark:text-gray-400">
                  Mar 10, 2019
                </span>
                <a
                  class="px-3 py-1 text-sm font-bold text-gray-100 transition-colors duration-300 transform bg-gray-600 rounded cursor-pointer hover:bg-gray-500"
                  tabindex="0"
                  role="button"
                >
                  Design
                </a>
              </div>

              <div class="mt-2">
                <a
                  href="#"
                  class="text-2xl font-bold text-gray-700 dark:text-white hover:text-gray-600 dark:hover:text-gray-200 hover:underline"
                  tabindex="0"
                  role="link"
                >
                  Accessibility tools for designers and developers
                </a>
                <p class="mt-2 text-gray-600 dark:text-gray-300">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Tempora expedita dicta totam aspernatur doloremque. Excepturi
                  iste iusto eos enim reprehenderit nisi, accusamus delectus
                  nihil quis facere in modi ratione libero!
                </p>
              </div>

              <div class="flex items-center justify-between mt-4">
                <a
                  href="#"
                  class="text-blue-600 dark:text-blue-400 hover:underline"
                  tabindex="0"
                  role="link"
                >
                  Read more
                </a>

                <div class="flex items-center">
                  <img
                    class="hidden object-cover w-10 h-10 mx-4 rounded-full sm:block"
                    src="https://images.unsplash.com/photo-1502980426475-b83966705988?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=40&q=80"
                    alt="avatar"
                  />
                  <a
                    class="font-bold text-gray-700 cursor-pointer dark:text-gray-200"
                    tabindex="0"
                    role="link"
                  >
                    {User.email}
                  </a>
                </div>
              </div>
            </div>
          </div>
        );
      })} */}
      <section className="bg-black m-0 text-white rounded-lg dark:bg-gray-900">
        <div className="container flex flex-col px-6 py-10 mx-auto space-y-6 lg:h-[32rem] lg:py-16 lg:flex-row lg:items-center">
          <div className="w-full lg:w-1/2">
            <div className="lg:max-w-lg">
              <h1 className="text-3xl font-bold tracking-wide text-gray-100 dark:text-white lg:text-5xl">
                Askm Welcome To Our Website
              </h1>
              <div className="mt-8 space-y-5">
                <p className="flex items-center -mx-2 text-gray-700 dark:text-gray-200">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6 mx-2 text-blue-500"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <span className="mx-2">Easy And Simple Way To Read Book</span>
                </p>
                <p className="flex items-center -mx-2 text-gray-700 dark:text-gray-200">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6 mx-2 text-blue-500"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <span className="mx-2">Just Search And Dwonload</span>
                </p>
                <p className="flex items-center -mx-2 text-gray-700 dark:text-gray-200">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6 mx-2 text-blue-500"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <span className="mx-2">Easy to Use</span>
                </p>
              </div>
            </div>
            <div className="w-full mt-8 bg-transparent border rounded-md lg:max-w-sm dark:border-gray-700 focus-within:border-blue-400 focus-within:ring focus-within:ring-blue-300 dark:focus-within:border-blue-400 focus-within:ring-opacity-40">
              <form className="flex flex-col lg:flex-row">
                <input
                  type="name"
                  placeholder="Enter name"
                  className="flex-1 h-10 px-4 py-2 m-1 text-gray-700 placeholder-gray-400 bg-transparent border-none appearance-none dark:text-gray-200 focus:outline-none focus:placeholder-transparent focus:ring-0"
                />
                <Link href="/Contact">
                  <button
                    type="button"
                    className="h-10 px-4 py-2 m-1 text-white transition-colors duration-300 transform bg-blue-500 rounded-md hover:bg-blue-400 focus:outline-none focus:bg-blue-400"
                  >
                    Join Us
                  </button>
                </Link>
              </form>
            </div>
          </div>
          <div className="flex items-center justify-center w-full h-96 lg:w-1/2">
            <img
              className="object-cover w-full h-full mx-auto rounded-md shadow-lg shadow-blue-gray-800 s lg:max-w-2xl"
              src="https://images.unsplash.com/photo-1543269664-7eef42226a21?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
              alt="glasses photo"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Homes;
