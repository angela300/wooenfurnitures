import React from "react";
import "./rollerimage5.css";
import { FaFacebookF, FaTwitter, FaPinterestP, FaLinkedinIn, FaTelegramPlane } from "react-icons/fa";
import wfun from "./assets/wfun.png";
import cop1 from "./assets/cop1.png";
import cop2 from "./assets/cop2.png";
import "./App.css";

import {
  FaCcVisa,
  FaCcMastercard,
  FaCcPaypal,
  FaCcAmex
} from "react-icons/fa";

export const RollerImage5 = () => {
  return (
    <div className="ri5-footer">
      <div style={{ width: "100%" }}>
        <div className="ri5-container">

          {/* LEFT SECTION */}
          <div className="ri5-col ri5-about">
            <div style={{backgroundColor:"white", width:"200px", height:"115px", display:"flex", flexDirectioon:"row", justifyContent:"center", alignItems:"center", paddingTop:"15px"}}>
              <img src={wfun} alt="Liberty Furniture" className="ri5-logo" />
            </div>

            <p className="LightFontFoot ri5-paragraph">
              Liberty Furniture has been manufacturing and trading for more than
              6 Years and still delivers the best quality and world-class furniture
              to its customers. We locally manufacture our own products. Being a local
              manufacturer, in addition to our standard range of products and designs,
              we can custom-make your furniture to suit your needs. Place your order
              online or visit us at Kahawa Sukari, along Thika Road.
            </p>

            <p className="LightFontFoot"><strong>Address:</strong> Kahawa Sukari, Nairobi.</p>
            <p className="LightFontFoot"><strong>Email:</strong> Support@libertyfurniture.co.ke</p>
            <p className="LightFontFoot"><strong>Tel:</strong> (+254) 722948285</p>
          </div>

          {/* OUR STORES */}
          <div className="ri5-col">
            <p className="LightFontBigFoot" >Our Stores</p>
            <p className="LightFontFoot">New York</p>
            <p className="LightFontFoot">Kahawa Sukari, Nairobi.</p>
          </div>

          {/* USEFUL LINKS */}
          <div className="ri5-col">
            <p className="LightFontBigFoot">Useful Links</p>
            <p className="LightFontFoot">Privacy Policy</p>
            <p className="LightFontFoot">Refund And Returns Policy</p>
            <p className="LightFontFoot">Shipping Policy</p>
            <p className="LightFontFoot">Contact Us</p>
          </div>

          {/* FOOTER MENU */}
          <div className="ri5-col">
            <p className="LightFontBigFoot">Footer Menu</p>
            <p className="LightFontFoot">My Account</p>
            <p className="LightFontFoot">Track Order</p>
            <p className="LightFontFoot">Shop</p>
          </div>

          {/* RIGHT SIDE */}
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
            Based on{" "}
            <span className="footer-heavy">
              LIBERTY FURNITURE
            </span>{" "}
            2023{" "}
            <span className="footer-heavy">
              FURNITURE STORE IN KENYA
            </span>.
          </p>
          <div className="footer-payments">
            <FaCcVisa className="payment-icon" />
            <FaCcMastercard className="payment-icon" />
            <FaCcPaypal className="payment-icon" />
            <FaCcAmex className="payment-icon" />
            <FaCcVisa className="payment-icon" /> {/* Visa Electron substitute */}
          </div>


        </div>

      </div>
    </div>
  );
};
