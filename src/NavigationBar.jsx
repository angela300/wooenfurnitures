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
import { Link } from "react-router-dom";
import SearchPopup from "./SearchPopup";
import { useCart } from "./CartContext";
import CartSidebar from "./CartSidebar";
import { useNavigate } from "react-router-dom";

export const NavigationBar = ({ products }) => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
    const [expandedCategory, setExpandedCategory] = useState(null);
    const [activeTab, setActiveTab] = useState("CATEGORIES");
    const [profileOpen, setProfileOpen] = useState(false);
    const navRef = useRef(null);
    const { cartItems } = useCart();
    const [openCart, setOpenCart] = useState(false);
    
    const navigate = useNavigate();


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


    const icons = [
        { type: "wishlist", icon: <FaHeart />, count: 0 },
        { type: "compare", icon: <FaExchangeAlt />, count: 0 },
        { type: "cart", icon: <FaShoppingCart />, count: 1 },
    ];


    const menus = [
        {
            key: "SOFAS",
            label: "SOFAS",
            items: [
                "L-Shaped Sofas",
                "Chester seats",
                "Semi-Recliner Sofas",
                "Sofa set designs",
                "Sofa Beds",
            ],
        },
        {
            key: "BEDROOM",
            label: "BEDROOM",
            items: [
                "Chester Beds",
                "Mirror Beds",
                "Chest Of Drawers",
                "Dressing Mirror",
                "Kids Bed",
                "Bed designs",
                "Wardrobe",
                "Mattress",
            ],
        },
        {
            key: "LIVING",
            label: "LIVING ROOM",
            items: ["TV Stands", "Coffee Tables", "Corner Stand", "Console Tables"],
        },
        {
            key: "CHAIRS",
            label: "CHAIRS",
            items: ["Wing Chair", "Office Chairs", "Dining Chairs", "Accent Chairs"],
        },
    ];

    const [openMenu, setOpenMenu] = useState(null);

    // close dropdown when clicking outside
    useEffect(() => {
        const handler = (e) => {
            if (!navRef.current) return;
            if (!navRef.current.contains(e.target)) setOpenMenu(null);
        };
        document.addEventListener("mousedown", handler);
        return () => document.removeEventListener("mousedown", handler);
    }, []);

    //Prevent Background Scroll (Important)
    useEffect(() => {
        if (profileOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "auto";
        }

        return () => {
            document.body.style.overflow = "auto";
        };
    }, [profileOpen]);

    const popupStyle = {
        position: "absolute",
        top: "44px",
        left: 0,
        backgroundColor: "white",
        color: "#111",
        padding: "10px 0",
        border: "1px solid #eee",
        boxShadow: "0 10px 22px rgba(0,0,0,0.15)",
        zIndex: 999999,
        minWidth: "230px",
        padding: "15px"
    };

    const [showSearch, setShowSearch] = useState(false);


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
                    boxSizing: "border-box",
                    overflow: "visible",
                    position: "relative",
                    paddingLeft: "20px",
                    paddingRight: "20px",
                }}
            >

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
                        <FaUser size={22} style={{ cursor: "pointer" }} onClick={() => setProfileOpen(true)} />
                    </>
                ) : (
                    <>
                        <CartSidebar
                            isOpen={openCart}
                            onClose={() => setOpenCart(false)}
                        />



                        {showSearch && (
                            <SearchPopup
                                products={products}
                                onClose={() => setShowSearch(false)}
                            />)}

                        {/* LEFT: NAV LINKS */}
                        <div style={{ display: "flex", flexDirection: "column", gap: "20px", overflow: "visible" }}>
                            <div
                                style={{
                                    display: "flex",
                                    alignItems: "center",
                                    gap: "28px",
                                    overflow: "visible",
                                }}
                            >
                                <div style={{ cursor: "pointer" }}>

                                </div>
                                <Link
                                    to="/"
                                    style={{
                                        textDecoration: "none",
                                        color: "white",
                                    }}
                                >
                                    <p style={{ margin: 0 }}>Home</p>
                                </Link>

                                {/* Dropdown menus */}
                                <div style={{ display: "flex", gap: "28px", position: "relative", overflow: "visible" }}>
                                    {menus.map((m) => (
                                        <div
                                            key={m.key}
                                            style={{ position: "relative" }}
                                            onMouseEnter={() => setOpenMenu(m.key)}
                                        >
                                            {/* Category label clickable */}
                                            <Link
                                                to={`/category/${m.key}`}
                                                style={{
                                                    display: "flex",
                                                    alignItems: "center",
                                                    gap: "8px",
                                                    textDecoration: "none",
                                                    color: "white",
                                                }}
                                            >
                                                <p style={{ margin: 0 }}>{m.label}</p>
                                                <FaChevronDown
                                                    style={{
                                                        fontSize: "14px",
                                                        transition: "transform 0.18s ease",
                                                        transform:
                                                            openMenu === m.key ? "rotate(180deg)" : "rotate(0deg)",
                                                    }}
                                                />
                                            </Link>

                                            {/* Subcategory popup */}
                                            {openMenu === m.key && (
                                                <div style={popupStyle}>
                                                    {m.items.map((txt) => (
                                                        <Link
                                                            key={txt}
                                                            to={`/category/${m.key}/${encodeURIComponent(txt)}`}
                                                            className="LightFontPopup"
                                                            style={{
                                                                display: "block",
                                                                padding: "10px 14px",
                                                                textDecoration: "none",
                                                                color: "#111",
                                                            }}
                                                            onMouseEnter={(e) =>
                                                                (e.currentTarget.style.color = "orange")
                                                            }
                                                            onMouseLeave={(e) =>
                                                                (e.currentTarget.style.color = "#111")
                                                            }
                                                            onClick={() => setOpenMenu(null)}
                                                        >
                                                            {txt}
                                                        </Link>
                                                    ))}
                                                </div>
                                            )}
                                        </div>
                                    ))}

                                </div>


                                <Link style={{

                                    color: "white",
                                }}>
                                    <p style={{ margin: 0 }}>DINING TABLE DESIGNS</p>
                                </Link>
                            </div>

                            <div
                                style={{
                                    display: "flex",
                                    alignItems: "center",
                                    position: "relative",
                                }}
                            // ❌ remove onMouseLeave here unless you want it to close when leaving entire area
                            >

                                {/* Label row */}
                                <div
                                    style={{
                                        display: "flex",
                                        alignItems: "center",
                                        gap: "8px",
                                        cursor: "pointer",
                                        userSelect: "none"
                                    }}
                                >
                                    <Link
                                        to="/category/DOORS"
                                        style={{
                                            textDecoration: "none",
                                            color: "white",
                                        }}
                                        onMouseEnter={() => setOpenMenu("DOORS")}
                                    >
                                        <p style={{ margin: 0 }}>DOORS & FRAMES</p>
                                    </Link>

                                    <FaChevronDown
                                        style={{
                                            fontSize: "14px",
                                            transition: "0.2s",
                                            transform: openMenu === "DOORS"
                                                ? "rotate(180deg)"
                                                : "rotate(0deg)"
                                        }}
                                    />
                                </div>

                                {/* Popup */}
                                {openMenu === "DOORS" && (
                                    <div
                                        style={{
                                            position: "absolute",
                                            top: "35px",
                                            left: 0,
                                            backgroundColor: "white",
                                            color: "#111",
                                            padding: "10px 0",
                                            border: "1px solid #eee",
                                            boxShadow: "0 10px 22px rgba(0,0,0,0.15)",
                                            borderRadius: "6px",
                                            minWidth: "220px",
                                        }}
                                    >
                                        <Link
                                            to={`/category/DOORS/${encodeURIComponent("Mahogany Doors")}`}
                                            className="LightFontPopup"
                                            style={{
                                                display: "block",
                                                margin: 0,
                                                padding: "10px 14px",
                                                textDecoration: "none",
                                                color: "#111",
                                            }}
                                            onMouseEnter={(e) =>
                                                (e.currentTarget.style.color = "orange")
                                            }
                                            onMouseLeave={(e) =>
                                                (e.currentTarget.style.color = "#111")
                                            }
                                            onClick={() => setOpenMenu(null)}
                                        >
                                            Mahogany Doors
                                        </Link>
                                    </div>
                                )}
                            </div>


                        </div>

                        {/* RIGHT: SEARCH + ICONS */}
                        <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
                            {/* Divider */}
                            <div className="vertical-line" />

                            {/* Search box */}
                            <div
                                style={{
                                    display: "flex",
                                    alignItems: "center",
                                    backgroundColor: "white",
                                    padding: "8px 12px",
                                    width: "250px",
                                    height: "40px",
                                    boxSizing: "border-box",
                                }}
                            >
                                <input
                                    type="text"
                                    placeholder="Search for products"
                                    onFocus={() => setShowSearch(true)}
                                    style={{
                                        border: "none",
                                        outline: "none",
                                        width: "100%",
                                        fontSize: "16px",
                                        fontFamily: "Nunito, sans-serif",
                                    }}
                                />
                                <span style={{ fontSize: "17px", color: "gray" }}>🔍</span>
                            </div>

                            {/* Icons */}
                            <div style={{ display: "flex", gap: "18px" }}>
                                {icons.map((item, index) => {

                                    const isCart = item.type === "cart";
                                    const isCompare = item.type === "compare";
                                    const isWishlist = item.type === "wishlist";
                                    const displayCount = isCart ? totalCount : item.count;

                                    return (
                                        <div
                                            key={index}
                                            onClick={() => {
                                                if (isCart) {
                                                    setOpenCart(true);
                                                } else if (isWishlist) {
                                                    navigate("/wish");
                                                } else if (isCompare) {
                                                    navigate("/compare");
                                                }
                                            }}
                                            style={{
                                                position: "relative",
                                                width: "40px",
                                                height: "40px",
                                                borderRadius: "50%",
                                                border: "1.5px solid white",
                                                color: "white",
                                                display: "flex",
                                                alignItems: "center",
                                                justifyContent: "center",
                                                cursor: "pointer",
                                            }}
                                        >
                                            <span style={{ fontSize: "17px" }}>
                                                {item.icon}
                                            </span>

                                            {displayCount > 0 && (
                                                <span
                                                    style={{
                                                        position: "absolute",
                                                        top: "3px",
                                                        right: "-6px",
                                                        backgroundColor: "white",
                                                        color: "#c98a2b",
                                                        fontSize: "11px",
                                                        padding: "2px 6px",
                                                        borderRadius: "999px",
                                                        fontWeight: 800,
                                                        minWidth: "18px",
                                                        textAlign: "center"
                                                    }}
                                                >
                                                    {displayCount}
                                                </span>
                                            )}
                                        </div>
                                    );
                                })}
                            </div>

                        </div>

                    </>

                )}


            </div>

            {/* ===== MOBILE DRAWER ===== */}
            {mobileMenuOpen && (
                <>
                    {/* Overlay */}
                    <div
                        onClick={() => setMobileMenuOpen(false)}
                        style={{
                            position: "fixed",
                            inset: 0,
                            background: "rgba(0,0,0,0.45)",
                            zIndex: 9998,
                        }}
                    />

                    {/* Drawer */}
                    <div
                        style={{
                            position: "fixed",
                            top: 0,
                            left: 0,
                            height: "100vh",
                            width: "320px",
                            background: "#f5f5f5",
                            zIndex: 9999,
                            display: "flex",
                            flexDirection: "column",
                            animation: "slideIn 0.3s ease forwards"
                        }}
                    >
                        {/* Close Header */}
                        <div
                            style={{
                                padding: "15px 20px",
                                display: "flex",
                                justifyContent: "flex-end",
                                borderBottom: "1px solid #ddd",
                                background: "#f0f0f0",
                                fontWeight: "500",
                                cursor: "pointer"
                            }}
                            onClick={() => setMobileMenuOpen(false)}
                        >
                            ✕ Close
                        </div>

                        {/* Tabs */}
                        <div style={{ display: "flex", borderBottom: "1px solid #ddd" }}>
                            <div
                                onClick={() => setActiveTab("CATEGORIES")}
                                style={{
                                    flex: 1,
                                    padding: "15px",
                                    textAlign: "center",
                                    fontWeight: "600",
                                    background: activeTab === "CATEGORIES" ? "#fff" : "#eaeaea",
                                    borderBottom:
                                        activeTab === "CATEGORIES"
                                            ? "3px solid #cc8e2c"
                                            : "3px solid transparent",
                                    cursor: "pointer"
                                }}
                            >
                                <p className="LightFontBold">CATEGORIES</p>
                            </div>

                            <div
                                onClick={() => setActiveTab("MENU")}
                                style={{
                                    flex: 1,
                                    padding: "15px",
                                    textAlign: "center",
                                    fontWeight: "600",
                                    background: activeTab === "MENU" ? "#fff" : "#eaeaea",
                                    borderBottom:
                                        activeTab === "MENU"
                                            ? "3px solid #cc8e2c"
                                            : "3px solid transparent",
                                    cursor: "pointer"
                                }}
                            >
                                MENU
                            </div>
                        </div>

                        {/* Content */}
                        <div style={{ flex: 1, overflowY: "auto" }}>

                            {activeTab === "CATEGORIES" && (
                                <>
                                    {/* Home */}
                                    <div
                                        onClick={() => {
                                            setMobileMenuOpen(false);
                                            navigate("/");
                                        }}
                                        style={{
                                            padding: "15px 20px",
                                            borderBottom: "1px solid #ddd",
                                            background: "#fff",
                                            cursor: "pointer"
                                        }}
                                    >
                                        Home
                                    </div>

                                    {/* Dynamic Categories */}
                                    {menus.map((category) => (
                                        <div key={category.key}>

                                            {/* Main Category */}
                                            <div
                                                onClick={() =>
                                                    setExpandedCategory(
                                                        expandedCategory === category.key
                                                            ? null
                                                            : category.key
                                                    )
                                                }
                                                style={{
                                                    padding: "15px 20px",
                                                    borderBottom: "1px solid #ddd",
                                                    background: "#fff",
                                                    display: "flex",
                                                    justifyContent: "space-between",
                                                    cursor: "pointer"
                                                }}
                                            >
                                                {category.label}

                                                <span
                                                    style={{
                                                        background: "#cc8e2c",
                                                        color: "white",
                                                        padding: "5px 10px"
                                                    }}
                                                >
                                                    {expandedCategory === category.key ? "−" : "⌄"}
                                                </span>
                                            </div>

                                            {/* Subcategories */}
                                            {expandedCategory === category.key &&
                                                category.items.map((sub) => (
                                                    <div
                                                        key={sub}
                                                        onClick={() => {
                                                            setMobileMenuOpen(false);
                                                            navigate(
                                                                `/category/${category.key}/${encodeURIComponent(sub)}`
                                                            );
                                                        }}
                                                        style={{
                                                            padding: "12px 40px",
                                                            borderBottom: "1px solid #eee",
                                                            background: "#fff",
                                                            fontSize: "14px",
                                                            cursor: "pointer"
                                                        }}
                                                    >
                                                        {sub}
                                                    </div>
                                                ))}

                                        </div>
                                    ))}
                                </>
                            )}

                            {activeTab === "MENU" && (
                                <>
                                    <div
                                        onClick={() => {
                                            setMobileMenuOpen(false);
                                            navigate("/");
                                        }}
                                        style={{
                                            padding: "15px 20px",
                                            borderBottom: "1px solid #ddd",
                                            background: "#fff",
                                            cursor: "pointer"
                                        }}
                                    >
                                        Home
                                    </div>

                                    <div
                                        style={{
                                            padding: "15px 20px",
                                            borderBottom: "1px solid #ddd",
                                            background: "#fff",
                                            cursor: "pointer"
                                        }}
                                    >
                                        About us
                                    </div>
                                </>
                            )}

                        </div>

                        {/* Floating Call Button */}
                        <div
                            style={{
                                position: "absolute",
                                bottom: "20px",
                                left: "20px",
                                display: "flex",
                                alignItems: "center",
                                gap: "10px"
                            }}
                        >
                            <div
                                style={{
                                    width: "50px",
                                    height: "50px",
                                    borderRadius: "50%",
                                    background: "#cc8e2c",
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    color: "white",
                                    fontSize: "20px"
                                }}
                            >
                                📞
                            </div>

                            <div
                                style={{
                                    background: "#666",
                                    color: "white",
                                    padding: "5px 10px",
                                    fontSize: "13px",
                                    borderRadius: "3px"
                                }}
                            >
                                Call Us Now!
                            </div>
                        </div>

                    </div>
                </>
            )}

            {profileOpen && (
                <>
                    {/* Overlay */}
                    <div
                        onClick={() => setProfileOpen(false)}
                        style={{
                            position: "fixed",
                            inset: 0,
                            background: "rgba(0,0,0,0.45)",
                            zIndex: 9998
                        }}
                    />

                    {/* Drawer */}
{/* Drawer */}
<div
  style={{
    position: "fixed",
    top: 0,
    right: 0,
    height: "100vh",
    width: "90vw",
    maxWidth: "380px",
    background: "#f5f5f5",
    zIndex: 10001,
    display: "flex",
    flexDirection: "column",
    boxShadow: "-6px 0 20px rgba(0,0,0,0.25)"
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
      fontWeight: 600,
      fontSize: "18px"
    }}
  >
    Sign in
    <span
      style={{ cursor: "pointer", fontSize: "14px" }}
      onClick={() => setProfileOpen(false)}
    >
      ✕ Close
    </span>
  </div>

  {/* Scrollable Content */}
  <div
    style={{
      flex: 1,
      overflowY: "auto",
      padding: "25px"
    }}
  >
    {/* Username */}
    <label style={{ fontSize: "14px", fontWeight: 500 }}>
      Username or email address *
    </label>
    <input
      type="text"
      style={{
        width: "100%",
        height: "45px",
        marginTop: "8px",
        marginBottom: "20px",
        padding: "10px",
        border: "1px solid #ddd",
        background: "#eee",
        outline: "none"
      }}
    />

    {/* Password */}
    <label style={{ fontSize: "14px", fontWeight: 500 }}>
      Password *
    </label>
    <div style={{ position: "relative" }}>
      <input
        type="password"
        style={{
          width: "100%",
          height: "45px",
          marginTop: "8px",
          marginBottom: "20px",
          padding: "10px",
          border: "1px solid #ddd",
          background: "#eee",
          outline: "none"
        }}
      />
      <span
        style={{
          position: "absolute",
          right: "12px",
          top: "50%",
          transform: "translateY(-50%)",
          cursor: "pointer",
          fontSize: "14px",
          color: "#777"
        }}
      >
        👁
      </span>
    </div>

    {/* Login Button */}
    <button
      style={{
        width: "100%",
        padding: "14px",
        background: "#1e40af",
        color: "white",
        border: "none",
        cursor: "pointer",
        fontWeight: 600,
        fontSize: "14px",
        marginBottom: "15px",
        borderRadius:0
      }}
    >
      LOG IN
    </button>

    {/* Remember Me */}
    <div style={{ marginBottom: "15px", fontSize: "14px" }}>
      <input type="checkbox" />
      <span style={{ marginLeft: "8px" }}>Remember me</span>
    </div>

    {/* Lost Password */}
    <p
      style={{
        color: "#cc8e2c",
        fontSize: "14px",
        cursor: "pointer"
      }}
    >
      Lost your password?
    </p>

    <hr style={{ margin: "30px 0" }} />

    {/* No Account Section */}
    <div style={{ textAlign: "center" }}>
      <div
        style={{
          fontSize: "40px",
          color: "#ddd",
          marginBottom: "15px"
        }}
      >
        👤
      </div>

      <p style={{ fontWeight: 600 }}>
        No account yet?
      </p>

      <p
        style={{
          color: "#cc8e2c",
          fontWeight: 600,
          cursor: "pointer",
          display: "inline-block",
          borderBottom: "2px solid #cc8e2c"
        }}
      >
        CREATE AN ACCOUNT
      </p>
    </div>
  </div>

  {/* Floating Call Button */}
  <div
    style={{
      position: "absolute",
      bottom: "20px",
      left: "20px",
      display: "flex",
      alignItems: "center",
      gap: "10px"
    }}
  >
    <div
      style={{
        width: "50px",
        height: "50px",
        borderRadius: "50%",
        background: "#cc8e2c",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        color: "white",
        fontSize: "20px"
      }}
    >
      📞
    </div>

    <div
      style={{
        background: "#666",
        color: "white",
        padding: "5px 10px",
        fontSize: "13px",
        borderRadius: "3px"
      }}
    >
      Call Us Now!
    </div>
  </div>
</div>
                </>
            )}
            <CartSidebar isOpen={openCart} onClose={() => setOpenCart(false)} />

            {showSearch && (
                <SearchPopup
                    products={products}
                    onClose={() => setShowSearch(false)}
                />
            )}
        </>
    );
};
