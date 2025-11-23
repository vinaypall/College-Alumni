import React from "react";
import { useState } from "react";
import { assets } from "../assets";

const Announcements = () => {
  const [announcements, setAnnouncements] = useState([]);
  const data = assets.announcementsData;

  const quotes = [
    {
      text: "The mentorship program changed my career trajectory completely.",
      author: "Sarah Johnson",
      role: "Software Engineer at Google",
    },
    {
      text: "Networking with alumni opened doors I didn't know existed.",
      author: "Michael Chen",
      role: "Product Manager at Microsoft",
    },
    {
      text: "Giving back to my college community has been incredibly rewarding.",
      author: "Emily Davis",
      role: "Data Scientist at Amazon",
    },
    {
      text: "Don't underestimate the power of alumni connections!",
      author: "David Wilson",
      role: "Founder of TechStart",
    },
  ];
  return (
    <div>
      <div
        className="w-full min-h-[70vh] flex items-center justify-center p-10 gap-4 max-sm:flex-col max-sm:p-4 max-sm:gap-8 bg-cover bg-center relative"
        style={{ backgroundImage: `url(${assets.background})` }}
      >
        {/* Left Side - Image */}
        <div
          className="flex-1 flex justify-center lg:justify-middle
         max-sm:hidden pr-0 lg:pr-8"
        >
          <img
            src={assets.student}
            className="h-[500px] w-auto object-contain drop-shadow-2xl translate-x-[-20px]"
            alt="Student"
          />
        </div>

        {/* Right Side - Text */}
        <div className="flex-1 flex flex-col justify-center lg:justify-start gap-6 text-white max-w-2xl max-sm:text-center pl-0 w-full">
          <div>
            <h1 className="text-5xl font-bold leading-tight mb-4 max-sm:text-2xl">
              Unlock Your Future with{" "}
              <span className="text-blue-400">Alumni Connections!</span>
            </h1>
            <p className="text-lg text-gray-200 leading-relaxed max-sm:text-sm">
              Bridge the gap between current students and successful alumni.
              Find mentors, explore career opportunities, and build meaningful
              connections that last a lifetime.
            </p>
          </div>

          <div className="w-full max-w-3xl bg-white/10 backdrop-blur-md border border-white/20 p-3 max-sm:p-2 rounded-full overflow-hidden flex items-center">
            <div className="shrink-0 bg-blue-600 text-white px-4 py-1 max-sm:px-3 max-sm:text-xs rounded-full text-sm font-bold mr-4 max-sm:mr-2">
              Student Voices
            </div>
            <div className="overflow-x-auto no-scrollbar w-full">
              <style>
                {`
                  @keyframes marquee-scroll {
                    0% { transform: translateX(0%); }
                    100% { transform: translateX(-100%); }
                  }
                  .animate-marquee-scroll {
                    animation: marquee-scroll 50s linear infinite;
                  }
                `}
              </style>
              <div className="flex gap-12 max-sm:gap-6 animate-marquee-scroll whitespace-nowrap items-center w-max">
                {[...quotes, ...quotes].map((quote, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <span className="text-white text-base max-sm:text-sm font-medium">
                      "{quote.text}"
                    </span>
                    <span className="text-blue-200 text-sm max-sm:text-xs">
                      - {quote.role}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="w-1/3  rounded-xl p-6 max-sm:text-sm shadow-lg">
        <h2 className="text-2xl font-semibold max-sm:text-sm mb-4 text-white">
          Announcements
        </h2>

        <div className=" p-4 rounded-xl shadow-md flex justify-between items-center">
          <div>
            <p>Type / Title</p>
            <p>Posted By: Faculty Name</p>
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default Announcements;
