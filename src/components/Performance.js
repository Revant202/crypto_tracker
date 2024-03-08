import React from "react";

export default function Performance({ cryptoData}) {
  return (
    <div className="flex flex-col md:p-8 p-4 gap-5 rounded-[8px] mt-6 bg-white">
      <p className="text-[24px] font-semibold">Performance</p>
      {/* <div className="flex">
        <img src="/performance.svg" alt="" />
      </div> */}
      <div className="flex items-center gap-1">
        <p className="text-[18px] font-semibold text-[#44475B]">Fundamentals</p>
        <img src="/info.svg" alt="" />
      </div>
      <div className="flex flex-col md:flex-row md:justify-between md:gap-24">
        <div className="flex flex-1 flex-col">
          <div className="flex justify-between py-4 gap-2 border-b-2 border-[#EDEEF3]">
            <p className="text-[#768396]">
              {cryptoData?.name} Price
            </p>
            <p className="text-[#111827] font-semibold">$16,815.46</p>
          </div>
          <div className="flex justify-between py-4 gap-2 border-b-2 border-[#EDEEF3]">
            <p className="text-[#768396]">24h Low / 24h High</p>
            <p className="text-[#111827] font-semibold">
              $16,382.07 / $16,874.12
            </p>
          </div>
          <div className="flex justify-between py-4 gap-2 border-b-2 border-[#EDEEF3]">
            <p className="text-[#768396]">7d Low / 7d High</p>
            <p className="text-[#111827] font-semibold">
              $16,382.07 / $16,874.12
            </p>
          </div>
          <div className="flex justify-between py-4 gap-2 border-b-2 border-[#EDEEF3]">
            <p className="text-[#768396]">Trading Volume</p>
            <p className="text-[#111827] font-semibold">$23,249,202,782</p>
          </div>
          <div className="flex justify-between py-4 gap-2 border-b-2 border-[#EDEEF3]">
            <p className="text-[#768396]">Market Cap Rank</p>
            <p className="text-[#111827] font-semibold">#1</p>
          </div>
        </div>
        <div className="flex flex-1 flex-col">
          <div className="flex justify-between py-4 gap-2 border-b-2 border-[#EDEEF3]">
            <p className="text-[#768396]"> Market Cap</p>
            <p className="text-[#111827] font-semibold">$323,507,290,047</p>
          </div>
          <div className="flex justify-between py-4 gap-2 border-b-2 border-[#EDEEF3]">
            <p className="text-[#768396]">4h Low / 24h High</p>
            <p className="text-[#111827] font-semibold">38.343%</p>
          </div>
          <div className="flex justify-between py-4 gap-2 border-b-2 border-[#EDEEF3]">
            <p className="text-[#768396]">Volume / Market Cap</p>
            <p className="text-[#111827] font-semibold">0.0718</p>
          </div>
          <div className="flex justify-between py-4 gap-2 border-b-2 border-[#EDEEF3]">
            <p className="text-[#768396]">All-Time High</p>
            <p className="text-[#111827] font-semibold">
              $69,044.77 <span className="text-[#FF4D4F]">-75.6%</span>
            </p>
          </div>
          <div className="flex justify-between py-4 gap-2 border-b-2 border-[#EDEEF3]">
            <p className="text-[#768396]">All-Time Low</p>
            <p className="text-[#111827] font-semibold">
              $67.81 <span className="text-[#00C689]">+24729.1%</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
