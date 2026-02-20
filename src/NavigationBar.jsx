import React, { useEffect, useRef, useState } from "react";
import "./App.css";
import { FaHeart, FaExchangeAlt, FaShoppingCart, FaChevronDown } from "react-icons/fa";
import { Link } from "react-router-dom";
import SearchPopup from "./SearchPopup";
import { useCart } from "./CartContext";
import CartSidebar from "./CartSidebar";

export const NavigationBar = ({ products }) => {
    const { cartItems } = useCart();
    const [openCart, setOpenCart] = useState(false);

    const totalCount = cartItems.reduce(
        (acc, item) => acc + item.quantity,
        0
    );


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
    const navRef = useRef(null);

    // close dropdown when clicking outside
    useEffect(() => {
        const handler = (e) => {
            if (!navRef.current) return;
            if (!navRef.current.contains(e.target)) setOpenMenu(null);
        };
        document.addEventListener("mousedown", handler);
        return () => document.removeEventListener("mousedown", handler);
    }, []);

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

    const itemStyle = {
        margin: 0,
        padding: "10px 14px",
        fontSize: "14px",
        cursor: "pointer",
        whiteSpace: "nowrap",
    };

    const [showSearch, setShowSearch] = useState(false);

    return (
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
                padding: "10px 20px",
                overflow: "visible",
                position: "relative",
                zIndex: 999,
            }}
        >

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
            <div style={{ display: "flex", flexDirection: "column", gap: "6px", overflow: "visible" }}>
                <div
                    style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "28px",
                        height: "60px",
                        overflow: "visible",
                    }}
                >
                    <div style={{ cursor: "pointer" }}>
                        <h3 style={{ margin: 0 }}>Home</h3>
                    </div>

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
                                    <h3 style={{ margin: 0 }}>{m.label}</h3>
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


                    <div style={{ cursor: "pointer" }}>
                        <h3 style={{ margin: 0 }}>DINING TABLE DESIGNS</h3>
                    </div>
                </div>

                <div
                    style={{
                        height: "30px",
                        display: "flex",
                        alignItems: "center",
                        position: "relative"
                    }}
                    onMouseEnter={() => setOpenMenu("DOORS")}
                // ❌ remove onMouseLeave here unless you want it to close when leaving entire area
                >

                    {/* Label row */}
                    <div
                        style={{
                            display: "flex",
                            alignItems: "center",
                            gap: "8px",
                            cursor: "pointer",
                            userSelect: "none",
                        }}
                    >
                        <Link
                            to="/category/DOORS"
                            style={{
                                textDecoration: "none",
                                color: "white",
                            }}
                        >
                            <h3 style={{ margin: 0 }}>DOORS & FRAMES</h3>
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
                                zIndex: 999999
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
                        width: "350px",
                        height: "50px",
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
                    <span style={{ fontSize: "22px", color: "gray" }}>🔍</span>
                </div>

                {/* Icons */}
                <div style={{ display: "flex", gap: "18px" }}>
                    {icons.map((item, index) => {

                        const isCart = item.type === "cart";
                        const displayCount = isCart ? totalCount : item.count;

                        return (
                            <div
                                key={index}
                                onClick={isCart ? () => setOpenCart(true) : undefined}
                                style={{
                                    position: "relative",
                                    width: "60px",
                                    height: "60px",
                                    borderRadius: "50%",
                                    border: "1.5px solid white",
                                    color: "white",
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    cursor: isCart ? "pointer" : "default",
                                }}
                            >
                                <span style={{ fontSize: "21px" }}>
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

        </div>
    );
};
