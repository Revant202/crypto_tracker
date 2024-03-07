import React from "react";

export default function Team() {
  return (
    <div className="flex flex-col p-8 gap-5 rounded-[8px] mt-6 bg-white">
      <p className="text-[24px] font-semibold">Team</p>
      <p className="text-[#3E424A]">
        Lorem ipsum dolor sit amet consectetur. Cras aliquet tristique ornare
        vestibulum nunc dignissim vel consequat. Leo etiam nascetur bibendum
        amet enim sit eget leo amet.
      </p>
      {[...Array(3)].map((_, index) => (
        <div className="bg-[#E8F4FD] rounded-[12px]  flex flex-row  px-8 py-4 items-center justify-center">
          <span className="flex flex-col  items-center mr-5">
            <figure className="m-2 rounded-[7px] overflow-hidden flex-1 w-[96px] ">
              <img
                src="/member.svg"
                alt=""
                // className="m-2 rounded-[7px] overflow-hidden flex-1"
                // width={100}
                // height={110}
              />
            </figure>
            <p className="text-[15px] font-semibold text-center">John Smith</p>
            <p className="text-[12px] text-gray-600 text-center">
              Designation here
            </p>
          </span>
          <p className="text-[16px] text-[#3E424A]">
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
