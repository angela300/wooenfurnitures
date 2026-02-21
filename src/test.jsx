
import React, { useEffect, useRef, useState } from "react";
import "./App.css";
import {
  FaHeart,
  FaExchangeAlt,
  FaShoppingCart,
  FaChevronDown,
  FaBars,
  FaUser
} from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import SearchPopup from "./SearchPopup";
import { useCart } from "./CartContext";
import CartSidebar from "./CartSidebar";

export const NavigationBar = ({ products }) => {
  const { cartItems } = useCart();
  const navigate = useNavigate();
  const navRef = useRef(null);

  const [openCart, setOpenCart] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const [openMenu, setOpenMenu] = useState(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  const totalCount = cartItems.reduce(
    (acc, item) => acc + item.quantity,
    0
  );

  // Detect screen resize
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handler = (e) => {
      if (!navRef.current) return;
      if (!navRef.current.contains(e.target)) setOpenMenu(null);
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  const icons = [
    { type: "wishlist", icon: <FaHeart />, count: 0 },
    { type: "compare", icon: <FaExchangeAlt />, count: 0 },
    { type: "cart", icon: <FaShoppingCart />, count: totalCount }
  ];

  const menus = [
    {
      key: "SOFAS",
      label: "SOFAS",
      items: ["L-Shaped Sofas", "Chester seats", "Semi-Recliner Sofas"]
    },
    {
      key: "BEDROOM",
      label: "BEDROOM",
      items: ["Chester Beds", "Mirror Beds", "Wardrobe"]
    },
    {
      key: "CHAIRS",
      label: "CHAIRS",
      items: ["Wing Chair", "Office Chairs"]
    }
  ];

  return (
    <>
      <div
        ref={navRef}
        style={{
          width: "100%",
          backgroundColor: "#cc8e2c",
          color: "white",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "10px 20px",
          boxSizing: "border-box",
          position: "relative"
        }}
      >
        {/* ===== MOBILE VIEW ===== */}
        {isMobile ? (
          <>
            {/* Hamburger */}
            <FaBars
              size={22}
              style={{ cursor: "pointer" }}
              onClick={() => setMobileMenuOpen(true)}
            />

            {/* Search */}
            <div
              style={{
                flex: 1,
                margin: "0 15px",
                display: "flex",
                alignItems: "center",
                background: "white",
                padding: "6px 10px"
              }}
            >
              <input
                type="text"
                placeholder="Search..."
                onFocus={() => setShowSearch(true)}
                style={{
                  border: "none",
                  outline: "none",
                  flex: 1
                }}
              />
            </div>

            {/* Profile */}
            <FaUser size={22} style={{ cursor: "pointer" }} />
          </>
        ) : (
          /* ===== DESKTOP VIEW ===== */
          <>
            {/* Left Links */}
            <div style={{ display: "flex", gap: "25px" }}>
              <Link to="/" style={{ color: "white", textDecoration: "none" }}>
                Home
              </Link>

              {menus.map((m) => (
                <div
                  key={m.key}
                  style={{ position: "relative", cursor: "pointer" }}
                  onMouseEnter={() => setOpenMenu(m.key)}
                  onMouseLeave={() => setOpenMenu(null)}
                >
                  <Link
                    to={`/category/${m.key}`}
                    style={{
                      color: "white",
                      textDecoration: "none",
                      display: "flex",
                      alignItems: "center",
                      gap: "6px"
                    }}
                  >
                    {m.label}
                    <FaChevronDown
                      style={{
                        fontSize: "13px",
                        transform:
                          openMenu === m.key
                            ? "rotate(180deg)"
                            : "rotate(0deg)",
                        transition: "0.2s"
                      }}
                    />
                  </Link>

                  {openMenu === m.key && (
                    <div
                      style={{
                        position: "absolute",
                        top: "35px",
                        left: 0,
                        background: "white",
                        color: "black",
                        padding: "10px",
                        boxShadow: "0 10px 20px rgba(0,0,0,0.15)",
                        minWidth: "200px"
                      }}
                    >
                      {m.items.map((item) => (
                        <Link
                          key={item}
                          to={`/category/${m.key}/${encodeURIComponent(
                            item
                          )}`}
                          style={{
                            display: "block",
                            padding: "8px",
                            textDecoration: "none",
                            color: "black"
                          }}
                        >
                          {item}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Right Section */}
            <div style={{ display: "flex", gap: "18px", alignItems: "center" }}>
              {/* Search */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  backgroundColor: "white",
                  padding: "6px 10px"
                }}
              >
                <input
                  type="text"
                  placeholder="Search for products"
                  onFocus={() => setShowSearch(true)}
                  style={{
                    border: "none",
                    outline: "none"
                  }}
                />
              </div>

              {/* Icons */}
              {icons.map((item, index) => (
                <div
                  key={index}
                  onClick={() => {
                    if (item.type === "cart") {
                      setOpenCart(true);
                    } else if (item.type === "wishlist") {
                      navigate("/wish");
                    } else if (item.type === "compare") {
                      navigate("/compare");
                    }
                  }}
                  style={{
                    position: "relative",
                    width: "38px",
                    height: "38px",
                    borderRadius: "50%",
                    border: "1.5px solid white",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    cursor: "pointer"
                  }}
                >
                  {item.icon}

                  {item.count > 0 && (
                    <span
                      style={{
                        position: "absolute",
                        top: "-5px",
                        right: "-5px",
                        background: "white",
                        color: "#cc8e2c",
                        fontSize: "11px",
                        padding: "2px 6px",
                        borderRadius: "50%"
                      }}
                    >
                      {item.count}
                    </span>
                  )}
                </div>
              ))}
            </div>
          </>
        )}
      </div>
    </>
  );
};

