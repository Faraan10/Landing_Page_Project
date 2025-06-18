import React from "react";

const CarePlanBanner = () => {
  return (
    <div className="w-[90%] md:w-[85%] mt-6 mx-auto bg-purple-200 px-4 py-6 md:px-10 md:py-6 flex flex-col md:flex-row items-center justify-between gap-4 rounded-lg">
      <div className="flex items-center gap-4">
        <img
          src="/"
          alt="Care Plan"
          className="w-16 h-16 rounded-full object-cover"
        />
        <div>
          <span className="text-xs font-bold bg-purple-800 text-white px-2 py-1 rounded-full">
            Care Plan
          </span>
          <p className="text-sm mt-2 font-semibold">
            now starting at Rs. 165 for 3 months
          </p>
          <p className="text-sm">
            Get extra 5% saving on your orders. Free shipping, same-day delivery
            and more.
          </p>
          <p className="text-sm font-medium mt-1">Become a member today!</p>
        </div>
      </div>

      <div>
        <button className="btn bg-purple-800 text-white px-6">Know more</button>
      </div>
    </div>
  );
};

export default CarePlanBanner;
