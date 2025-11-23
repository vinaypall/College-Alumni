import React from "react";
import { assets } from "../assets";
const Video = () => {
  return (
    <div className="w-full min-h-screen flex items-center justify-center relative py-5 overflow-hidden">
      {/* Background Image */}
      <img
        src={assets.background2}
        alt="Background"
        className="absolute inset-0 w-full h-full object-cover -z-10"
      />

      <div className="text-center p-4 max-sm:p-2 mb-6 w-full max-w-6xl relative z-10">
        <h2 className="text-4xl font-bold text-gray-800 mb-10 max-sm:text-2xl max-sm:mb-6">
          Why Alumni and Student connect important?
        </h2>
        <div className="w-full flex justify-center">
          <video
            src={assets.introVideo}
            className="w-full max-w-4xl rounded-xl shadow-2xl"
            controls
            autoPlay
            muted
          />
        </div>
      </div>
    </div>
  );
};

export default Video;
