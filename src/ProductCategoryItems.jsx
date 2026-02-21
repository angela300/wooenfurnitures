import React, { useMemo, useState } from "react";
import { useParams, Link } from "react-router-dom";
import "./productCategoryItems.css";
import { FaThLarge, FaTh, FaThList } from "react-icons/fa";
import "./App.css"
import { FaStar, FaBars, FaUser } from "react-icons/fa";
import { FaChevronDown } from "react-icons/fa";
import "./RollerImage2.css";
import { FaWhatsapp } from "react-icons/fa";
import { useRef, useEffect } from "react";
import { HiMiniArrowsUpDown } from "react-icons/hi2";


// ✅ Demo data (replace with your real products)
const allProducts = [
    {
        id: 1,
        category: "SOFAS",
        subCategory: "L-Shaped Sofas",
        title: "6 seater brown l shaped sofa",
        discount: "-9%",
        oldPrice: 64000,
        newPrice: 58000,
        img: "https://images.unsplash.com/photo-1549187774-b4e9b0445b41?auto=format&fit=crop&w=1200&q=60",
        inStock: true,
        onSale: true,
    },
    {
        id: 2,
        category: "SOFAS",
        subCategory: "L-Shaped Sofas",
        title: "6 seater bubble beige l shaped sofa",
        discount: "-8%",
        oldPrice: 68000,
        newPrice: 62000,
        img: "https://images.unsplash.com/photo-1615873968403-89e068629265?auto=format&fit=crop&w=1200&q=60",
        inStock: true,
        onSale: true,
    },
    {
        id: 3,
        category: "SOFAS",
        subCategory: "L-Shaped Sofas",
        title: "6 seater classic blue l shaped sofa",
        discount: "-7%",
        oldPrice: 36000,
        newPrice: 32000,
        img: "https://images.unsplash.com/photo-1567016432779-094069958ea5?auto=format&fit=crop&w=1200&q=60",
        inStock: true,
        onSale: true,
    },

    // --- Converted Items Below ---

    {
        id: 4,
        category: "SOFAS",
        subCategory: "L-Shaped Sofas",
        title: "L-Shaped Sofas",
        discount: "-5%",
        oldPrice: 75000,
        newPrice: 71000,
        img: "https://images.unsplash.com/photo-1549187774-b4e9b0445b41?w=800",
        inStock: true,
        onSale: true,
    },
    {
        id: 5,
        category: "BEDS",
        subCategory: "Chester Beds",
        title: "Chester Beds",
        discount: "-6%",
        oldPrice: 68000,
        newPrice: 64000,
        img: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=800",
        inStock: true,
        onSale: true,
    },
    {
        id: 6,
        category: "SOFAS",
        subCategory: "Sofa Set Designs",
        title: "Sofa set designs",
        discount: "-4%",
        oldPrice: 52000,
        newPrice: 50000,
        img: "https://images.unsplash.com/photo-1615873968403-89e068629265?w=800",
        inStock: true,
        onSale: false,
    },
    {
        id: 7,
        category: "BEDS",
        subCategory: "Mirror Beds",
        title: "Mirror Beds",
        discount: "-3%",
        oldPrice: 72000,
        newPrice: 70000,
        img: "https://images.unsplash.com/photo-1505693314120-0d443867891c?w=800",
        inStock: true,
        onSale: false,
    },
    {
        id: 8,
        category: "SOFAS",
        subCategory: "Chester Seats",
        title: "Chester seats",
        discount: "-5%",
        oldPrice: 45000,
        newPrice: 43000,
        img: "https://images.unsplash.com/photo-1567016432779-094069958ea5?w=800",
        inStock: true,
        onSale: true,
    },
    {
        id: 9,
        category: "CHAIRS",
        subCategory: "Wing Chair",
        title: "Wing Chair",
        discount: "-4%",
        oldPrice: 25000,
        newPrice: 24000,
        img: "https://images.unsplash.com/photo-1598300056393-4aac492f4344?w=800",
        inStock: true,
        onSale: false,
    },
    {
        id: 10,
        category: "SOFAS",
        subCategory: "Semi-Recliner Sofas",
        title: "Semi-Recliner Sofas",
        discount: "-6%",
        oldPrice: 68000,
        newPrice: 64000,
        img: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800",
        inStock: true,
        onSale: true,
    },
    {
        id: 11,
        category: "DINING",
        subCategory: "Dining Tables",
        title: "DINING TABLE DESIGNS",
        discount: "-5%",
        oldPrice: 55000,
        newPrice: 52000,
        img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800",
        inStock: true,
        onSale: true,
    },
    {
        id: 12,
        category: "TABLES",
        subCategory: "Coffee Tables",
        title: "Coffee Tables",
        discount: "-4%",
        oldPrice: 18000,
        newPrice: 17000,
        img: "https://images.unsplash.com/photo-1615874959474-d609969a20ed?w=800",
        inStock: true,
        onSale: false,
    },
    {
        id: 13,
        category: "TV STANDS",
        subCategory: "TV Stand Designs",
        title: "TV Stand designs",
        discount: "-5%",
        oldPrice: 22000,
        newPrice: 21000,
        img: "https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?w=800",
        inStock: true,
        onSale: true,
    },
    {
        id: 14,
        category: "BEDS",
        subCategory: "Wooden Beds",
        title: "Wooden beds",
        discount: "-6%",
        oldPrice: 60000,
        newPrice: 56000,
        img: "https://images.unsplash.com/photo-1540518614846-7eded433c457?w=800",
        inStock: true,
        onSale: true,
    },
    {
        id: 15,
        category: "CHAIRS",
        subCategory: "Office Chairs",
        title: "Office Chairs",
        discount: "-4%",
        oldPrice: 30000,
        newPrice: 28500,
        img: "https://images.unsplash.com/photo-1588854337115-1c67d9247e4d?w=800",
        inStock: true,
        onSale: false,
    },
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

export const ProductCategoryItems = () => {
    const [openMenu, setOpenMenu] = useState(null);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
    const [openSort, setOpenSort] = useState(false);
    const navRef = useRef(null);

    const { category, subCategory } = useParams();

    const catLabel = (category || "").toUpperCase();
    const subLabel = subCategory ? decodeURIComponent(subCategory) : null;

    // Filters (basic UI like screenshot)
    const [minPrice, setMinPrice] = useState(52000);
    const [maxPrice, setMaxPrice] = useState(110000);
    const [price, setPrice] = useState(148000);
    const [onSale, setOnSale] = useState(false);
    const [inStock, setInStock] = useState(false);

    // Detect screen resize
    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 768);
        };
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const topRatedProducts = allProducts
        .filter((p) => p.rating && p.rating >= 4)
        .sort((a, b) => b.rating - a.rating)
        .slice(0, 3); // show top 3

    const filtered = useMemo(() => {
        return allProducts
            .filter((p) => p.category === catLabel)
            .filter((p) => (subLabel ? p.subCategory === subLabel : true))
            .filter((p) => p.newPrice >= minPrice && p.newPrice <= maxPrice)
            .filter((p) => (onSale ? p.onSale : true))
            .filter((p) => (inStock ? p.inStock : true));
    }, [allProducts, catLabel, subLabel, minPrice, maxPrice, onSale, inStock]);


    return (
        <>
            <div className="pci-wrap">
                {isMobile ? (
                    <>
                        <div>
                            <div>
                                <Link to="/" className="LightFont">Home</Link>
                                <span>/</span>
                                <span className="LightFont">{catLabel}</span>
                                {subLabel && (
                                    <>
                                        <span>/</span>
                                        <b className="LightFontBold">{subLabel}</b>
                                    </>
                                )}
                            </div>

                            <div className="pci-tools" style={{ marginTop: "15px" }}>
                                <div className="pci-show">
                                    <span className="LightFont">Showing 1-18 of 248 results:</span>
                                </div>
                            </div>
                            <div style={{ height: "0.09px", background: "#ddd", width: "100%", marginTop: "15px", marginBottom: "15px" }} />
                        </div>
                        {/* Hamburger */}
                        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom:"20px", marginTop:"10px" }}>
                            <div style={{ display: "flex", gap: "10px" }}>
                                <FaBars
                                    size={22}
                                    style={{ cursor: "pointer" }}
                                    onClick={() => setMobileMenuOpen(true)}
                                />
                                <p className="LightFontBold">Show sidebar</p>
                            </div>
                            <div style={{ position: "relative" }}>
                                <div
                                    onClick={() => setOpenSort(!openSort)}
                                    style={{ cursor: "pointer" }}
                                >
                                    <HiMiniArrowsUpDown size={25} />
                                </div>

                                {openSort && (
                                    <div
                                        style={{
                                            position: "absolute",
                                            right: 0,
                                            top: "25px",
                                            background: "white",
                                            border: "1px solid #eee",
                                            boxShadow: "0 5px 15px rgba(0,0,0,0.1)",
                                            padding: "10px",
                                            zIndex: 1000,
                                            minWidth: "300px",
                                            padding: "30px"
                                        }}
                                    >
                                        <p className="LightFont" style={{ marginBottom: "10px" }}>Default sorting</p>
                                        <p className="LightFont" style={{ marginBottom: "10px" }}>Sort by popularity</p>
                                        <p className="LightFont" style={{ marginBottom: "10px" }}>Sor by average rating</p>
                                        <p className="LightFont" style={{ marginBottom: "10px" }}>Sort by latest</p>
                                        <p className="LightFont" style={{ marginBottom: "10px" }}>Sort by price low to high</p>
                                        <p className="LightFont" style={{ marginBottom: "10px" }}>Sort by price high to low</p>
                                    </div>
                                )}
                            </div>
                        </div>

                        {/* product grid */}
                        <div className="ri2-grid" style={{
                            height: "70vh",        // important: fixed height
                            overflowY: "auto",
                        }}>
                            {filtered.map((p, idx) => {
                                const rating = Math.max(0, Math.min(5, Number(p.rating || 0)));

                                return (
                                    <div className="ri2-card" key={`${p.title}-${idx}`} style={{ display: "flex", flexDirection: "column", justifyContent: "space-between", alignItems: "center" }}>
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
                                                <FaWhatsapp className="ri2-waIcon" size={22} />
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

                    </>
                ) : (
                    <div className="pci-inner">
                        {/* LEFT SIDEBAR */}
                        <aside className="pci-side" >
                            <h4 className="LightFontBold">Filter by price</h4>
                            <div className="pci-sliderBar" style={{ marginTop: "40px" }} />
                            <div className="pci-priceRow">
                                <p style={{ fontSize: "15px", paddingTop: "30px", marginBottom: "30px" }}>
                                    Price: <b>KSh {minPrice.toLocaleString("en-KE")}</b> —{" "}
                                    <b>KSh {maxPrice.toLocaleString("en-KE")}</b>
                                </p>
                            </div>

                            <button className="pci-filterBtn"><p className="LightFontBold" style={{ fontSize: "13px" }}>FILTER</p></button>

                            <div className="pci-divider" />
                            <div className="sidebar-wrap">
                                {/* Stock Status */}
                                <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
                                    <p className="LightFontBold">Stock status</p>
                                    <label>
                                        <input
                                            type="checkbox"
                                            checked={onSale}
                                            onChange={(e) => setOnSale(e.target.checked)}
                                        />
                                        <span className="LightFont" style={{ marginLeft: "10px" }}>On sale</span>
                                    </label>

                                    <label>
                                        <input
                                            type="checkbox"
                                            checked={inStock}
                                            onChange={(e) => setInStock(e.target.checked)}
                                        />
                                        <span className="LightFont" style={{ marginLeft: "10px" }}>In stock</span>
                                    </label>
                                </div>

                                <div className="divider" />

                                {/* Top Rated Products */}
                                <div className="top-rated">
                                    <p className="LightFontBold" style={{ marginBottom: "30px" }}>Top rated products</p>

                                    {allProducts.map((product) => (
                                        <div>
                                            <div key={product.id} className="top-product">
                                                <img src={product.img} alt={product.title} />
                                                <div className="product-info">
                                                    <p className="LightFontBold">{product.title}</p>

                                                    <div className="stars">
                                                        {[...Array(5)].map((_, i) => (
                                                            <FaStar key={i} />
                                                        ))}
                                                    </div>

                                                    <div className="price-row">
                                                        <span className="old-price">
                                                            KSh {product.oldPrice.toLocaleString()}
                                                        </span>
                                                        <span className="new-price">
                                                            KSh {product.newPrice.toLocaleString()}
                                                        </span>
                                                    </div>
                                                </div>

                                            </div>
                                            <div className="pci-divider" />
                                        </div>

                                    ))}
                                </div>
                            </div>
                        </aside>

                        {/* RIGHT CONTENT */}
                        <main className="pci-main">
                            {/* top row: breadcrumb + tools */}
                            <div className="pci-topRow">
                                <div className="pci-breadcrumb">
                                    <Link to="/" className="LightFont">Home</Link>
                                    <span>/</span>
                                    <span className="LightFont">{catLabel}</span>
                                    {subLabel && (
                                        <>
                                            <span>/</span>
                                            <b className="LightFontBold">{subLabel}</b>
                                        </>
                                    )}
                                </div>

                                <div className="pci-tools">
                                    <div className="pci-show">
                                        <span className="LightFontBold">Show :</span>
                                        <span className="LightFont">9</span>
                                        <span className="LightFont">12</span>
                                        <span className="LightFont">18</span>
                                        <span className="LightFont">24</span>
                                    </div>

                                    <div className="pci-viewIcons">
                                        <FaThLarge size={25} />
                                        <FaTh size={25} />
                                        <FaThList size={25} />
                                    </div>

                                    <p className="LightFontBold">Default Sorting</p>

                                    <div style={{ position: "relative" }}>
                                        <div
                                            onClick={() => setOpenSort(!openSort)}
                                            style={{ cursor: "pointer" }}
                                        >
                                            <FaChevronDown size={18} />
                                        </div>

                                        {openSort && (
                                            <div
                                                style={{
                                                    position: "absolute",
                                                    right: 0,
                                                    top: "25px",
                                                    background: "white",
                                                    border: "1px solid #eee",
                                                    boxShadow: "0 5px 15px rgba(0,0,0,0.1)",
                                                    padding: "10px",
                                                    zIndex: 1000,
                                                    minWidth: "300px",
                                                    padding: "30px"
                                                }}
                                            >
                                                <p className="LightFont" style={{ marginBottom: "10px" }}>Default sorting</p>
                                                <p className="LightFont" style={{ marginBottom: "10px" }}>Sort by popularity</p>
                                                <p className="LightFont" style={{ marginBottom: "10px" }}>Sor by average rating</p>
                                                <p className="LightFont" style={{ marginBottom: "10px" }}>Sort by latest</p>
                                                <p className="LightFont" style={{ marginBottom: "10px" }}>Sort by price low to high</p>
                                                <p className="LightFont" style={{ marginBottom: "10px" }}>Sort by price high to low</p>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </div>

                            {/* product grid */}
                            <div className="ri2-grid">
                                {filtered.map((p, idx) => {
                                    const rating = Math.max(0, Math.min(5, Number(p.rating || 0)));

                                    return (
                                        <div className="ri2-card" key={`${p.title}-${idx}`} style={{ display: "flex", flexDirection: "column", justifyContent: "space-between", alignItems: "center" }}>
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
                                                    <FaWhatsapp className="ri2-waIcon" size={22} />
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
                        </main>
                    </div>
                )}
            </div>


            {mobileMenuOpen && (
                <>
                    {/* Overlay */}
                    <div
                        onClick={() => setMobileMenuOpen(false)}
                        style={{
                            position: "fixed",
                            inset: 0,
                            background: "rgba(0,0,0,0.45)",
                            zIndex: 9998
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
                            transform: "translateX(0)",
                            transition: "transform 0.3s ease",
                            boxShadow: "4px 0 20px rgba(0,0,0,0.2)"
                        }}
                    >
                        {/* Close Header */}
                        <div
                            onClick={() => setMobileMenuOpen(false)}
                            style={{
                                padding: "15px 20px",
                                display: "flex",
                                justifyContent: "flex-end",
                                borderBottom: "1px solid #ddd",
                                background: "#eee",
                                fontWeight: "500",
                                cursor: "pointer"
                            }}
                        >
                            ✕ Close
                        </div>

                        {/* Scroll Area */}
                        <div
                            style={{
                                flex: 1,
                                overflowY: "auto",
                                padding: "20px"
                            }}
                        >
                            {/* ================= PRICE FILTER ================= */}
                            <h4 style={{ marginBottom: "15px" }}>Filter by price</h4>

                            <input
                                type="range"
                                min="22000"
                                max="148000"
                                value={price}
                                onChange={(e) => setPrice(Number(e.target.value))}
                                style={{
                                    width: "100%",
                                    accentColor: "#cc8e2c"
                                }}
                            />

                            <p style={{ marginTop: "10px", fontWeight: "500" }}>
                                Price: KSh 22,000 — KSh {price.toLocaleString()}
                            </p>

                            <button
                                style={{
                                    marginTop: "10px",
                                    padding: "8px 15px",
                                    background: "#eee",
                                    border: "none",
                                    cursor: "pointer"
                                }}
                            >
                                FILTER
                            </button>

                            <div style={{ borderTop: "1px solid #ddd", margin: "25px 0" }} />

                            {/* ================= STOCK STATUS ================= */}
                            <h4 style={{ marginBottom: "15px" }}>Stock status</h4>

                            <div style={{ marginBottom: "10px" }}>
                                <input
                                    type="checkbox"
                                    checked={onSale}
                                    onChange={() => setOnSale(!onSale)}
                                />
                                <span style={{ marginLeft: "8px" }}>On sale</span>
                            </div>

                            <div>
                                <input
                                    type="checkbox"
                                    checked={inStock}
                                    onChange={() => setInStock(!inStock)}
                                />
                                <span style={{ marginLeft: "8px" }}>In stock</span>
                            </div>

                            <div style={{ borderTop: "1px solid #ddd", margin: "25px 0" }} />

                            {/* ================= TOP RATED PRODUCTS ================= */}
                            <h4 style={{ marginBottom: "15px" }}>Top rated products</h4>

                            {topRatedProducts.map((product) => (
                                <div
                                    key={product.id}
                                    onClick={() => {
                                        setMobileMenuOpen(false);
                                        navigate(`/product/${encodeURIComponent(product.title)}`);
                                    }}
                                    style={{
                                        display: "flex",
                                        gap: "10px",
                                        marginBottom: "15px",
                                        cursor: "pointer"
                                    }}
                                >
                                    <img
                                        src={product.img}
                                        alt={product.title}
                                        style={{
                                            width: "70px",
                                            height: "70px",
                                            objectFit: "cover"
                                        }}
                                    />

                                    <div style={{ flex: 1 }}>
                                        <p style={{ margin: 0, fontSize: "14px" }}>
                                            {product.title}
                                        </p>

                                        {/* Stars */}
                                        <div style={{ fontSize: "14px" }}>
                                            {Array.from({ length: 5 }).map((_, i) => (
                                                <span
                                                    key={i}
                                                    style={{
                                                        color:
                                                            i < product.rating ? "#f5b301" : "#ddd"
                                                    }}
                                                >
                                                    ★
                                                </span>
                                            ))}
                                        </div>

                                        <p
                                            style={{
                                                margin: 0,
                                                fontWeight: "600",
                                                color: "#cc8e2c"
                                            }}
                                        >
                                            KSh {product.newPrice.toLocaleString()}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* ================= FLOATING CALL BUTTON ================= */}
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
        </>

    );
};
