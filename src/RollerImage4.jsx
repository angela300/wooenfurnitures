import React from "react";
import { FaEnvelope } from "react-icons/fa";

export const RollerImage4 = () => {

  return (
    <div
      style={{
        position: "relative",
        width: "100%",
        height: "150px",
        backgroundColor: "#d28a00",   // golden color
        color: "white",
        padding: "0 40px",
        boxSizing: "border-box",
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-start",
      }}
    >

      {/* Icon */}
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

      {/* Text Section */}
      <div>
     <p className="LightFontVeryBig" style={{marginBottom:"10px"}}>
        
          Sign up To Us Newsletter
        </p>

        <p
         className="LightFont" style={{color:"white"}}
        >
          Be the First to Know. Sign up to newsletter today
        </p>
      </div>

    </div>
  );
};
