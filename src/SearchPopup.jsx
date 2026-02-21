import { useState, useEffect } from "react";
import "./SearchPopup.css";
import "./RollerImage1.css";

const SearchPopup = ({ products = [], onClose }) => {
  const [query, setQuery] = useState("");
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  const popularRequests = [
    "bed",
    "wood",
    "laminate",
    "installation",
    "materials"
  ];

  // Detect screen resize
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Filter only when user types
  const filteredProducts =
    query.trim() === ""
      ? []
      : products.filter(
          (product) =>
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
                <p
                  className="LightFontBold"
                  style={{ fontSize: "12px" }}
                >
                  {item.toUpperCase()}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Results Grid */}
        {query.trim() !== "" && (
          <div
            className={!isMobile ? "roller-grid" : ""}
            style={
              isMobile
                ? {
                    marginTop: "30px",
                    display: "grid",
                    gridTemplateColumns: "repeat(2, 1fr)",
                    gap: "15px"
                  }
                : { marginTop: "30px" }
            }
          >
            {filteredProducts.length > 0 ? (
              filteredProducts.map((c) => (
                <div
                  key={c.title}
                  className={!isMobile ? "roller-card" : ""}
                  style={
                    isMobile
                      ? {
                          background: "#fff",
                          padding: "10px",
                          display: "flex",
                          flexDirection: "column",
                          boxShadow:
                            "0 2px 6px rgba(0,0,0,0.05)"
                        }
                      : {
                          display: "flex",
                          flexDirection: "column",
                          justifyContent: "space-between"
                        }
                  }
                >
                  <img
                    src={c.img}
                    alt={c.title}
                    style={
                      isMobile
                        ? {
                            width: "100%",
                            height: "120px",
                            objectFit: "cover"
                          }
                        : {}
                    }
                  />

                  <div
                    style={{
                      height: "100px",
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "flex-end"
                    }}
                  >
                    <p className="roller-card-title">
                      {c.title}
                    </p>
                    <p className="LightFont">
                      {c.count} products
                    </p>
                  </div>
                </div>
              ))
            ) : (
              <p style={{ marginTop: "20px" }}>
                No products found
              </p>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default SearchPopup;