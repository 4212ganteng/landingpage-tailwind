import React from "react";

const Csection = () => {
  return (
    <>
      <div className="container grid md:grid-cols-2 my-12  gap-4">
        {/* kiri */}
        <div>
          <div>
            <img
              src="https://livewp.site/wp/md/ewebot/wp-content/uploads/sites/64/2021/01/home10_phone2.png"
              alt=""
            />
          </div>
        </div>
        {/* kanan */}
        <div className="text-start md:m-auto">
          <p className="text-indigo-700 font-bold ">EXPERIENCE</p>
          <h1
            className="text-indigo-700 font-extrabold text-3xl
          "
          >
            Pay for Qualified Traffic
          </h1>
          <p className="text-base font-semibold">
            Ewebot stays ahead of the curve with digital marketing trends. Our
            success has us leading the pack amongst our competitors with our
            ability to anticipate change and innovation.
          </p>
          {/* progress bar */}
          <div className="mb-6 mt-4">
            <div className="mb-1 text-base font-medium text-slate-700 dark:text-yellow-500">
              SEO Analysis
            </div>

            <div className="w-full bg-gray-200 rounded-full dark:bg-gray-700">
              <div
                className="bg-blue-600 text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-full"
                style={{ width: "90%" }}
              >
                {" "}
                90%
              </div>
            </div>
          </div>
          <div className="mb-6">
            <div className="mb-1 text-base font-medium text-slate-700 dark:text-yellow-500">
              SEO Audit
            </div>

            <div className="w-full bg-gray-200 rounded-full dark:bg-gray-700">
              <div
                className="bg-blue-600 text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-full"
                style={{ width: "79%" }}
              >
                {" "}
                79%
              </div>
            </div>
          </div>
          <div className="mb-6">
            <div className="mb-1 text-base font-medium text-slate-700 dark:text-yellow-500">
              Optimization
            </div>
            <div className="w-full bg-gray-200 rounded-full dark:bg-gray-700">
              <div
                className="bg-blue-600 text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-full"
                style={{ width: "96%" }}
              >
                {" "}
                96%
              </div>
            </div>
          </div>

          <button className="px-5 py-3 bg-cyan-400 rounded-lg my-4">
            DISCOVER ME
          </button>
        </div>
      </div>
    </>
  );
};

export default Csection;
