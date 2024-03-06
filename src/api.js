// Function to fetch current price and 24hr change of Bitcoin
export const fetchBitcoinPrice = async () => {
  try {
    const response = await fetch(
      "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=inr,usd&include_24hr_change=true"
    );
    if (!response.ok) {
      throw new Error("Failed to fetch Bitcoin price");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching Bitcoin price:", error);
    return null;
  }
};

// Function to fetch trending cryptocurrencies
export const fetchTrendingCryptos = async () => {
  try {
    const response = await fetch(
      "https://api.coingecko.com/api/v3/search/trending"
    );
    if (!response.ok) {
      throw new Error("Failed to fetch trending cryptocurrencies");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching trending cryptocurrencies:", error);
    return null;
  }
};
