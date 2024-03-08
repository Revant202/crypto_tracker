import React from "react";
import DoughnutChart from "./DoughnutChart";

export default function Tokenomics() {
  const doughnutChartData = [
    { name: "Crowdsale investors", value: 80, color: "#0082FF" },
    { name: "Foundation", value: 20, color: "#FAA002" },
  ];

  return (
    <div className="flex flex-col md:p-8 p-4 gap-5 rounded-[8px] mt-6 bg-white ">
      <p className="text-[24px] font-semibold">Tokenomics</p>
      <p className="text-[20px] font-semibold">Initial Distribution</p>
      <div className="flex md:flex-row flex-col gap-6 items-center">
        <DoughnutChart data={doughnutChartData} width={200} height={200} />
        <div className="flex flex-col md:gap-2">
          {doughnutChartData.map((data, index) => (
            <div key={index} className="flex items-center  gap-2">
              <div
                className="w-4 h-4 rounded-full"
                style={{ backgroundColor: data.color }}
              ></div>
              <p className="text-[#3E424A]">{data.name}:</p>
              <p className="text-[#3E424A]">{data.value}%</p>
            </div>
          ))}
        </div>
      </div>
      {/* <img src="/tokenomics.svg" alt="" /> */}
      <p className="text-[#3E424A]">
        Lorem ipsum dolor sit amet consectetur. Cras aliquet tristique ornare
        vestibulum nunc dignissim vel consequat. Leo etiam nascetur bibendum
        amet enim sit eget leo amet. At metus orci augue fusce eleifend lectus
        eu fusce adipiscing. Volutpat ultrices nibh sodales massa habitasse urna
        felis augue. Gravida aliquam fermentum augue eu. Imperdiet bibendum amet
        aliquam donec. Eget justo dui metus odio rutrum. Vel ipsum eget in at
        curabitur sem posuere facilisis vitae. Sed lorem sit mauris id eget arcu
        ut. Vulputate ipsum aliquet odio nisi eu ac risus.
      </p>
    </div>
  );
}
