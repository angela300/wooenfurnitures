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
import {FaEye } from "react-icons/fa";

export const RollerImage2 = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const { addToCompare, isInCompare } = useCompare();
  const { addToWish, isInWish } = useWish();
  const [selectedProduct, setSelectedProduct] = useState(null);

    const { addToCart } = useCart();   // ✅ Correct placement
    const [qty, setQty] = useState(1);

  const navigate = useNavigate();

  const products = [
    {
      title: "classic grey 3 seater sofa",
      discount: "-11%",
      rating: 5,
      inStock: true,
      oldPrice: 36000,
      newPrice: 32000,
      img: "https://images.unsplash.com/photo-1549187774-b4e9b0445b41?auto=format&fit=crop&w=900&q=60",
    },
    {
      title: "Helsinki 7 seater dark Grey L-",
      discount: "-9%",
      rating: 5,
      inStock: true,
      oldPrice: 68000,
      newPrice: 62000,
      img: "https://images.unsplash.com/photo-1615873968403-89e068629265?auto=format&fit=crop&w=900&q=60",
    },
    {
      title: "6 by 6 White Bed With Two",
      discount: "-3%",
      rating: 4,
      inStock: true,
      oldPrice: 58000,
      newPrice: 56000,
      img: "https://images.unsplash.com/photo-1505693314120-0d443867891c?auto=format&fit=crop&w=900&q=60",
    },
    {
      title: "Austin 3 seater classic sofa",
      discount: "-6%",
      rating: 0,
      inStock: true,
      oldPrice: 34000,
      newPrice: 32000,
      img: "https://images.unsplash.com/photo-1567016432779-094069958ea5?auto=format&fit=crop&w=900&q=60",
    },
    {
      title: "6 seater brown l shaped sofa",
      discount: "-9%",
      rating: 0,
      inStock: true,
      oldPrice: 64000,
      newPrice: 58000,
      img: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=900&q=60",
    },

    // +5 more (to make 10)
    {
      title: "Modern navy 3 seater sofa",
      discount: "-8%",
      rating: 4,
      inStock: true,
      oldPrice: 50000,
      newPrice: 46000,
      img: "https://images.unsplash.com/photo-1549497538-303791108f95?auto=format&fit=crop&w=900&q=60",
    },
    {
      title: "Grey tufted chester bed 6x6",
      discount: "-7%",
      rating: 5,
      inStock: true,
      oldPrice: 72000,
      newPrice: 67000,
      img: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=900&q=60",
    },
    {
      title: "White TV stand modern design",
      discount: "-5%",
      rating: 4,
      inStock: true,
      oldPrice: 22000,
      newPrice: 20900,
      img: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=900&q=60",
    },
    {
      title: "Compact coffee table set",
      discount: "-10%",
      rating: 4,
      inStock: true,
      oldPrice: 15000,
      newPrice: 13500,
      img: "https://images.unsplash.com/photo-1615874959474-d609969a20ed?auto=format&fit=crop&w=900&q=60",
    },
    {
      title: "Beige L-shaped corner sofa",
      discount: "-6%",
      rating: 5,
      inStock: true,
      oldPrice: 70000,
      newPrice: 65800,
      img: "https://images.unsplash.com/photo-1598300056393-4aac492f4344?auto=format&fit=crop&w=900&q=60",
    },
  ];

  const formatKsh = (n) => `KSh ${Number(n).toLocaleString("en-KE")}`;

  const StarRow = ({ rating = 0 }) => {
    const full = Math.max(0, Math.min(5, rating));
    return (
      <div style={{ display: "flex", gap: 2, marginTop: 6 }}>
        {Array.from({ length: 5 }).map((_, i) => (
          <span
            key={i}
            style={{
              fontSize: 16,
              lineHeight: "16px",
              color: i < full ? "#f5b301" : "#d9d9d9",
            }}
          >
            ★
          </span>
        ))}
      </div>
    );
  };

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


  return (
    <div className="ri2-section" >
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
                      padding: "10px",
                      zIndex: 1005,
                      width: "80px",
                      height: "200px",
                      padding: "30px",
                      paddingTop: 20,
                      paddingBottom: 20,
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
                        size={30}
                        color={isInCompare(p.title) ? "green" : "grey"}
                      />
                    </div>
                    <CiSearch size={30} color="grey"   style={{ cursor: "pointer" }}
  onClick={() => setSelectedProduct(p)}/>

                    <div onClick={() => {
                      if (isInWish(p.title)) {
                        navigate("/Wish");
                      } else {
                        addToWish(p);
                      }
                    }}
                      style={{ cursor: "pointer" }}><FaHeart size={30} color={isInWish(p.title) ? "green" : "grey"} /></div>
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
        <h2>{selectedProduct.title}</h2>

        <p style={{ fontSize: "20px", fontWeight: "bold" }}>
          KSh {selectedProduct.newPrice}
        </p>

                <div className="ap-right">
                  <h1>{selectedProduct.title}</h1>
        
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
                      className="whatsapp-btn"
                      style={{borderRadius:0}}
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
                        className="add-cart"
                        onClick={handleAddToCart}
                      >
                        ADD TO CART
                      </button>
        
                      <button
                        className="buy-now"
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


                <img src={p.img} alt={p.title} className="ri2-img" />
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
    </div>
  );
};
