import { useParams, useNavigate, Link } from "react-router-dom";
import  {  useLayoutEffect } from "react";
import { useState } from "react";
import { FaHeart, FaExchangeAlt, FaEye } from "react-icons/fa";
import { PiMedalBold } from "react-icons/pi";
import { FaRocketchat, FaTruck } from "react-icons/fa";
import { MdOutlineLocalConvenienceStore } from "react-icons/md";
import { useCart } from "./CartContext";
import { useRef, useEffect } from "react";
import "./actualProduct.css";
import { createPortal } from "react-dom";

import "./App.css";

const allProducts = [
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
export const ActualProduct = () => {
  const { title } = useParams();
  const navigate = useNavigate();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const navRef = useRef(null);
  const [expandedCategory, setExpandedCategory] = useState(null);
  const [activeTab, setActiveTab] = useState("CATEGORIES");
  const [profileOpen, setProfileOpen] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);
  

  const { addToCart } = useCart();   // ✅ Correct placement
  const {cartItems} = useCart();   
  const [qty, setQty] = useState(1);
  

  const product = allProducts.find((p) => p.title === title);

  if (!product) {
    return <h2 style={{ padding: "40px" }}>Product not found</h2>;
  }

const handleAddToCart = () => {
  addToCart(
    {
      id: product.id,
      title: product.title,
      price: product.newPrice,
      img: product.img,
    },
    qty
  );

  setCartOpen(true); // 🔥 Open slider
};

    //Prevent Background Scroll (Important)
useLayoutEffect(() => {
  const isDrawerOpen = mobileMenuOpen;

  if (!isDrawerOpen) return;

  // Store original values
  const originalBodyOverflow = window.getComputedStyle(document.body).overflow;
  const originalHtmlOverflow = window.getComputedStyle(document.documentElement).overflow;

  // Lock scroll
  document.body.style.overflow = "hidden";
  document.documentElement.style.overflow = "hidden";

  return () => {
    // Restore original values
    document.body.style.overflow = originalBodyOverflow;
    document.documentElement.style.overflow = originalHtmlOverflow;
  };
}, [mobileMenuOpen]);

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
      {isMobile ? (
  <div style={{ padding: "20px 15px" }}>

    {/* Breadcrumb */}
    <div
      style={{
        fontSize: "13px",
        marginBottom: "15px",
        display: "flex",
        flexWrap: "wrap",
        gap: "5px"
      }}
    >
      <Link to="/" className="LightFont">Home</Link>
      <span>/</span>
      <span>{product.category}</span>
      <span>/</span>
      <span>{product.subCategory}</span>
    </div>

    {/* Product Image */}
    <div style={{ position: "relative" }}>
      <span
        style={{
          position: "absolute",
          top: "10px",
          left: "10px",
          background: "#cc8e2c",
          color: "white",
          padding: "5px 10px",
          fontSize: "12px"
        }}
      >
        {product.discount}
      </span>

      <img
        src={product.img}
        alt={product.title}
        style={{ width: "100%", objectFit: "cover" }}
      />
    </div>

    {/* Title */}
    <h2
      style={{
        marginTop: "20px",
        fontSize: "20px",
        lineHeight: "1.4"
      }}
    >
      {product.title}
    </h2>

    {/* Price */}
    <div style={{ marginTop: "10px", marginBottom: "20px" }}>
      <span
        style={{
          textDecoration: "line-through",
          color: "#999",
          marginRight: "10px"
        }}
      >
        KSh {product.oldPrice.toLocaleString()}
      </span>

      <span
        style={{
          color: "#cc8e2c",
          fontWeight: 600,
          fontSize: "18px"
        }}
      >
        KSh {product.newPrice.toLocaleString()}
      </span>
    </div>

    {/* WhatsApp Button */}
    <button
      style={{
        width: "100%",
        padding: "14px",
        background: "#25D366",
        color: "white",
        border: "none",
        marginBottom: "10px",
        fontWeight: 600,
        borderRadius:0,
      }}
      onClick={() =>
        window.open(
          `https://wa.me/254700025861?text=Hello%20I%20would%20like%20to%20order%20${encodeURIComponent(product.title)}`,
          "_blank"
        )
      }
    >
      ORDER VIA WHATSAPP
    </button>

    {/* Quantity + Cart */}
    <div style={{ display: "flex", gap: "10px", marginBottom: "20px" }}>
      <div
        style={{
          display: "flex",
          border: "1px solid #ddd"
        }}
      >
        <button onClick={() => setQty(qty > 1 ? qty - 1 : 1)}>-</button>
        <span style={{ padding: "8px 15px" }}>{qty}</span>
        <button onClick={() => setQty(qty + 1)}>+</button>
      </div>

      <button
        style={{
          flex: 1,
          background: "#1e40af",
          color: "white",
          border: "none",
          borderRadius:0
        }}
        onClick={handleAddToCart}
      >
        ADD TO CART
      </button>
    </div>

    {/* Buy Now */}
    <button
      style={{
        width: "100%",
        padding: "14px",
        background: "black",
        color: "white",
        border: "none",
        marginBottom: "25px",
        borderRadius:0
      }}
      onClick={() => {
        handleAddToCart();
        navigate("/checkout");
      }}
    >
      BUY NOW
    </button>

    {/* Divider */}
    <div style={{ height: "1px", background: "#eee", margin: "20px 0" }} />

    {/* Description */}
    <h3 style={{ marginBottom: "10px" }}>Description</h3>
    <p style={{ color: "#555", lineHeight: "1.6" }}>
      Wood: Blue gum
      <br />
      Size: 6 by 6
      <br />
      Color: White
    </p>

    {/* Divider */}
    <div style={{ height: "1px", background: "#eee", margin: "20px 0" }} />

    {/* Reviews */}
    <h3 style={{ marginBottom: "10px" }}>Reviews (3)</h3>

    <div style={{ marginBottom: "20px" }}>
      <strong>Abbas Noor</strong>
      <p style={{ color: "#f5b301" }}>★★★★☆</p>
      <p>Amazing and stylish bed.</p>
    </div>

  </div>
) : (
        <div style={{ width: "100%", boxSizing: "border-box" }}>

          {/* Breadcrumb */}
          <div
            className="pci-breadcrumb"
            style={{
              marginTop: "30px",
              display: "flex",
              flexWrap: "wrap",
              alignItems: "center",
              gap: "6px"
            }}
          >
            <Link to="/" className="LightFont">Home</Link>
            <span>/</span>
            <span className="LightFont">{product.category}</span>
            <span>/</span>
            <span className="LightFont">{product.subCategory}</span>
            <span>/</span>
            <span className="LightFontBig">{product.title}</span>
          </div>

          <div
            style={{
              width: "100%",
              height: "1px",
              background: "#eee",
              margin: "20px 0"
            }}
          />

          {/* Product Main Section */}
          <div
            className="ap-wrap"
            style={{
              display: "flex",
              gap: "60px",
              alignItems: "flex-start",
              flexWrap: "wrap"
            }}
          >

            {/* LEFT IMAGE */}
            <div className="ap-left" style={{ flex: "1", minWidth: "300px" }}>
              <span className="ap-discount">{product.discount}</span>
              <img
                src={product.img}
                alt={product.title}
                style={{ width: "100%", objectFit: "cover" }}
              />
            </div>

            {/* RIGHT CONTENT */}
            <div className="ap-right" style={{ flex: "1", minWidth: "350px" }}>
              <p
                className="LightFontBold"
                style={{ fontSize: "29px", marginBottom: "15px" }}
              >
                {product.title}
              </p>

              <div className="ap-price" style={{ marginBottom: "20px" }}>
                <span className="ap-old">
                  KSh {product.oldPrice.toLocaleString()}
                </span>
                <span className="ap-new">
                  KSh {product.newPrice.toLocaleString()}
                </span>
              </div>

              {/* ORDER SECTION */}
              <div className="ap-orderBox">
                <button
                  className="whatsapp-btn"
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

                  <button className="add-cart" onClick={handleAddToCart}>
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
              <div
                className="ap-links"
                style={{ display: "flex", gap: "20px", marginTop: "20px" }}
              >
                <span><FaHeart /> Add to wishlist</span>
                <span><FaExchangeAlt /> Add to compare</span>
              </div>

              {/* Watching */}
              <div
                className="ap-watch"
                style={{ marginTop: "15px", color: "#555" }}
              >
                <FaEye /> 15 People watching this product now!
              </div>
            </div>
          </div>

          {/* Reviews + Form Section */}
          <div
            style={{
              width: "100%",
              display: "flex",
              padding: "60px 5%",
              boxSizing: "border-box",
              gap: "50px",
              flexWrap: "wrap"
            }}
          >
            {/* Left Reviews */}
            <div style={{ flex: "2", minWidth: "300px" }}>
              <p className="LightFontBigger">Reviews (3)</p>
              <p
                className="LightFont"
                style={{ marginBottom: "30px", color: "#555" }}
              >
                3 reviews for -6 by 6 White Bed With Two side drawers
              </p>
            </div>

            {/* Right Review Form */}
            <div
              style={{
                flex: "1",
                minWidth: "300px",
                borderLeft: "1px solid #eee",
                paddingLeft: "40px"
              }}
            >
              <p className="LightFontBigger">Add a review</p>
            </div>
          </div>

        </div>
      )}

{cartOpen && (
    <>
      {/* Overlay */}
      <div
        onClick={() => setCartOpen(false)}
        style={{
          position: "fixed",
          inset: 0,
          background: "rgba(0,0,0,0.4)",
          zIndex: 9998
        }}
      />

      {/* Cart Drawer */}
      <div
        style={{
          position: "fixed",
          top: 0,
          right: 0,
          height: "100dvh",
          width: "90vw",
          maxWidth: "380px",
          background: "#f5f5f5",
          zIndex: 9999,
          display: "flex",
          flexDirection: "column",
          boxShadow: "-4px 0 20px rgba(0,0,0,0.25)",
          transform: "translateX(0)",
          transition: "transform 0.3s ease"
        }}
      >
        {/* Header */}
        <div
          style={{
            padding: "20px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            borderBottom: "1px solid #ddd",
            background: "#fff",
            fontWeight: 600
          }}
        >
          Shopping cart
          <span
            style={{ cursor: "pointer" }}
            onClick={() => setCartOpen(false)}
          >
            ✕ Close
          </span>
        </div>

        {/* Cart Items */}
        <div style={{ flex: 1, overflowY: "auto", padding: "20px" }}>
          {cartItems.map((item, index) => (
            <div
              key={index}
              style={{
                display: "flex",
                gap: "15px",
                marginBottom: "20px",
                borderBottom: "1px solid #eee",
                paddingBottom: "15px"
              }}
            >
              <img
                src={item.img}
                alt={item.title}
                style={{ width: "70px", height: "70px", objectFit: "cover" }}
              />

              <div style={{ flex: 1 }}>
                <p style={{ fontSize: "14px", fontWeight: 600 }}>
                  {item.title}
                </p>
                <p style={{ fontSize: "13px", color: "#777" }}>
                  {item.quantity} × KSh {item.price.toLocaleString()}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Subtotal */}
        <div
          style={{
            padding: "20px",
            borderTop: "1px solid #ddd",
            background: "#fff"
          }}
        >
          <p style={{ fontWeight: 600, marginBottom: "15px" }}>
            Subtotal:{" "}
            <span style={{ color: "#cc8e2c" }}>
              KSh{" "}
              {cartItems
                .reduce((acc, item) => acc + item.price * item.quantity, 0)
                .toLocaleString()}
            </span>
          </p>

          <button
            style={{
              width: "100%",
              padding: "12px",
              background: "#1e40af",
              color: "white",
              border: "none",
              cursor: "pointer", 
              borderRadius:0
            }}
            onClick={() => {
              setCartOpen(false);
              navigate("/checkout");
            }}
          >
            CHECKOUT
          </button>
        </div>
      </div>
    </>
  )}
    </>

  );
};
