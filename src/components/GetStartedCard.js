import React from "react";

export default function GetStartedCard() {
  return (
    <div className="flex flex-col text-center justify-center items-center gap-8 mx-5 px-12 py-8 rounded-[16px] bg-primary text-white ">
      <p className="text-[#F2F2F2] font-bold text-[24px] mx-10">
        Get Started with KoinX for FREE
      </p>
      <p className="text-[#F2F2F2] text-[14px]">
        With our range of features that you can equip for free, KoinX allows you
        to be more educated and aware of your tax reports.
      </p>
      <img src="/get_started.svg" alt="" />
      <button class="flex items-center justify-center px-8 py-2 bg-white rounded-lg shadow-md gap-2">
        <p class="font-semibold text-lg text-gray-800">Get Started for FREE</p>
        <img src="/arrow_right.svg" alt="" />
      </button>
    </div>
  );
}

