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
      img: "/wooenfurnitures/items/sofas/sofa2.png",
    },
    {
      title: "Sofa set designs",
      count: 85,
      img: "/wooenfurnitures/items/sofas/sofa1.png",
    },
    {
      title: "Mirror Beds",
      count: 9,
      img: "/wooenfurnitures/items/beds/bed1.png",
    },
    {
      title: "Recliner Sofas",
      count: 11,
      img: "/wooenfurnitures/items/sofas/sofa6.png",
    },

    {
      title: "TV Stand designs",
      count: 16,
      img: "/wooenfurnitures/items/tvstands/tvstand1.png",
    },
    {
      title: "Wooden beds",
      count: 28,
      img: "/wooenfurnitures/items/beds/bed4.png",
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