import React from "react";

export default function Performance() {
  return (
    <div className="flex flex-col p-4 gap-5 rounded-[8px] mt-6 bg-white">
      <p className="text-[24px] font-semibold">Performance</p>
      <div className="flex">
        <img src="/performance.svg" alt="" />
      </div>
      <div className="flex items-center gap-1">
        <p className="text-[18px] font-semibold text-[#44475B]">Fundamentals</p>
        <img src="/info.svg" alt="" />
      </div>
      <img src="/fundamentals.svg" alt="" />
    </div>
  );
}
