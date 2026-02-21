import React, { useState, useEffect } from "react";
import "./rollerimage1.css";
import { Link } from "react-router-dom";

export const RollerImage1 = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const categories = [
    {
      title: "L-Shaped Sofas",
      count: 107,
      img: "https://images.unsplash.com/photo-1549187774-b4e9b0445b41?w=800",
    },
    {
      title: "Chester Beds",
      count: 56,
      img: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=800",
    },
    {
      title: "Sofa set designs",
      count: 85,
      img: "https://images.unsplash.com/photo-1615873968403-89e068629265?w=800",
    },
    {
      title: "Mirror Beds",
      count: 9,
      img: "https://images.unsplash.com/photo-1505693314120-0d443867891c?w=800",
    },
    {
      title: "Chester seats",
      count: 25,
      img: "https://images.unsplash.com/photo-1567016432779-094069958ea5?w=800",
    },
    {
      title: "Wing Chair",
      count: 15,
      img: "https://images.unsplash.com/photo-1598300056393-4aac492f4344?w=800",
    },
    {
      title: "Semi-Recliner Sofas",
      count: 11,
      img: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800",
    },
    {
      title: "DINING TABLE DESIGNS",
      count: 22,
      img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800",
    },
    {
      title: "Coffee Tables",
      count: 21,
      img: "https://images.unsplash.com/photo-1615874959474-d609969a20ed?w=800",
    },
    {
      title: "TV Stand designs",
      count: 16,
      img: "https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?w=800",
    },
    {
      title: "Wooden beds",
      count: 28,
      img: "https://images.unsplash.com/photo-1540518614846-7eded433c457?w=800",
    },
    {
      title: "Office Chairs",
      count: 19,
      img: "https://images.unsplash.com/photo-1588854337115-1c67d9247e4d?w=800",
    },
  ];

  return (
    <div className="roller-wrapper">
      <div className="roller-container">
        <p
          className="LightFontBigger"
          style={{ marginBottom: "30px", textAlign: isMobile ? "center" : "left" }}
        >
          <strong>Popular Categories</strong>
        </p>

        <div
          className={!isMobile ? "roller-grid" : ""}
          style={
            isMobile
              ? {
                  display: "grid",
                  gridTemplateColumns: "repeat(2, 1fr)", // 2 per row on mobile
                  gap: "15px",
                }
              : {}
          }
        >
          {categories.map((c) => (
            <div
              key={c.title}
              className={!isMobile ? "roller-card" : ""}
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                background: isMobile ? "#fff" : "",
                boxShadow: isMobile
                  ? "0 2px 6px rgba(0,0,0,0.05)"
                  : "",
                padding: isMobile ? "10px" : "",
              }}
            >
              <Link to={`/product/${c.title}`}>
                <img
                  src={c.img}
                  alt={c.title}
                  style={{
                    width: "100%",
                    height: isMobile ? "120px" : "",
                    objectFit: "cover",
                  }}
                />
              </Link>

              <div style={{ marginTop: isMobile ? "10px" : "" }}>
                <p
                  className="roller-card-title"
                  style={{ fontSize: isMobile ? "14px" : "" }}
                >
                  {c.title}
                </p>
                <p
                  className="LightFont"
                  style={{ fontSize: isMobile ? "12px" : "" }}
                >
                  {c.count} products
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};