import { useParams, useNavigate, Link } from "react-router-dom";
import { useState } from "react";
import { FaHeart, FaExchangeAlt, FaEye } from "react-icons/fa";
import { PiMedalBold } from "react-icons/pi";
import { FaRocketchat, FaTruck } from "react-icons/fa";
import { MdOutlineLocalConvenienceStore } from "react-icons/md";
import { useCart } from "./CartContext";
import "./actualProduct.css";
import "./App.css";

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
];

export const ActualProduct = () => {
  const { title } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useCart();   // ✅ Correct placement
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
  };

  return (
    <div>

      {/* Breadcrumb */}
      <div className="pci-breadcrumb" style={{ marginTop: "30px" }}>
        <Link to="/" className="LightFont">Home</Link>
        <span>/</span>
        <span className="LightFont">{product.category}</span>
        <span>/</span>
        <b className="LightFont">{product.subCategory}</b>
        <span>/</span>
        <p className="LightFontBig">{product.title}</p>
      </div>

      <div className="divider" />

      <div className="ap-wrap">

        {/* LEFT IMAGE */}
        <div className="ap-left">
          <span className="ap-discount">{product.discount}</span>
          <img src={product.img} alt={product.title} />
        </div>

        {/* RIGHT CONTENT */}
        <div className="ap-right">
          <h1>{product.title}</h1>

          <div className="ap-price">
            <span className="ap-old">
              KSh {product.oldPrice.toLocaleString()}
            </span>
            <span className="ap-new">
              KSh {product.newPrice.toLocaleString()}
            </span>
          </div>

          {/* ORDER SECTION */}
          <div className="ap-orderBox">

            {/* WhatsApp */}
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

          {/* Extra Info */}
          <div className="below_ap_watch">
            <div>
              <FaTruck size={50} color="lightgray" />
              <p className="LightFontBig" style={{ fontSize: "20px" }}>
                Fast Shipping
              </p>
              <p className="LightFont" style={{ fontSize: "20px" }}>
                Carrier information
              </p>
            </div>

            <div>
              <MdOutlineLocalConvenienceStore size={50} color="lightgray" />
              <p className="LightFontBig" style={{ fontSize: "20px" }}>
                20k products
              </p>
              <p className="LightFont" style={{ fontSize: "20px" }}>
                Payment methods
              </p>
            </div>

            <div>
              <FaRocketchat size={50} color="lightgray" />
              <p className="LightFontBig" style={{ fontSize: "20px" }}>
                24/7 Support
              </p>
              <p className="LightFont" style={{ fontSize: "20px" }}>
                Unlimited help desk
              </p>
            </div>

            <div>
              <PiMedalBold size={50} color="lightgray" />
              <p className="LightFontBig" style={{ fontSize: "20px" }}>
                2-day Delivery
              </p>
              <p className="LightFont" style={{ fontSize: "20px" }}>
                Track your orders
              </p>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};
