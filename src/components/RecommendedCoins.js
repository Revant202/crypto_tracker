import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import React from "react";

export default function RecommendedCoins({ data }) {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 2000 },
      items: 5,
      slidesToSlide: 1, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 2000, min: 1000 },
      items: 3,
      slidesToSlide: 1, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 1000, min: 0 },
      items: 2,
      slidesToSlide: 1, // optional, default to 1.
    },
  };

  return (
    <div className="flex flex-col p-4 gap-5 rounded-[6px] bg-white">
      <p>You May Also Like</p>
      {data && (
        <Carousel
          responsive={responsive}
          containerClass="carousel-container h-[calc(100vh-500px)]"
          //   itemClass="carousel-item-padding-40-px"
        >
          {data?.coins?.map((crypto, index) => (
            <div
              key={index}
              className="flex flex-col justify-center rounded-[10px] border-[1px] border-[#E3E3E3] p-4 mr-2 overflow-hidden"
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
                <p>
                  {crypto.item.data.price_change_percentage_24h.btc
                    .toFixed(2)
                    .replace(/\.?0+$/, "")}
                </p>
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
