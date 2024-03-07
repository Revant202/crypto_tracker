// NavigationTabs.js
import React, { useState } from "react";

const NavigationTabs = ({ onTabClick }) => {
  const [activeTab, setActiveTab] = useState("Overview");

  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
    onTabClick(tabName);
  };

  return (
    <div className="overflow-x-auto">
      <div className="flex gap-8 mt-8 mb-4 border-b border-[#D3E0E6]">
        {[
          "Overview",
          "Fundamentals",
          "Sentiments",
          "Insights",
          "Tokenomics",
          "Team",
          "Technicals",
        ].map((tab) => (
          <div
            key={tab}
            className={`cursor-pointer ${
              activeTab === tab ? "border-b-2 border-[#0141CF]" : ""
            }`}
            onClick={() => handleTabClick(tab)}
          >
            <p
              className={`font-semibold my-2  ${
                activeTab === tab ? "text-[#0141CF]" : "text-[#3E424A]"
              }`}
            >
              {tab}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NavigationTabs;
