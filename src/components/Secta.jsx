import React from "react";

const Secta = () => {
  return (
    <>
      <div className="grid md:grid-cols-2 my-12 gap-4">
        {/* kiri */}
        <div className="grid md:grid-cols-2 gap-7">
          {/* kiri */}
          <div className="bg-white  flex items-center justify-center h-full rounded-2xl shadow-xl">
            <div className="py-8">
              <h1 className="text-5xl text-red-400 font-extrabold mb-3">
                320m
              </h1>
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
              <h1 className="text-5xl text-red-400 font-extrabold mb-3">
                1350
              </h1>
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
        {/* kanan */}
        <div className="mt-5">
          <img
            src="https://livewp.site/wp/md/ewebot/wp-content/uploads/sites/64/2021/01/girl-with_phone.jpg"
            alt=""
          />
        </div>
      </div>
    </>
  );
};

export default Secta;
