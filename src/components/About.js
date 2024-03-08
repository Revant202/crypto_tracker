import React from "react";

export default function About() {
  return (
    <div className="flex flex-col md:p-8 p-4 gap-5 rounded-[8px] mt-6 bg-white">
      <p className="text-[24px] font-semibold">About Bitcoin</p>
      <p className="text-[18px] font-bold">What is Bitcoin?</p>
      <p>
        Bitcoin’s price today is US$16,951.82, with a 24-hour trading volume of
        $19.14 B. BTC is +0.36% in the last 24 hours. It is currently -7.70%
        from its 7-day all-time high of $18,366.66, and 3.40% from its 7-day
        all-time low of $16,394.75. BTC has a circulating supply of 19.24 M BTC
        and a max supply of 21 M BTC.
      </p>
      <div className="border border-[#EDEEF3]" />
      <p className="text-[18px] font-bold">Lorem ipsum dolor sit amet</p>
      <p>
        Lorem ipsum dolor sit amet consectetur. Aliquam placerat sit lobortis
        tristique pharetra. Diam id et lectus urna et tellus aliquam dictum at.
        Viverra diam suspendisse enim facilisi diam ut sed. Quam scelerisque
        fermentum sapien morbi sodales odio sed rhoncus. Ultricies urna volutpat
        pendisse enim facilisi diam ut sed. Quam scelerisque fermentum sapien
        morbi sodales odio sed rhoncus.
      </p>
      <p>
        Diam praesent massa dapibus magna aliquam a dictumst volutpat. Egestas
        vitae pellentesque auctor amet. Nunc sagittis libero adipiscing cursus
        felis pellentesque interdum. Odio cursus phasellus velit in senectus
        enim dui. Turpis tristique placerat interdum sed volutpat. Id imperdiet
        magna eget eros donec cursus nunc. Mauris faucibus diam mi nunc praesent
        massa turpis a. Integer dignissim augue viverra nulla et quis lobortis
        phasellus. Integer pellentesque enim convallis ultricies at
      </p>
      <p>
        Fermentum hendrerit imperdiet nulla viverra faucibus. Sit aliquam massa
        vel convallis duis ac. Mi adipiscing semper scelerisque porttitor
        pulvinar nunc risus. Fermentum potenti iaculis lacinia congue ipsum
        fames amet dui. Purus ultrices tincidunt volutpat in eget. Ullamcorper
        dui
      </p>
      <div className="border border-[#EDEEF3]" />
      <p className="text-[24px] font-semibold">Already Holding Bitcoin?</p>
      <div className="flex lg:flex-row flex-col gap-8">
        <div className="bg-gradient-to-br from-[#79F1A4] to-[#0E5CAD] rounded-[7px]  flex flex-row md:p-6 p-3 items-center gap-6">
          <figure className="rounded-[7px] overflow-hidden max-w-[128px] ">
            <img src="/profits.svg" alt="" />
          </figure>
          <span className="flex flex-col flex-1 items-start gap-4">
            <p className="text-[20px] text-white font-bold max-w-40">
              Calculate your Profits
            </p>
            <button class="flex items-center justify-center px-4 py-1 bg-white rounded-lg shadow-md gap-2">
              <p class="font-bold text-gray-800 text-[12px]">Check Now</p>
              <img src="/arrow_right.svg" alt="" />
            </button>
          </span>
        </div>
        <div className="bg-gradient-to-br from-[#FF9865] to-[#EF3031] rounded-[7px]  flex flex-row md:p-6 p-3 items-center gap-6">
          <figure className="rounded-[7px] overflow-hidden max-w-[128px] ">
            <img src="/profits.svg" alt="" />
          </figure>
          <span className="flex flex-col flex-1 items-start gap-4">
            <p className="text-[20px] text-white font-bold max-w-40">
              Calculate your tax liability
            </p>
            <button class="flex items-center justify-center px-4 py-1 bg-white rounded-lg shadow-md gap-2">
              <p class="font-bold text-gray-800 text-[12px]">Check Now</p>
              <img src="/arrow_right.svg" alt="" />
            </button>
          </span>
        </div>
      </div>
      <p>
        Fermentum hendrerit imperdiet nulla viverra faucibus. Sit aliquam massa
        vel convallis duis ac. Mi adipiscing semper scelerisque porttitor
        pulvinar nunc risus. Fermentum potenti iaculis lacinia congue ipsum
        fames amet dui. Purus ultrices tincidunt volutpat in eget. Ullamcorper
        dui
      </p>
    </div>
  );
}
