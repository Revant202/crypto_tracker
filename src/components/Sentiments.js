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
      items: 2,
      slidesToSlide: 1, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
  };

  return (
    <div className="flex flex-col p-4 gap-5 rounded-[8px] mt-6 bg-white">
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
          <div className="bg-[#EBF9F4] rounded-[12px] overflow-hidden flex flex-row gap-2 p-4 items-start mr-3">
            <img src="/sentiment_icon.svg" alt="" className="m-2" />
            <span>
              <p className="text-[14px] font-semibold text-[#191C1F]">
                Lorem ipsum dolor sit amet consectetur. Ac phasellus risus est
                faucibus metus quis.
              </p>
              <p className="text-[14px] text-[#37474F] mt-1">
                Lorem ipsum dolor sit amet consectetur. Ac phasellus risus est
                faucibus metus quis. Amet sapien quam viverra adipiscing
                condimentum. Ac consectetur et pretium in a bibendum in. Sed
                vitae sit nisi viverra natoque lacinia libero enim.
              </p>
            </span>
          </div>
        ))}
      </Carousel>
      <div className="flex items-center gap-1">
        <p className="text-[18px] font-semibold text-[#44475B]">
          Analyst Estimates
        </p>
        <img src="/info.svg" alt="" />
      </div>
      <img src="/analystEstimate.svg" alt="" className="m-2" />
    </div>
  );
}
