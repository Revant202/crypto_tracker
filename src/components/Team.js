import React from "react";

export default function Team() {
  return (
    <div className="flex flex-col p-4 gap-5 rounded-[6px] bg-white">
      <p>Sentiments</p>
      <p>
        Lorem ipsum dolor sit amet consectetur. Cras aliquet tristique ornare
        vestibulum nunc dignissim vel consequat. Leo etiam nascetur bibendum
        amet enim sit eget leo amet.
      </p>
      {[...Array(5)].map((_, index) => (
        <div className="bg-[#E8F4FD] rounded-[12px]  flex flex-row  px-7 py-5 items-center justify-center">
          <span className="flex flex-col justify-center items-center mx-5">
            <img src="/member.svg" alt="" className="m-2" />
            <p className="text-[14px] font-bold text-center">John Smith</p>
            <p className="text-[10px] text-center">John Smith</p>
          </span>
          <p className="text-[16px] ">
            Lorem ipsum dolor sit amet consectetur. In justo rutrum sit sit
            fermentum ut libero hendrerit id. Tellus sit ornare netus sagittis
            in nunc convallis mattis maecenas. Tempus arcu leo sociis laoreet
            nec neque sed pellentesque viverra. Consectetur proin amet ut id
            facilisi quis consectetur. Tellus gravida ultricies feugiat sed eu
            egestas dolor est ipsum. Malesuada etiam mi gravida praesent interdu
          </p>
        </div>
      ))}
    </div>
  );
}

