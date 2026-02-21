import React, { useEffect, useState } from "react";
import { useWish } from "./WishContext";

export const Wish = () => {
  const { wishItems, removeFromWish } = useWish();
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  // Detect screen resize
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div
      style={{
        padding: isMobile ? "20px" : "40px"
      }}
    >
      <h2 style={{ marginBottom: "20px" }}>Wishlist</h2>

      {wishItems.length === 0 && <p>No items added.</p>}

      <div
        style={{
          display: "grid",
          gridTemplateColumns: isMobile ? "repeat(2, 1fr)" : "repeat(auto-fill, minmax(250px, 1fr))",
          gap: isMobile ? "15px" : "20px"
        }}
      >
        {wishItems.map((item, index) => (
          <div
            key={index}
            style={{
              border: "1px solid #ddd",
              padding: isMobile ? "12px" : "20px",
              cursor: "pointer",
              transition: "0.2s",
              background: "#fff"
            }}
            onClick={() => removeFromWish(item.title)}
          >
            <img
              src={item.img}
              alt={item.title}
              style={{
                width: "100%",
                height: isMobile ? "120px" : "150px",
                objectFit: "cover",
                marginBottom: "10px"
              }}
            />

            <h4
              style={{
                fontSize: isMobile ? "14px" : "16px",
                margin: "5px 0"
              }}
            >
              {item.title}
            </h4>

            <p
              style={{
                fontSize: isMobile ? "13px" : "15px",
                fontWeight: "600"
              }}
            >
              KSh {item.newPrice.toLocaleString()}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};