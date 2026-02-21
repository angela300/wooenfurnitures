import React, { useState, useEffect } from "react";
import "./rollerimage3.css";
import { FaTruck, FaLock, FaHeadset, FaUndo } from "react-icons/fa";
import "./App.css";

export const RollerImage3 = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const features = [
    {
      icon: <FaTruck />,
      title: "Free Delivery",
      desc: "On all orders above KSh 10,000",
    },
    {
      icon: <FaLock />,
      title: "Secure Payment",
      desc: "100% secure payment",
    },
    {
      icon: <FaUndo />,
      title: "Easy Returns",
      desc: "7 days return policy",
    },
    {
      icon: <FaHeadset />,
      title: "24/7 Support",
      desc: "Dedicated support team",
    },
  ];

  return (
    <div className="ri3-wrapper">
      {isMobile ? (
        /* ================= MOBILE ================= */
 <div
  style={{
    display: "flex",
    flexDirection: "column",
    gap: "18px",
    padding: "20px"
  }}
>
  {features.map((item, index) => (
    <div
      key={index}
      style={{
        display: "flex",
        alignItems: "flex-start",
        gap: "14px"
      }}
    >
      <div
        style={{
          fontSize: "20px",
          color: "#365fb5",
          marginTop: "3px"
        }}
      >
        {item.icon}
      </div>

      <div>
        <p
          style={{
            fontWeight: 600,
            fontSize: "14px",
            marginBottom: "4px",
            textAlign: "left"
          }}
        >
          {item.title}
        </p>

        <p
          style={{
            fontSize: "13px",
            color: "#666",
            textAlign: "left"
          }}
        >
          {item.desc}
        </p>
      </div>
    </div>
  ))}
</div>
      ) : (
        /* ================= DESKTOP (UNCHANGED) ================= */
        <div className="ri3-container">
          {features.map((item, index) => (
            <div className="ri3-card" key={index}>
              <div className="ri3-icon">{item.icon}</div>
              <div>
                <p className="LightFontBold">{item.title}</p>
                <p className="LightFont">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};