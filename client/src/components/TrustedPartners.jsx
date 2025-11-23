import React from "react";
import { assets } from "../assets";

const TrustedPartners = () => {
  const row1 = [assets.iit, assets.bits, assets.galgotias, assets.cu];
  const row2 = [assets.chitkara, assets.sharda, assets.llyod];

  return (
    <div className="py-6 ">
      <div className="text-center p-4 max-sm:p-2 mb-6">
        <h2 className="text-2xl font-bold text-gray-800">
          Trusted by 100+ colleges worldwide
        </h2>
        <div className="w-24 h-1 bg-blue-500 mx-auto mt-2 rounded-full"></div>
      </div>

      <div className="max-w-6xl mx-auto px-4 flex flex-col gap-6 items-center">
        {/* Row 1: 4 Logos */}
        <div className="flex flex-wrap justify-center gap-6 md:gap-12 w-full">
          {row1.map((logo, index) => (
            <div
              key={index}
              className="w-24 h-24 md:w-32 md:h-32 flex items-center justify-center bg-white p-3 rounded-xl shadow-sm hover:shadow-md transition-shadow"
            >
              <img
                src={logo}
                alt={`Partner ${index}`}
                className="w-full h-full object-contain transition-all duration-300"
              />
            </div>
          ))}
        </div>

        {/* Row 2: 3 Logos */}
        <div className="flex flex-wrap justify-center gap-6 md:gap-12 w-full">
          {row2.map((logo, index) => (
            <div
              key={index}
              className="w-24 h-24 md:w-32 md:h-32 flex items-center justify-center bg-white p-3 rounded-xl shadow-sm hover:shadow-md transition-shadow"
            >
              <img
                src={logo}
                alt={`Partner ${index + 4}`}
                className="w-full h-full object-contain transition-all duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TrustedPartners;
