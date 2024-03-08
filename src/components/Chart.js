import React from "react";
import { AdvancedRealTimeChart } from "react-ts-tradingview-widgets";

export default function Chart({ priceData, cryptoData }) {
  return (
    <div className="flex flex-col rounded-[8px] bg-white overflow-hidden">
      <div className="flex items-center gap-2 p-6">
        <img src={cryptoData?.image?.thumb} alt="" />
        <p className="text-[24px] font-semibold">{cryptoData?.name}</p>
        <p className="text-[16px] text-[#5D667B] font-semibold">
          {cryptoData?.symbol.toUpperCase()}
        </p>
      </div>
      {priceData && (
        <div className="flex items-start gap-10 px-6 mb-4">
          <div className="flex flex-col">
            <p className="text-[28px] font-semibold">${priceData.usd}</p>
            <p className="text-[16px]">₹{priceData.inr}</p>
          </div>
          <div className="flex gap-2  items-center mt-2">
            <div
              className={`py-[4px] px-[6px] rounded-[4px] ${
                priceData.inr_24h_change > 0
                  ? "bg-[#F1FBF7] text-[#00C689]"
                  : "bg-[#FEF0EE] text-[#FF4D4F]"
              }`}
            >
              <p className="text-[16px] font-semibold">
                {priceData.inr_24h_change > 0 ? "+" : "-"}
                {priceData.inr_24h_change.toFixed(2).replace(/\.?0+$/, "")}%
              </p>
            </div>
            <p className="text-[#768396] text-[14px]">(24H)</p>
          </div>
        </div>
      )}
      {/* <div className="border border-[#EDEEF3] m-6" /> */}
      <div className="h-[calc(100vh-200px)]">
        <AdvancedRealTimeChart
          theme="light"
          autosize={true}
          symbol="AAPL"
          timezone="Etc/UTC"
          style="2"
          locale="in"
          enable_publishing={false}
          hide_top_toolbar={true}
          withdateranges={true}
          range="ALL"
          // save_image={false}
          calendar={false}
          hide_volume={true}
          hide_side_toolbar={true}
          allow_symbol_change={false}
          hide_legend={true}
        />
      </div>
    </div>
  );
}
