import React from "react";

export default function TrendingCoinsCard({ data }) {
  const top3Coins = data?.coins.slice(0, 3);
  return (
    <div className="rounded-[8px] md:mr-5 mt-5 p-6 bg-white">
      <p className="text-[24px] font-semibold mb-4">Trending Coins (24h)</p>
      {top3Coins && (
        <div className="flex flex-col justify-center gap-6">
          {top3Coins.map((crypto, index) => (
            <div key={index} className="flex justify-between items-center">
              <div className="flex justify-center items-center gap-2">
                <img
                  src={crypto.item.thumb}
                  className="rounded-full"
                  alt=""
                  width={24}
                  height={24}
                />
                <p className="text-[16px] font-semibold">
                  {crypto.item.name} ({crypto.item.symbol})
                </p>
              </div>
              <div
                className={`py-[4px] px-[6px] rounded-[4px] ${
                  crypto.item.data.price_change_percentage_24h.btc > 0
                    ? "bg-[#F1FBF7] text-[#00C689]"
                    : "bg-[#FEF0EE] text-[#FF4D4F]"
                }`}
              >
                <p className="text-[16px] font-semibold">
                  {crypto.item.data.price_change_percentage_24h.btc > 0
                    ? "+"
                    : ""}
                  {crypto.item.data.price_change_percentage_24h.btc
                    .toFixed(2)
                    .replace(/\.?0+$/, "")}
                  %
                </p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
