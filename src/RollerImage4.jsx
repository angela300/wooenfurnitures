import React, { useState, useEffect } from "react";
import { FaEnvelope } from "react-icons/fa";

export const RollerImage4 = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // ✅ MOBILE VIEW
  if (isMobile) {
    return (
      <div
        style={{
          width: "100%",
          backgroundColor: "#d28a00",
          color: "white",
          padding: "30px 20px",
          boxSizing: "border-box",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          gap: "15px", marginTop:"60px"
        }}
      >
        <FaEnvelope size={50} color="white" />

        <p className="LightFontVeryBig" style={{ margin: 0 }}>
          Sign up To Us Newsletter
        </p>

        <p className="LightFont" style={{ color: "white", margin: 0 }}>
          Be the First to Know. Sign up to newsletter today
        </p>
      </div>
    );
  }

  // ✅ DESKTOP VIEW (UNCHANGED)
  return (
    <div
      style={{
        position: "relative",
        width: "100%",
        height: "150px",
        backgroundColor: "#d28a00",
        color: "white",
        padding: "0 40px",
        boxSizing: "border-box",
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-start",
      }}
    >
      <div
        style={{
          borderRadius: "6px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          marginRight: "50px",
        }}
      >
        <FaEnvelope size={90} color="white" />
      </div>

      <div>
        <p className="LightFontVeryBig" style={{ marginBottom: "10px" }}>
          Sign up To Us Newsletter
        </p>

        <p className="LightFont" style={{ color: "white" }}>
          Be the First to Know. Sign up to newsletter today
        </p>
      </div>
    </div>
  );
};