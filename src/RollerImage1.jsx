import React from "react";
import "./rollerimage1.css";

export const RollerImage1 = () => {
const categories = [
  {
    title: "L-Shaped Sofas",
    count: 107,
    img: "https://images.unsplash.com/photo-1549187774-b4e9b0445b41?w=800",
  },
  {
    title: "Chester Beds",
    count: 56,
    img: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=800",
  },
  {
    title: "Sofa set designs",
    count: 85,
    img: "https://images.unsplash.com/photo-1615873968403-89e068629265?w=800",
  },
  {
    title: "Mirror Beds",
    count: 9,
    img: "https://images.unsplash.com/photo-1505693314120-0d443867891c?w=800",
  },
  {
    title: "Chester seats",
    count: 25,
    img: "https://images.unsplash.com/photo-1567016432779-094069958ea5?w=800",
  },
  {
    title: "Wing Chair",
    count: 15,
    img: "https://images.unsplash.com/photo-1598300056393-4aac492f4344?w=800",
  },

  {
    title: "Semi-Recliner Sofas",
    count: 11,
    img: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800",
  },
  {
    title: "DINING TABLE DESIGNS",
    count: 22,
    img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800",
  },
  {
    title: "Coffee Tables",
    count: 21,
    img: "https://images.unsplash.com/photo-1615874959474-d609969a20ed?w=800",
  },
  {
    title: "TV Stand designs",
    count: 16,
    img: "https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?w=800",
  },
  {
    title: "Wooden beds",
    count: 28,
    img: "https://images.unsplash.com/photo-1540518614846-7eded433c457?w=800",
  },

  // ✅ Added 3 More
  {
    title: "Office Chairs",
    count: 19,
    img: "https://images.unsplash.com/photo-1588854337115-1c67d9247e4d?w=800",
  },

];

  return (
    <div className="roller-wrapper">
      <div className="roller-container">
        <p className="roller-title"><strong>Popular Categories</strong></p>
        <div className="roller-grid">
          {categories.map((c) => (
            <div className="roller-card" key={c.title} style={{ display:"flex", flexDirection:"column", justifyContent:"space-between"}}>
                <img src={c.img} alt={c.title}/>
                <div style={{ height:"100px", display:"flex", flexDirection:"column", justifyContent:"flex-end"}}>
                                                  <p className="roller-card-title ">{c.title}</p>
              <p className="LightFont" >{c.count} products</p> 
                </div>

            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
