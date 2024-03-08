// App.js
import React, { useEffect, useState, useRef } from "react";
import { useParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import { fetchCryptoData, fetchCryptoPrice, fetchTrendingCryptos } from "../api";
import GetStartedCard from "../components/GetStartedCard";
import TrendingCoinsCard from "../components/TrendingCoinsCard";
import Sentiments from "../components/Sentiments";
import Tokenomics from "../components/Tokenomics";
import Team from "../components/Team";
import About from "../components/About";
import RecommendedCoins from "../components/RecommendedCoins";
import Performance from "../components/Performance";
import Chart from "../components/Chart";
import NavigationTabs from "../components/NavigationTabs";


export default function CryptoPage() {
 const { cryptoId } = useParams(); // "bitcoin", "ethereum", "ripple"
  const [cryptoPrice, setCryptoPrice] = useState(null);
  const [cryptoData, setCryptoData] = useState(null);
  const [trendingCryptos, setTrendingCryptos] = useState(null);
  const overviewRef = useRef(null);
  const insightsRef = useRef(null);
  const sentimentsRef = useRef(null);
  const tokenomicsRef = useRef(null);
  const teamRef = useRef(null);

  useEffect(() => {
    const fetchData = async () => {
      const cryptoData = await fetchCryptoData(cryptoId);
      const cryptoPrice = await fetchCryptoPrice(cryptoId);
      const trendingCryptosData = await fetchTrendingCryptos();
      console.log("cryptoData", cryptoData);
      console.log("cryptoPrice", cryptoPrice);
      console.log("trendingCryptosData", trendingCryptosData);
      setCryptoData(cryptoData);
      setCryptoPrice(cryptoPrice);
      setTrendingCryptos(trendingCryptosData);
    };

    fetchData();
  }, []);

  const scrollToSection = (ref) => {
    ref.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="flex h-full flex-col bg-[#EFF2F5]">
      <Navbar />
      <div className="flex gap-2 mx-14 mt-5 items-center">
        <p className="text-[14px] text-[#546A77] mb-[5px]">Cryptocurrencies</p>
        <img src="/double_arrow.svg" alt="" />
        <p className="text-[14px] font-semibold text-black mb-[3px]">
          {cryptoData?.name}
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 md:gap-8  p-4 mx-auto max-w-[1500px] bg-[#EFF2F5]">
        <div className="md:col-span-2">
          <Chart
            priceData={cryptoPrice && cryptoPrice[cryptoId]}
            cryptoData={cryptoData}
          />
          <NavigationTabs
            onTabClick={(tabName) => {
              switch (tabName) {
                case "Overview":
                  scrollToSection(overviewRef);
                  break;
                case "Fundamentals":
                  scrollToSection(overviewRef);
                  break;
                case "Insights":
                  scrollToSection(insightsRef);
                  break;
                case "Sentiments":
                  scrollToSection(sentimentsRef);
                  break;
                case "Tokenomics":
                  scrollToSection(tokenomicsRef);
                  break;
                case "Team":
                  scrollToSection(teamRef);
                  break;
                default:
                  break;
              }
            }}
          />
          <div ref={overviewRef}>
            <Performance cryptoData={cryptoData} />
          </div>
          <div ref={sentimentsRef}>
            <Sentiments />
          </div>
          <div ref={insightsRef}>
            <About cryptoData={cryptoData} />
          </div>
          <div ref={tokenomicsRef}>
            <Tokenomics />
          </div>
          <div ref={teamRef}>
            <Team />
          </div>
        </div>
        <div className="md:col-span-1">
          <GetStartedCard />
          <TrendingCoinsCard data={trendingCryptos} />
        </div>
      </div>
      <RecommendedCoins data={trendingCryptos} />
    </div>
  );
}
