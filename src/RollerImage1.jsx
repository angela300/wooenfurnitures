import React, { useState, useEffect } from "react";
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
  // ================= SOFAS =================
  {
    id: 1,
    category: "SOFAS",
    subCategory: "Standard Sofas",
    title: "modern fabric sofa",
    discount: "-10%",
    oldPrice: 55000,
    newPrice: 49500,
    img: "/wooenfurnitures/items/sofas/sofa1.png",
    inStock: true,
    onSale: true,
  },
  {
    id: 2,
    category: "SOFAS",
    subCategory: "Standard Sofas",
    title: "luxury L-shaped sofa",
    discount: "-8%",
    oldPrice: 72000,
    newPrice: 66000,
    img: "/wooenfurnitures/items/sofas/sofa2.png",
    inStock: true,
    onSale: true,
  },
    {
    id: 3,
    category: "SOFAS",
    subCategory: "Standard Sofas",
    title: "Grey L-shaped sofa",
    discount: "-8%",
    oldPrice: 72000,
    newPrice: 66000,
    img: "/wooenfurnitures/items/sofas/sofa3.png",
    inStock: true,
    onSale: true,
  },
    {
    id: 4,
    category: "SOFAS",
    subCategory: "Standard Sofas",
    title: "Chester sofa",
    discount: "-8%",
    oldPrice: 72000,
    newPrice: 66000,
    img: "/wooenfurnitures/items/sofas/sofa4.png",
    inStock: true,
    onSale: true,
  },
    {
    id: 5,
    category: "SOFAS",
    subCategory: "Standard Sofas",
    title: "luxury 3-Seater sofa",
    discount: "-8%",
    oldPrice: 72000,
    newPrice: 66000,
    img: "/wooenfurnitures/items/sofas/sofa5.png",
    inStock: true,
    onSale: true,
  },
    {
    id: 6,
    category: "SOFAS",
    subCategory: "Standard Sofas",
    title: "Standard Recliner sofa",
    discount: "-8%",
    oldPrice: 72000,
    newPrice: 66000,
    img: "/wooenfurnitures/items/sofas/sofa6.png",
    inStock: true,
    onSale: true,
  },

  // ================= BEDS =================
  {
    id: 7,
    category: "BEDROOM",
    subCategory: "Modern Beds",
    title: "queen size upholstered bed",
    discount: "-7%",
    oldPrice: 48000,
    newPrice: 44600,
    img: "/wooenfurnitures/items/beds/bed1.png",
    inStock: true,
    onSale: true,
  },
  {
    id: 8,
    category: "BEDROOM",
    subCategory: "Modern Beds",
    title: "king size wooden bed frame",
    discount: "-9%",
    oldPrice: 65000,
    newPrice: 59000,
    img: "/wooenfurnitures/items/beds/bed2.png",
    inStock: true,
    onSale: true,
  },
  {
    id: 9,
    category: "BEDROOM",
    subCategory: "Modern Beds",
    title: "Standard king size bed",
    discount: "-8%",
    oldPrice: 72000,
    newPrice: 66000,
    img: "/wooenfurnitures/items/beds/bed3.png",
    inStock: true,
    onSale: true,
  },
    {
    id: 10,
    category: "BEDROOM",
    subCategory: "Modern Beds",
    title: "Comfy dense king size bed",
    discount: "-8%",
    oldPrice: 72000,
    newPrice: 66000,
    img: "/wooenfurnitures/items/beds/bed4.png",
    inStock: true,
    onSale: true,
  },
  // ================= DRAWERS =================
  {
    id: 11,
  category: "LIVING ROOM",   // ✅ changed
  subCategory: "Drawer Units",
    title: "modern 5 drawer chest",
    discount: "-6%",
    oldPrice: 32000,
    newPrice: 30000,
    img: "/wooenfurnitures/items/drawers/drawers1.png",
    inStock: true,
    onSale: true,
  },

  // ================= TV STANDS =================
  {
    id: 12,
    category: "LIVING ROOM",
    subCategory: "TV Stands",
    title: "modern floating tv stand",
    discount: "-8%",
    oldPrice: 35000,
    newPrice: 32200,
    img: "/wooenfurnitures/items/tvstands/tvstand1.png",
    inStock: true,
    onSale: true,
  },

];

  /* ================= MOBILE ================= */
  if (isMobile) {
    return (
      <div style={{ padding: "20px" }}>
        <h2 style={{ textAlign: "center", marginBottom: "20px" }}>
          Popular Categories
        </h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(2, 1fr)",
            gap: "15px",
          }}
        >
          {categories.map((c) => (
            <div
              key={c.title}
              style={{
                background: "#fff",
                border: "1px solid #eee",
                padding: "10px",
                borderRadius: 0,
              }}
            >
              <Link to={`/product/${c.title}`}>
                <img
                  src={c.img}
                  alt={c.title}
                  style={{
                    width: "100%",
                    height: "120px",
                    objectFit: "cover",
                    borderRadius: 0,
                  }}
                />
              </Link>

              <div style={{ marginTop: "8px" }}>
                <p style={{ fontSize: "14px", fontWeight: "600", margin: 0 }}>
                  {c.title}
                </p>
                <p style={{ fontSize: "12px", color: "#666", margin: 0 }}>
                  {c.count} products
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  /* ================= DESKTOP ================= */
  return (
    <div style={{ padding: "60px 80px" }}>
      <h2 style={{ marginBottom: "40px" }}>Popular Categories</h2>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: "30px",
        }}
      >
        {categories.map((c) => (
          <div
            key={c.title}
            style={{
              background: "#fff",
              border: "1px solid #eee",
              padding: "20px",
              borderRadius: 0,
              transition: "0.3s",
              cursor: "pointer",
            }}
          >
            <Link to={`/product/${c.title}`}>
              <img
                src={c.img}
                alt={c.title}
                style={{
                  width: "100%",
                  height: "220px",
                  objectFit: "cover",
                  borderRadius: 0,
                }}
              />
            </Link>

            <div style={{ marginTop: "15px" }}>
              <p
                style={{
                  fontSize: "18px",
                  fontWeight: "600",
                  marginBottom: "5px",
                }}
              >
                {c.title}
              </p>
              <p style={{ color: "#666", margin: 0 }}>
                {c.count} products
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};