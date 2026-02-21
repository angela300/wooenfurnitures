import React, { useState, useEffect } from "react";
import "./rollerimage5.css";
import "./App.css";
import {
  FaFacebookF,
  FaTwitter,
  FaPinterestP,
  FaLinkedinIn,
  FaTelegramPlane,
  FaCcVisa,
  FaCcMastercard,
  FaCcPaypal,
  FaCcAmex
} from "react-icons/fa";

import wfun from "./assets/wfun.png";
import cop1 from "./assets/cop1.png";
import cop2 from "./assets/cop2.png";

export const RollerImage5 = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // ✅ MOBILE VERSION
  if (isMobile) {
    return (
      <div style={{ backgroundColor: "#111", color: "white", padding: "40px 20px" }}>
        
        {/* LOGO */}
        <div style={{ textAlign: "center", marginBottom: "30px" }}>
          <img src={wfun} alt="Liberty Furniture" style={{ width: "150px" }} />
        </div>

        {/* ABOUT TEXT */}
        <p className="LightFontFoot" style={{ textAlign: "center", marginBottom: "25px" }}>
          Liberty Furniture has been manufacturing and trading for more than
          6 Years and still delivers the best quality furniture to its customers.
        </p>

        {/* CONTACT */}
        <div style={{ textAlign: "center", marginBottom: "30px" }}>
          <p className="LightFontFoot"><strong>Address:</strong> Kahawa Sukari, Nairobi.</p>
          <p className="LightFontFoot"><strong>Email:</strong> Support@libertyfurniture.co.ke</p>
          <p className="LightFontFoot"><strong>Tel:</strong> (+254) 722948285</p>
        </div>

        {/* STORE BUTTONS */}
        <div style={{ textAlign: "center", marginBottom: "30px" }}>
          <img src={cop1} alt="Google Play" style={{ width: "140px", marginBottom: "10px" }} />
          <br />
          <img src={cop2} alt="App Store" style={{ width: "140px" }} />
        </div>

        {/* SOCIAL ICONS */}
        <div style={{ display: "flex", justifyContent: "center", gap: "15px", marginBottom: "30px" }}>
          <FaFacebookF />
          <FaTwitter />
          <FaPinterestP />
          <FaLinkedinIn />
          <FaTelegramPlane />
        </div>

        {/* FOOTER BOTTOM */}
        <div style={{ textAlign: "center", borderTop: "1px solid #333", paddingTop: "20px" }}>
          <p style={{ fontSize: "14px" }}>
            Based on <strong>LIBERTY FURNITURE</strong> 2023
          </p>

          <div style={{ display: "flex", justifyContent: "center", gap: "15px", marginTop: "10px", fontSize: "22px" }}>
            <FaCcVisa />
            <FaCcMastercard />
            <FaCcPaypal />
            <FaCcAmex />
          </div>
        </div>
      </div>
    );
  }

  // ✅ DESKTOP VERSION (UNCHANGED)
  return (
    <div className="ri5-footer">
      <div style={{ width: "100%" }}>
        <div className="ri5-container">

          <div className="ri5-col ri5-about">
            <div style={{backgroundColor:"white", width:"200px", height:"115px", display:"flex", justifyContent:"center", alignItems:"center", paddingTop:"15px"}}>
              <img src={wfun} alt="Liberty Furniture" className="ri5-logo" />
            </div>

            <p className="LightFontFoot ri5-paragraph">
              Liberty Furniture has been manufacturing and trading for more than
              6 Years and still delivers the best quality and world-class furniture
              to its customers.
            </p>

            <p className="LightFontFoot"><strong>Address:</strong> Kahawa Sukari, Nairobi.</p>
            <p className="LightFontFoot"><strong>Email:</strong> Support@libertyfurniture.co.ke</p>
            <p className="LightFontFoot"><strong>Tel:</strong> (+254) 722948285</p>
          </div>

          <div className="ri5-col">
            <p className="LightFontBigFoot">Our Stores</p>
            <p className="LightFontFoot">New York</p>
            <p className="LightFontFoot">Kahawa Sukari, Nairobi.</p>
          </div>

          <div className="ri5-col">
            <p className="LightFontBigFoot">Useful Links</p>
            <p className="LightFontFoot">Privacy Policy</p>
            <p className="LightFontFoot">Refund And Returns Policy</p>
            <p className="LightFontFoot">Shipping Policy</p>
            <p className="LightFontFoot">Contact Us</p>
          </div>

          <div className="ri5-col">
            <p className="LightFontBigFoot">Footer Menu</p>
            <p className="LightFontFoot">My Account</p>
            <p className="LightFontFoot">Track Order</p>
            <p className="LightFontFoot">Shop</p>
          </div>

          <div className="ri5-col">
            <p className="LightFontBigFoot">Available On:</p>

            <div className="ri5-storeBtns">
              <img src={cop1} alt="Google Play" className="ri5-storeImg" />
              <img src={cop2} alt="App Store" className="ri5-storeImg ri5-storeImgBorder" />
            </div>

            <p className="LightFontBigFoot ri5-socialTitle">Social Links:</p>

            <div className="ri5-social">
              <div className="social-icon fb"><FaFacebookF size={15} /></div>
              <div className="social-icon tw"><FaTwitter size={15} /></div>
              <div className="social-icon pin"><FaPinterestP size={15} /></div>
              <div className="social-icon li"><FaLinkedinIn size={15} /></div>
              <div className="social-icon tg"><FaTelegramPlane size={15} /></div>
            </div>
          </div>

        </div>

        <div className="footer-bottom-inner">
          <p style={{ fontSize: "16px" }}>
            Based on <span className="footer-heavy">LIBERTY FURNITURE</span> 2023
          </p>

          <div className="footer-payments">
            <FaCcVisa className="payment-icon" />
            <FaCcMastercard className="payment-icon" />
            <FaCcPaypal className="payment-icon" />
            <FaCcAmex className="payment-icon" />
          </div>
        </div>

      </div>
    </div>
  );
};