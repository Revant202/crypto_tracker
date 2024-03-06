import React, { useEffect, useState } from "react";
import "./App.css";
import { AdvancedRealTimeChart } from "react-ts-tradingview-widgets";
import Navbar from "./components/Navbar";
import { fetchBitcoinPrice, fetchTrendingCryptos } from "./api";
import GetStartedCard from "./components/GetStartedCard";
import TrendingCoinsCard from "./components/TrendingCoinsCard";
import Slider from "./components/Slider";

function App() {
  const [bitcoinData, setBitcoinData] = useState(null);
  const [trendingCryptos, setTrendingCryptos] = useState(null);

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
    <main className="flex min-h-screen flex-col bg-[#EAEEF4]">
      <Navbar />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4 mx-10">
        <div className="h-[calc(100vh-200px)]  col-span-2 rounded-[8px]">
          <AdvancedRealTimeChart
            theme="light"
            autosize={true}
            symbol="AAPL"
            timezone="Etc/UTC"
            style="2"
            locale="in"
            enable_publishing={false}
            hide_top_toolbar={true}
            withdateranges={true}
            range="ALL"
            // save_image={false}
            calendar={false}
            hide_volume={true}
            hide_side_toolbar={true}
            allow_symbol_change={false}
            hide_legend={true}
          />
        <Slider />
        </div>
        <div className="col-span-1">
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
    </main>
  );
}

export default App;
