import React, { useState } from "react";
import "./App.css";
import WinePairing from "./WinePairing";

function App() {
  const [wine, setWine] = useState("");
  const [pairedWines, setPairedWines] = useState([]);
  const [pairingText, setPairingText] = useState("");
  const [productMatches, setProductMatches] = useState([]);
  const [error, setError] = useState(null);

  const fetchPairings = async () => {
    try {
      const response = await fetch(
        `https://api.spoonacular.com/food/wine/pairing?food=${wine}&apiKey=ceb679c95962406b800f09a784be72df`
      );
      if (!response.ok) {
        throw new Error("Error fetching data");
      }
      const data = await response.json();
      setPairedWines(data.pairedWines);
      setPairingText(data.pairingText);
      setProductMatches(data.productMatches);
      setError(null);
    } catch (error) {
      console.error("Error fetching pairings:", error);
      setError("An error occurred. Please try again.");
    }
  };

  return (
    <div className="App">
      <p>
        <img
          src="https://marioimages.netlify.app/cookncork.png"
          alt="logo"
        ></img>
      </p>
      <input
        type="text"
        placeholder="Enter a food (e.g., steak)"
        value={wine}
        onChange={(e) => setWine(e.target.value)}
        className="input"
      />
      <button onClick={fetchPairings} className="get-pairings">
        GET PAIRINGS
      </button>
      {error && <p>{error}</p>}
      <WinePairing
        pairedWines={pairedWines}
        pairingText={pairingText}
        productMatches={productMatches}
      />
    </div>
  );
}

export default App;
