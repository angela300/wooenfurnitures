import { useState, useEffect } from "react";
import "./trackOrder.css";
import "./App.css";

export const AboutUs = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

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
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        width: "100%"
      }}
    >
      {isMobile ? (
        /* ================= MOBILE ================= */
        <div
          style={{
            width: "100%",
            padding: "40px 20px",
            display: "flex",
            flexDirection: "column",
            gap: "20px"
          }}
        >
          <p
            className="LightFontVeryBig"
            style={{ color: "#448EE4" }}
          >
            About Us
          </p>

          <p className="LightFont">
            Liberty furniture has established itself in the marketplace as a leading
            furniture store in providing top quality and trend design furniture.
            We believe in the liberty way, setting high standards and dedication
            in order to find a way to say yes.
          </p>

          <p className="LightFont">
            We locally manufacture our own products. In addition to that, we can
            custom make your furniture to suit your needs such as color preference
            and several other aspects.
          </p>

          <p className="LightFont">
            Our product flow management tools are essential to satisfy customer
            demand, order fulfillment, and inventory levels for our customers.
            We are a company founded on the core principle of service and
            transparency. We value the relationships with our customers.
          </p>
        </div>
      ) : (
        /* ================= DESKTOP (UNCHANGED) ================= */
        <div
          style={{
            width: "650px",
            padding: "100px",
            paddingLeft: "30px",
            display: "flex",
            flexDirection: "column",
            gap: "25px",
            alignItems: "flex-start"
          }}
        >
          <p
            className="LightFontVeryBig"
            style={{ color: "#448EE4" }}
          >
            About Us
          </p>

          <p className="LightFont">
            Liberty furniture has established itself in the marketplace as a
            leading furniture store in providing top quality and trend design
            furniture. We believe in the liberty way, setting high standards and
            dedication in order to find a way to say yes.
          </p>

          <p className="LightFont">
            We locally manufacture our own products. In addition to that, we can
            custom make your furniture to suit your needs such as color preference
            and several other aspects.
          </p>

          <p className="LightFont">
            Our product flow management tools are essential to satisfy customer
            demand, order fulfillment, and inventory levels for our customers.
            We are a company founded on the core principle of service and
            transparency. We value the relationships with our customers.
          </p>
        </div>
      )}
    </div>
  );
};