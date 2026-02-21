import React from "react";
import './RollerImage2.css';
import { FaWhatsapp } from "react-icons/fa";
import { useState } from "react";
import { FaHeart, FaExchangeAlt, FaShoppingCart, FaChevronDown } from "react-icons/fa";
import { CiSearch } from "react-icons/ci";
import { useCompare } from "./CompareContext";
import { useWish } from "./WishContext";
import { useNavigate } from "react-router-dom";
import { useCart } from "./CartContext";
import { FaEye } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useRef, useEffect } from "react";
import "./App.css"

export const RollerImage2 = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const { addToCompare, isInCompare } = useCompare();
  const { addToWish, isInWish } = useWish();
  const [selectedProduct, setSelectedProduct] = useState(null);

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const [expandedCategory, setExpandedCategory] = useState(null);
  const [activeTab, setActiveTab] = useState("CATEGORIES");
  const [profileOpen, setProfileOpen] = useState(false);
  const navRef = useRef(null);

  const { addToCart } = useCart();   // ✅ Correct placement
  const [qty, setQty] = useState(1);

  const navigate = useNavigate();

const products = [
  // ================= SOFAS =================
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

  const formatKsh = (n) => `KSh ${Number(n).toLocaleString("en-KE")}`;

  const handleAddToCart = () => {
    addToCart(
      {
        id: selectedProduct.id,
        title: selectedProduct.title,
        price: selectedProduct.newPrice,
        img: selectedProduct.img,
      },
      qty
    );
  };


      // Detect screen resize
    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 768);
        };
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);


  return (
    <>
        <div className="ri2-section" >
{isMobile ? (
<div className="ri2-inner">
  <div
    style={{
      textAlign: "center",
      marginBottom: "25px"
    }}
  >
    <h2 className="LightFontBigger">Featured Products</h2>

    <div
      style={{
        display: "flex",
        justifyContent: "center",
        gap: "20px",
        marginTop: "10px",
        fontSize: "13px",
        fontWeight: 600
      }}
    >
      <span style={{ borderBottom: "2px solid #000" }}>NEW</span>
      <span>FEATURED</span>
      <span>TOP SELLERS</span>
    </div>
  </div>

  {/* Mobile Grid */}
  <div
    style={{
      display: "grid",
      gridTemplateColumns: "repeat(2, 1fr)",
      gap: "15px"
    }}
  >
    {products.map((p, idx) => {
      const rating = Math.max(0, Math.min(5, Number(p.rating || 0)));

      return (
        <div
          key={`${p.title}-${idx}`}
          style={{
            background: "#fff",
            padding: "12px",
            boxShadow: "0 2px 6px rgba(0,0,0,0.05)",
            position: "relative",
            display: "flex",
            flexDirection: "column"
          }}
        >
          {/* Wishlist */}
          <div
            onClick={() => {
              if (isInWish(p.title)) {
                navigate("/Wish");
              } else {
                addToWish(p);
              }
            }}
            style={{
              position: "absolute",
              top: "10px",
              right: "10px",
              background: "#fff",
              width: "30px",
              height: "30px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              boxShadow: "0 2px 6px rgba(0,0,0,0.15)",
              cursor: "pointer"
            }}
          >
            <FaHeart
              size={14}
              color={isInWish(p.title) ? "green" : "#999"}
            />
          </div>

          <Link to={`/product/${p.title}`}>
            <img
              src={p.img}
              alt={p.title}
              style={{
                width: "100%",
                height: "140px",
                objectFit: "cover"
              }}
            />
          </Link>

          <div style={{ marginTop: "10px" }}>
            <p
              style={{
                fontSize: "13px",
                fontWeight: 600,
                marginBottom: "6px"
              }}
            >
              {p.title}
            </p>

            {/* Stars */}
            <div style={{ fontSize: "12px", color: "#f5a623" }}>
              {"★".repeat(rating)}
              {"☆".repeat(5 - rating)}
            </div>

            {/* Price */}
            <div
              style={{
                marginTop: "6px",
                fontSize: "13px",
                display: "flex",
                gap: "8px"
              }}
            >
              <span style={{ textDecoration: "line-through", color: "#999" }}>
                {formatKsh(p.oldPrice)}
              </span>
              <span style={{ fontWeight: 600 }}>
                {formatKsh(p.newPrice)}
              </span>
            </div>

            {/* WhatsApp */}
<button
  style={{
    marginTop: "10px",
    width: "100%",
    padding: "12px",
    paddingTop:"3px",
       paddingBottom:"3px",
    background: "#25D366",
    color: "white",
    border: "none",
    fontSize: "12px",
    fontWeight: 600,
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "8px", borderRadius:0
  }}
  onClick={() =>
    window.open(
      `https://wa.me/254700025861?text=Hello%20I%20would%20like%20to%20order%20${encodeURIComponent(
        p.title
      )}`,
      "_blank"
    )
  }
>
  <FaWhatsapp size={18} style={{ marginTop: "1px" }} />
  ORDER VIA WHATSAPP
</button>
          </div>
        </div>
      );
    })}
  </div>
</div>
) :(
        <div className="ri2-inner">
        <div className="ri2-headerRow">
          <h2 className="LightFontBigger">Featured Products</h2>
          <div className="ri2-tabs">
            <span className="ri2-tab active">NEW</span>
            <span className="ri2-tab">FEATURED</span>
            <span className="ri2-tab">TOP SELLERS</span>
          </div>
        </div>

        <div className="ri2-grid">
          {products.map((p, idx) => {
            const rating = Math.max(0, Math.min(5, Number(p.rating || 0)));

            return (
              <div onMouseEnter={() => setHoveredIndex(idx)}
                onMouseLeave={() => setHoveredIndex(null)} className="ri2-card" key={`${p.title}-${idx}`} style={{ display: "flex", flexDirection: "column", justifyContent: "space-between", alignItems: "center", position: "relative", }}>
                {hoveredIndex === idx && (
                  <div
                    style={{
                      position: "absolute",
                      right: "25px",
                      top: "25px",
                      background: "#eee",
                      zIndex: 1005,
                      width: "50px",
                      height: "130px",
                      paddingTop: 15,
                      paddingBottom: 15,
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "space-between",
                      alignItems: "center",
                    }}
                  >
                    <div
                      onClick={() => {
                        if (isInCompare(p.title)) {
                          navigate("/compare");
                        } else {
                          addToCompare(p);
                        }
                      }}
                      style={{ cursor: "pointer" }}
                    >
                      <FaExchangeAlt
                        size={20}
                        color={isInCompare(p.title) ? "green" : "grey"}
                      />
                    </div>
                    <CiSearch size={20} color="grey" style={{ cursor: "pointer" }}
                      onClick={() => setSelectedProduct(p)} />

                    <div onClick={() => {
                      if (isInWish(p.title)) {
                        navigate("/Wish");
                      } else {
                        addToWish(p);
                      }
                    }}
                      style={{ cursor: "pointer" }}><FaHeart size={20} color={isInWish(p.title) ? "green" : "grey"} /></div>
                  </div>)}

                {selectedProduct && (
                  <div
                    style={{
                      position: "fixed",
                      inset: 0,
                      background: "rgba(0,0,0,0.1)",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      zIndex: 9999
                    }}
                    onClick={() => setSelectedProduct(null)} // close on outside click
                  >
                    {/* Modal Box */}
                    <div
                      style={{
                        width: "80%",
                        maxWidth: "1000px",
                        background: "white",
                        padding: "30px",
                        display: "flex",
                        gap: "30px",
                        position: "relative"
                      }}
                      onClick={(e) => e.stopPropagation()} // prevent closing when clicking inside
                    >
                      {/* Close Button */}
                      <div
                        onClick={() => setSelectedProduct(null)}
                        style={{
                          position: "absolute",
                          top: "15px",
                          right: "20px",
                          fontSize: "22px",
                          cursor: "pointer"
                        }}
                      >
                        ✕
                      </div>

                      {/* Image */}
                      <img
                        src={selectedProduct.img}
                        alt={selectedProduct.title}
                        style={{ width: "50%", objectFit: "cover" }}
                      />

                      {/* Details */}
                      <div style={{ flex: 1 }}>

                        <div className="ap-right">
                          <p className="LightFontBold">{selectedProduct.title}</p>

                          <div className="ap-price">
                            <span className="ap-old">
                              KSh {selectedProduct.oldPrice.toLocaleString()}
                            </span>
                            <span className="ap-new">
                              KSh {selectedProduct.newPrice.toLocaleString()}
                            </span>
                          </div>

                          {/* ORDER SECTION */}
                          <div className="ap-orderBox">

                            {/* WhatsApp */}
                            <button
                              className="whatsappBtnQview"
                              style={{ borderRadius: 0 }}
                              onClick={() =>
                                window.open(
                                  `https://wa.me/254700025861?text=Hello%20I%20would%20like%20to%20order%20${encodeURIComponent(product.title)}`,
                                  "_blank"
                                )
                              }
                            >
                              ORDER VIA WHATSAPP
                            </button>

                            <div className="qty-cart">
                              <div className="qty">
                                <button onClick={() => setQty(qty > 1 ? qty - 1 : 1)}>
                                  -
                                </button>
                                <span>{qty}</span>
                                <button onClick={() => setQty(qty + 1)}>+</button>
                              </div>

                              <button
                                className="addcartBtnQview"
                                onClick={handleAddToCart}
                              >
                                ADD TO CART
                              </button>

                              <button
                                className="buyBtnQview"
                                onClick={() => {
                                  handleAddToCart();
                                  navigate("/checkout");
                                }}
                              >
                                BUY NOW
                              </button>
                            </div>
                          </div>

                          {/* Wishlist / Compare */}
                          <div className="ap-links">
                            <span><FaHeart /> Add to wishlist</span>
                            <span><FaExchangeAlt /> Add to compare</span>
                          </div>

                          {/* Watching section */}
                          <div className="ap-watch">
                            <FaEye /> 15 People watching this product now!
                          </div>

                        </div>
                      </div>
                    </div>
                  </div>
                )}

                <Link to={`/product/${p.title}`}>
                  <img src={p.img} alt={p.title} className="ri2-img" />
                </Link>
                <div className="ri2-body">
                  <p className="LightFontBold">{p.title}</p>
                  {/* ⭐ Stars */}
                  <div className="ri2-stars" aria-label={`${rating} out of 5 stars`}>
                    {Array.from({ length: 5 }).map((_, i) => (
                      <span
                        key={i}
                        className={`ri2-star ${i < rating ? "filled" : ""}`}
                      >
                        ★
                      </span>
                    ))}
                  </div>

                  <div className="ri2-stockRow">
                    <span className="ri2-check">✓</span>
                    <p className="LightFontBold">In stock</p>
                  </div>

                  <div className="ri2-priceRow">
                    <span className="ri2-oldPrice">KSh {p.oldPrice}</span>
                    <span className="ri2-newPrice">KSh {p.newPrice}</span>
                  </div>

                  <button className="ri2-btn">
                    <FaWhatsapp className="ri2-waIcon" size={15} />
                    <p
                      className="order_via_wasp"
                      onClick={() =>
                        window.open(
                          "https://wa.me/254700025861?text=Hello%20I%20would%20like%20to%20place%20an%20order",
                          "_blank"
                        )
                      }
                      style={{ cursor: "pointer" }}
                    >
                      ORDER VIA WHATSAPP
                    </p>

                  </button>
                </div>
              </div>
            );
          })}

        </div>

      </div>
      )}
      
    </div>
    </>

  );
};
