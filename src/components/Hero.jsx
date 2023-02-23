import React from "react";
import Typewriter from "typewriter-effect";

const Hero = () => {
  return (
    <>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4 my-12">
        <div>
          <img
            src="https://livewp.site/wp/md/ewebot/wp-content/uploads/sites/64/2021/01/smiling_girl.jpg"
            alt=""
          />
        </div>
        {/* kanan */}
        <div className="text-orange-400 font-extrabold text-7xl text-start m-auto">
          <h1>Digital</h1>
          <h1>Marketing</h1>
          <Typewriter
            options={{
              strings: ["Business", "Success", "Services"],
              autoStart: true,
              loop: true,
            }}
          />
          <p className="text-slate-500 font-semibold text-xl mt-4">
            Ensuring the best return on investment for your
          </p>
          <p className="text-slate-500 font-semibold text-xl">
            bespoke SEO campaign requirement.
          </p>
          {/* input form */}

          <form className="mt-4">
            <label
              for="default-search"
              class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
            >
              Search
            </label>
            <div class="relative">
              <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <svg
                  aria-hidden="true"
                  class="w-5 h-5 text-gray-500 dark:text-gray-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  ></path>
                </svg>
              </div>
              <input
                type="search"
                id="default-search"
                class="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Search Mockups, Logos..."
                required
              />
              <button
                type="submit"
                class="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                ANALIZE YOURE SITE
              </button>
            </div>
          </form>

          {/* phone */}
          <div className="text-slate-500 font-semibold text-xl mt-4">
            <h1>800-123-4567</h1>
            <p>INFO@COMPANY.COM</p>
          </div>
        </div>
      </div>

      <div className="container flex items-center max-w-sm mb-12">
        <div className="flex gap-40 mx-auto ">
          <img
            src="https://livewp.site/wp/md/ewebot/wp-content/uploads/sites/64/2019/07/1.png"
            alt=""
            className="w-40 h-10"
          />
          <img
            src="https://livewp.site/wp/md/ewebot/wp-content/uploads/sites/64/2019/07/2.png"
            alt=""
            className="w-40 h-10"
          />

          <img
            src="https://livewp.site/wp/md/ewebot/wp-content/uploads/sites/64/2019/07/2.png"
            alt=""
            className="w-40 h-10"
          />
          <img
            src="https://livewp.site/wp/md/ewebot/wp-content/uploads/sites/64/2019/07/1.png"
            alt=""
            className="w-40 h-10"
          />
        </div>
      </div>
    </>
  );
};

export default Hero;
