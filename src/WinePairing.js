import React from "react";
import "./WinePairing.css";

function WinePairing({ pairedWines, pairingText, productMatches }) {
  return (
    <div className="wine-pairing">
      <h2>Paired Wines:</h2>
      <ul className="paired-wines-list">
        {pairedWines.map((wine, index) => (
          <li key={index}>{wine}</li>
        ))}
      </ul>
      <p>{pairingText}</p>
      <hr></hr>
      <h2>Product Matches:</h2>
      <ul className="product-matches-list">
        <br></br>
        {productMatches.map((match) => (
          <li key={match.id} className="product-match">
            <div className="product-info">
              <img
                src={match.imageUrl}
                alt={match.title}
                className="product-image"
              />
              <div className="product-details">
                <h3>{match.title}</h3>
                <p>{match.description}</p>
                {/* <p>Price: {match.price}</p> */}
                <a
                  href={match.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="buy-button"
                >
                  Buy on Amazon
                </a>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default WinePairing;
