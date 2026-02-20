import React from "react";
import './RollerImage2.css';
import { FaWhatsapp } from "react-icons/fa";

export const RollerImage2 = () => {
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


  return (
    <div className="ri2-section" >
      <div className="ri2-inner">
        <div className="ri2-headerRow">
          <h2 className="ri2-title">Featured Products</h2>
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
              <div className="ri2-card" key={`${p.title}-${idx}`} style={{display:"flex", flexDirection:"column", justifyContent:"space-between", alignItems:"center"}}>
                <img src={p.img} alt={p.title} className="ri2-img" />
                <div className="ri2-body">
                  <p className="ri2-name">{p.title}</p>
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
                    <p className="check_stock">In stock</p>
                  </div>

                  <div className="ri2-priceRow">
                    <span className="ri2-oldPrice">KSh {p.oldPrice}</span>
                    <span className="ri2-newPrice">KSh {p.newPrice}</span>
                  </div>

                  <button className="ri2-btn">
                    <FaWhatsapp className="ri2-waIcon" size={22}/>
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
 