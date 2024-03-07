import React, { useEffect, useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import { fetchBitcoinPrice, fetchTrendingCryptos } from "./api";
import GetStartedCard from "./components/GetStartedCard";
import TrendingCoinsCard from "./components/TrendingCoinsCard";
import Sentiments from "./components/Sentiments";
import Tokenomics from "./components/Tokenomics";
import Team from "./components/Team";
import About from "./components/About";
import RecommendedCoins from "./components/RecommendedCoins";
import Performance from "./components/Performance";
import Chart from "./components/Chart";

function App() {
  const [bitcoinData, setBitcoinData] = useState(null);
  const [trendingCryptos, setTrendingCryptos] = useState(null);
  console.log(bitcoinData);
  useEffect(() => {
    const fetchData = async () => {
      const bitcoinPriceData = await fetchBitcoinPrice();
      const trendingCryptosData = await fetchTrendingCryptos();

      setBitcoinData(bitcoinPriceData);
      setTrendingCryptos(trendingCryptosData);
    };

    fetchData();
  }, []);
  return (
    <div className="flex h-full flex-col bg-[#EFF2F5]">
      <Navbar />
      <div className="flex gap-2 mx-16 mt-5 items-center">
        <p className="text-[14px] text-[#546A77]">Cryptocurrencies</p>
        <img src="/double_arrow.svg" alt="" />
        <p className="text-[14px] font-semibold text-black">Bitcoin</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 md:gap-8  p-4 mx-auto max-w-[1500px] bg-[#EFF2F5]">
        <div className="md:col-span-2">
          <Chart data={bitcoinData} />
          <Performance />
          <Sentiments />
          <About />
          <Tokenomics />
          <Team />
        </div>
        <div className="md:col-span-1">
          <GetStartedCard />
          {/* <h2>Bitcoin Price:</h2>
            {bitcoinData && (
              <div>
                <p>INR: {bitcoinData.bitcoin.inr}</p>
                <p>USD: {bitcoinData.bitcoin.usd}</p>
                <p>24hr Change: {bitcoinData.bitcoin.inr_24h_change}%</p>
                </div>
            )} */}
          <TrendingCoinsCard data={trendingCryptos} />
        </div>
      </div>
      <RecommendedCoins data={trendingCryptos} />
    </div>
  );
}

export default App;
