import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import React from "react";

export default function Slider() {
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
    <Carousel
      responsive={responsive}
      containerClass="carousel-container h-[calc(100vh-470px)]"
      //   itemClass="carousel-item-padding-40-px"
    >
      <div className="bg-[#EBF9F4] rounded-[12px]  h-[calc(100vh-470px)] w-[460px] flex flex-row gap-2 p-4 items-start">
        <img src="/sentiment_icon.svg" alt="" className="m-2" />
        <span>
          <p className="text-[16px] font-bold">
            Lorem ipsum dolor sit amet consectetur. Ac phasellus risus est
            faucibus metus quis.
          </p>
          <p className="text-[16px] ">
            Lorem ipsum dolor sit amet consectetur. Ac phasellus risus est
            faucibus metus quis. Amet sapien quam viverra adipiscing
            condimentum. Ac consectetur et pretium in a bibendum in. Sed vitae
            sit nisi viverra natoque lacinia libero enim.
          </p>
        </span>
      </div>
    </Carousel>
  );
}
