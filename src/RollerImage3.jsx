import React from "react";
import "./rollerimage3.css";
import { FaTruck, FaLock, FaHeadset, FaUndo } from "react-icons/fa";
import "./App.css"

export const RollerImage3 = () => {
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
    </div>
  );
};
