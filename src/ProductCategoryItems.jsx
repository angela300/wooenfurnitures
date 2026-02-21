import React, { useMemo, useState } from "react";
import { useParams, Link } from "react-router-dom";
import "./productCategoryItems.css";
import { FaThLarge, FaTh, FaThList } from "react-icons/fa";
import "./App.css"
import { FaStar } from "react-icons/fa";
import { FaChevronDown } from "react-icons/fa";
import "./RollerImage2.css";
import { FaWhatsapp } from "react-icons/fa";


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
    {
        id: 4,
        category: "SOFAS",
        subCategory: "Sofa set designs",
        title: "helsinki 7 seater dark grey l",
        discount: "-9%",
        oldPrice: 68000,
        newPrice: 62000,
        img: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1200&q=60",
        inStock: true,
        onSale: true,
    },
    {
        id: 5,
        category: "BEDROOM",
        subCategory: "Chester Beds",
        title: "chester bed queen size",
        discount: "-6%",
        oldPrice: 58000,
        newPrice: 56000,
        img: "https://images.unsplash.com/photo-1505693314120-0d443867891c?auto=format&fit=crop&w=1200&q=60",
        inStock: true,
        onSale: true,
    },
];

export const ProductCategoryItems = () => {
    const [openSort, setOpenSort] = useState(false);

    const { category, subCategory } = useParams();

    const catLabel = (category || "").toUpperCase();
    const subLabel = subCategory ? decodeURIComponent(subCategory) : null;

    // Filters (basic UI like screenshot)
    const [minPrice, setMinPrice] = useState(52000);
    const [maxPrice, setMaxPrice] = useState(110000);
    const [onSale, setOnSale] = useState(false);
    const [inStock, setInStock] = useState(false);

    const filtered = useMemo(() => {
        return allProducts
            .filter((p) => p.category === catLabel)
            .filter((p) => (subLabel ? p.subCategory === subLabel : true))
            .filter((p) => p.newPrice >= minPrice && p.newPrice <= maxPrice)
            .filter((p) => (onSale ? p.onSale : true))
            .filter((p) => (inStock ? p.inStock : true));
    }, [allProducts, catLabel, subLabel, minPrice, maxPrice, onSale, inStock]);


    return (
        <div className="pci-wrap">
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
        </div>
    );
};
