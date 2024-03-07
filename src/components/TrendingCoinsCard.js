import React from "react";

export default function TrendingCoinsCard({ data }) {
  const top3Coins = data?.coins.slice(0, 3);
  return (
    <div className="rounded-[8px] mx-5 mt-5 p-6 bg-white">
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
              <span></span>
              <span>
                {crypto.item.data.price_change_percentage_24h.btc
                  .toFixed(2)
                  .replace(/\.?0+$/, "")}
              </span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
