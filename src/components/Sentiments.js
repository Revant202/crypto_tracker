import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import React from "react";

export default function Sentiments() {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 2,
      slidesToSlide: 1, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
  };

  const estimates = { Buy: 76, Hold: 8, Sell: 16 }; // Replace with actual analyst estimates data from API

  return (
    <div className="flex flex-col md:p-8 p-4 gap-5 rounded-[8px] mt-6 bg-white">
      <p className="text-[24px] font-semibold">Sentiments</p>
      <div className="flex items-center gap-1">
        <p className="text-[18px] font-semibold text-[#44475B]">Key Events</p>
        <img src="/info.svg" alt="" />
      </div>
      <Carousel
        responsive={responsive}
        containerClass="carousel-container"
        //   itemClass="carousel-item-padding-40-px"
      >
        {[...Array(5)].map((_, index) => (
          <div className="bg-[#EBF9F4] rounded-[12px] overflow-hidden flex flex-row gap-2 md:p-4 p-2 items-start mr-3">
            <img
              src="/sentiment_icon.svg"
              alt=""
              className="my-1 md:w-[40px] w-[30px]"
            />
            <span>
              <p className="md:text-[14px] text-[12px] font-semibold text-[#191C1F]">
                Lorem ipsum dolor sit amet consectetur. Ac phaSellus risus est
                faucibus metus quis.
              </p>
              <p className="md:text-[14px] text-[12px] text-[#37474F] mt-1">
                Lorem ipsum dolor sit amet consectetur. Ac phaSellus risus est
                faucibus metus quis. Amet sapien quam viverra adipiscing
                condimentum. Ac consectetur et pretium in a bibendum in. Sed
                vitae sit nisi viverra natoque lacinia libero enim.
              </p>
            </span>
          </div>
        ))}
      </Carousel>
      <div className="flex items-center gap-1 mt-5">
        <p className="text-[18px] font-semibold text-[#44475B]">
          Analyst Estimates
        </p>
        <img src="/info.svg" alt="" />
      </div>
      <div className="flex md:gap-8 gap-4 my-2">
        <div className="rounded-full bg-[#F1FBF7] text-[#00C689] md:px-8 md:py-10 px-7 py-8 justify-center items-center">
          <p className="md:text-[45px] text-[20px]  font-semibold">
            {estimates.Buy}%
          </p>
        </div>
        <div className="flex flex-1 flex-col">
          {Object.entries(estimates).map(([key, value]) => (
            <div key={key} className="flex flex-1 items-center gap-5">
              <p className="text-[#7C7E8C] font-semibold md:text-[20px] min-w-[50px]">
                {key}
              </p>
              <div
                className={`h-[10px] rounded`}
                style={{
                  width: `${value}%`,
                  background: `${
                    key === "Buy"
                      ? "#00B386"
                      : key === "Hold"
                      ? "#C7C8CE"
                      : "#ff0000"
                  }`,
                }}
              ></div>
              <p className="text-[#7C7E8C] font-semibold md:text-[20px]">
                {value}%
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
