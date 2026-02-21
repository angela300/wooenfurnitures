import { useState } from "react";
import "./SearchPopup.css";
import "./RollerImage1.css";

const SearchPopup = ({ products = [], onClose }) => {
  const [query, setQuery] = useState("");

  const popularRequests = [
    "bed",
    "wood",
    "laminate",
    "installation",
    "materials"
  ];

  // Only filter if user typed something
  const filteredProducts =
    query.trim() === ""
      ? []
      : products.filter((product) =>
          product.title.toLowerCase().includes(query.toLowerCase()) ||
          product.category.toLowerCase().includes(query.toLowerCase())
        );

  return (
    <div className="search-overlay">
      <div className="search-popup">

        {/* Close Button */}
        <button className="close-btn" onClick={onClose}>
          ✕
        </button>

        {/* Search Input */}
        <input
          type="text"
          placeholder="Search for products..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          autoFocus
          className="LightFont"
        />

        {/* Popular Requests */}
        <div style={{ marginTop: "20px" }}>
          <p
            className="LightFont"
            style={{ fontWeight: "600", marginBottom: "10px" }}
          >
            Popular requests
          </p>

          <div
            style={{
              display: "flex",
              gap: "15px",
              flexWrap: "wrap"
            }}
          >
            {popularRequests.map((item) => (
              <div
                key={item}
                onClick={() => setQuery(item)}
                style={{
                  padding: "8px 16px",
                  backgroundColor: "#f6f6f6",
                  borderRadius: "3px",
                  cursor: "pointer",
                  fontSize: "14px",
                  transition: "0.2s ease"
                }}
              >
                <p className="LightFontBold" style={{fontSize:"12px"}}>{item.toUpperCase()}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Show grid ONLY when user typed something */}
        {query.trim() !== "" && (
          <div className="roller-grid" style={{ marginTop: "30px" }}>
            {filteredProducts.length > 0 ? (
              filteredProducts.map((c) => (
                <div
                  className="roller-card"
                  key={c.title}
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between"
                  }}
                >
                  <img src={c.img} alt={c.title} />
                  <div
                    style={{
                      height: "100px",
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "flex-end"
                    }}
                  >
                    <p className="roller-card-title">{c.title}</p>
                    <p className="LightFont">{c.count} products</p>
                  </div>
                </div>
              ))
            ) : (
              <p style={{ marginTop: "20px" }}>No products found</p>
            )}
          </div>
        )}

      </div>
    </div>
  );
};

export default SearchPopup;
