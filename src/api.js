// Function to fetch crypto data
export const fetchCryptoData = async (cryptoId) => {
  try {
    const response = await fetch(
      `https://api.coingecko.com/api/v3/coins/${cryptoId}`
    );
    if (!response.ok) {
      throw new Error("Failed to fetch data of ", cryptoId);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching data", error);
    return null;
  }
};
// Function to fetch current price and 24hr change of Crypto
export const fetchCryptoPrice = async (cryptoId) => {
  try {
    const response = await fetch(
      `https://api.coingecko.com/api/v3/simple/price?ids=${cryptoId}&vs_currencies=inr,usd&include_24hr_change=true`
    );
    if (!response.ok) {
      throw new Error("Failed to fetch data of ", cryptoId);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching data", error);
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
