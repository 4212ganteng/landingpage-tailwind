import React from "react";

const Dsect = () => {
  return (
    <div className="grid md:grid-cols-2 my-12 gap-10">
      {/* kiri */}
      <div className="text-start max-w-md md:m-auto">
        <p className="text-indigo-700 font-bold ">WHY CHOOSE US</p>
        <h1 className="text-indigo-800 font-extrabold text-4xl my-2">
          Boosts Your Website Traffic!
        </h1>
        <p className="text-base font-semibold">
          We are passionate about our work. Our designers stay ahead of the
          curve to provide engaging and user-friendly website designs to make
          your business stand out. Our developers are committed to maintaining
          the highest web standards so that your site will withstand the test of
          time. We care about your business, which is why we work with you.
        </p>
        <button className="px-5 py-3 bg-cyan-400 rounded-lg my-4">
          DISCOVER ME
        </button>
      </div>
      {/* kanan */}
      <div className="grid md:grid-cols-2 gap-7">
        {/* kiri */}
        <div className="bg-white  flex items-center justify-center h-full rounded-2xl shadow-xl">
          <div className="py-8">
            <h1 className="text-5xl text-red-400 font-extrabold mb-3">320m</h1>
            <p className="text-base font-semibold">Digital Global</p>
            <p className="text-base font-semibold">audience reach</p>
          </div>
        </div>
        <div className="bg-white  flex items-center justify-center h-full rounded-2xl shadow-xl">
          <div className="py-8">
            <h1 className="text-5xl text-red-400 font-extrabold mb-3">89%</h1>
            <p className="text-base font-semibold">Content pieces</p>
            <p className="text-base font-semibold">produced everyday</p>
          </div>
        </div>

        {/* kanan */}
        <div className="bg-white  flex items-center justify-center h-full rounded-2xl shadow-xl">
          <div className="py-8">
            <h1 className="text-5xl text-red-400 font-extrabold mb-3">1350</h1>
            <p className="text-base font-semibold">Content pieces</p>
            <p className="text-base font-semibold">produced everyday</p>
          </div>
        </div>
        <div className="bg-white  flex items-center justify-center h-full rounded-2xl shadow-xl">
          <div className="py-8">
            <h1 className="text-5xl text-red-400 font-extrabold mb-3">94%</h1>
            <p className="text-base font-semibold">Employee</p>
            <p className="text-base font-semibold">worldwide</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dsect;
