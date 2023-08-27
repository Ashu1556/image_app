import React, { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [store, setStore] = useState([]);

  const fethchUnplashApi = async () => {
    try {
      const accessKey = "lo8fP0p_zESKa7JYMoQefre6UaRPCGAuAYp-ZP3pbGU";
      const endpoint = "https://api.unsplash.com/photos/random/?count=50";

      const response = await fetch(endpoint, {
        headers: {
          Authorization: `Client-ID ${accessKey}`,
        },
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const data = await response.json();
      setStore(data);
    } catch (error) {
      console.error("Error fetching photos:", error);
    }
  };

  useEffect(() => {
    fethchUnplashApi();
  }, []);

  console.log(store);

  return (
    <div>
      <h1>Unsplash Photos</h1>

      <div style={{ display: "flex", flexFlow: "wrap", gap: "10px" }}>
        {store.map((photo) => (
          <div key={photo.id}>
            <div className="photo-grid">
              <img
                src={photo.urls.small}
                alt={photo.description}
                style={{ width: "fit-content", height: "fit-content" }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
