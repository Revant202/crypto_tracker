import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import React from "react";

export default function RecommendedCoins({ data }) {
  const responsive = {
    desktop: {
      breakpoint: { max: 5000, min: 2000 },
      items: 5,
      slidesToSlide: 2, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 2000, min: 1000 },
      items: 5,
      slidesToSlide: 2, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 1000, min: 0 },
      items: 2,
      slidesToSlide: 1, // optional, default to 1.
    },
  };

  return (
    <div className="flex flex-col md:p-16 p-4 gap-5 bg-white mt-8">
      <p className="text-[24px] font-semibold">You May Also Like</p>
      {data && (
        <Carousel
          responsive={responsive}
          containerClass="carousel-container "
          //   itemClass="carousel-item-padding-40-px"
        >
          {data?.coins?.map((crypto, index) => (
            <div
              key={index}
              className="flex flex-col justify-center rounded-[10px] border-[1px] border-[#E3E3E3] p-4 mr-2 overflow-hidden "
            >
              <div className="flex gap-2">
                <img
                  src={crypto.item.thumb}
                  className="rounded-full"
                  alt=""
                  width={24}
                  height={24}
                />
                <p className="text-[16px] font-semibold">
                  {crypto.item.symbol}
                </p>
                <div
                  className={`py-[4px] px-[6px] rounded-[4px] ${
                    crypto.item.data.price_change_percentage_24h.btc > 0
                      ? "bg-[#F1FBF7] text-[#00C689]"
                      : "bg-[#FEF0EE] text-[#FF4D4F]"
                  }`}
                >
                  <p className="text-[12px] font-semibold">
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
              <p className="text-[16px] font-semibold line-clamp-1">
                {crypto.item.data.price}
              </p>
              <img
                src={crypto.item.data.sparkline}
                alt=""
                className="py-2 px-4"
                // width={24}
                // height={24}
              />
            </div>
          ))}
        </Carousel>
      )}
      <p className="text-[24px] font-semibold">Trending coins</p>
      {data && (
        <Carousel
          responsive={responsive}
          containerClass="carousel-container"
          //   itemClass="carousel-item-padding-40-px"
        >
          {data?.coins?.map((crypto, index) => (
            <div
              key={index}
              className="flex flex-col justify-center rounded-[10px] border-[1px] border-[#E3E3E3] p-4 mr-2 mb-2 overflow-hidden"
            >
              <div className="flex gap-2">
                <img
                  src={crypto.item.thumb}
                  className="rounded-full"
                  alt=""
                  width={24}
                  height={24}
                />
                <p className="text-[16px] font-semibold">
                  {crypto.item.symbol}
                </p>
                <div
                  className={`py-[4px] px-[6px] rounded-[4px] ${
                    crypto.item.data.price_change_percentage_24h.btc > 0
                      ? "bg-[#F1FBF7] text-[#00C689]"
                      : "bg-[#FEF0EE] text-[#FF4D4F]"
                  }`}
                >
                  <p className="text-[12px] font-semibold">
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
              <p className="text-[16px] font-semibold line-clamp-1">
                {crypto.item.data.price}
              </p>
              <img
                src={crypto.item.data.sparkline}
                alt=""
                className="py-2 px-4"
                // width={24}
                // height={24}
              />
            </div>
          ))}
        </Carousel>
      )}
    </div>
  );
}
