import React, { useEffect, useState } from "react";
import "./App.css";
import { AdvancedRealTimeChart } from "react-ts-tradingview-widgets";
import Navbar from "./components/Navbar";
import { fetchBitcoinPrice, fetchTrendingCryptos } from "./api";

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
    <main className="flex min-h-screen flex-col bg-transparent">
      <Navbar />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4 mx-10">
        <div className="h-[calc(100vh-200px)] lg:w-[calc(100vw-600px)] col-span-2">
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
        </div>
        <div className="col-span-1">
          <div className="flex flex-col text-center justify-center items-center px-10 py-6 rounded-[8px] bg-primary text-white ">
            <p className="text-[#F2F2F2] font-bold text-[24px] mx-10 mb-4">
              Get Started with KoinX for FREE
            </p>
            <img src="/get_started.svg" alt="Koinx Logo" />
            <p className="text-[#F2F2F2] text-[14px]">
              With our range of features that you can equip for free, KoinX
              allows you to be more educated and aware of your tax reports.
            </p>
          </div>
          <div>
            <h2>Bitcoin Price:</h2>
            {bitcoinData && (
              <div>
                <p>INR: {bitcoinData.bitcoin.inr}</p>
                <p>USD: {bitcoinData.bitcoin.usd}</p>
                <p>24hr Change: {bitcoinData.bitcoin.inr_24h_change}%</p>
              </div>
            )}
            <h2>Trending Cryptocurrencies:</h2>
            {trendingCryptos && (
              <ul>
                {trendingCryptos.coins.map((crypto, index) => (
                  <li key={index}>{crypto.item.name}</li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </div>
    </main>
  );
}

export default App;
