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

      <div className="ap-wrap" >

        {/* LEFT IMAGE */}
        <div className="ap-left">
          <span className="ap-discount">{product.discount}</span>
          <img src={product.img} alt={product.title} />
        </div>

        {/* RIGHT CONTENT */}
        <div className="ap-right">
          <p className="LightFontBold" style={{fontSize:"31px"}}>{product.title}</p>

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
              <FaTruck size={35} color="lightgray" />
              <p className="LightFontBold">
                Fast Shipping
              </p>
              <p className="LightFont">
                Carrier information
              </p>
            </div>

            <div>
              <MdOutlineLocalConvenienceStore size={35} color="lightgray" />
              <p className="LightFontBold">
                20k products
              </p>
              <p className="LightFont">
                Payment methods
              </p>
            </div>

            <div>
              <FaRocketchat size={35} color="lightgray" />
              <p className="LightFontBold">
                24/7 Support
              </p>
              <p className="LightFont">
                Unlimited help desk
              </p>
            </div>

            <div>
              <PiMedalBold size={35} color="lightgray" />
              <p className="LightFontBold">
                2-day Delivery
              </p>
              <p className="LightFont">
                Track your orders
              </p>
            </div>
          </div>

        </div>
      </div>

      <div
        style={{
          width: "100%",
          display: "flex",
          padding: "60px 5%",
          boxSizing: "border-box",
          gap: "50px"
        }}
      >
        {/* LEFT SIDE — REVIEWS */}
        <div style={{ flex: 2 }}>
          <p className="LightFontBigger">Reviews (3)</p>
          <p className="LightFont" style={{ marginBottom: "30px", color: "#555" }}>
            3 reviews for -6 by 6 White Bed With Two side drawers
          </p>

          {/* Review 1 */}
          <div style={{ marginBottom: "30px", borderBottom: "1px solid #eee", paddingBottom: "20px" }}>
            <strong className="LightFontBig" style={{ fontSize: "20px" }}>Abbas Noor</strong> – May 4, 2024
            <p style={{ color: "#f5b301", margin: "5px 0" }}>★★★★☆</p>
            <p className="LightFont">Amazing and stylish bed, I would love it to know the actual price</p>
          </div>

          {/* Admin Reply */}
          <div style={{ marginLeft: "20px", marginBottom: "30px" }}>
            <strong>admin</strong> – May 4, 2024
            <p className="LightFont">price indicated is actual</p>
          </div>

          {/* Review 2 */}
          <div style={{ marginBottom: "30px", borderBottom: "1px solid #eee", paddingBottom: "20px" }}>
            <strong className="LightFontBig" style={{ fontSize: "20px" }}>Taddy Yohannes</strong> – June 19, 2024
            <p style={{ color: "#f5b301", margin: "5px 0" }}>★★★★☆</p>
            <p className="LightFont">I’m interested in Lamu furniture bed. 5 by 6</p>
          </div>

          {/* Admin Reply */}
          <div style={{ marginLeft: "20px", marginBottom: "30px" }}>
            <strong>admin</strong> – June 19, 2024
            <p className="LightFont">Hello. We have 5 by 6 bed available. Call/whatsapp 0722948285</p>
          </div>

          {/* Review 3 */}
          <div style={{ marginBottom: "30px", borderBottom: "1px solid #eee", paddingBottom: "20px" }}>
            <strong className="LightFontBig" style={{ fontSize: "20px" }}>Catherine</strong> – May 30, 2025
            <p style={{ color: "#f5b301", margin: "5px 0" }}>★★★★★</p>
            <p className="LightFont">The best</p>
          </div>
        </div>

        {/* RIGHT SIDE — ADD REVIEW FORM */}
        <div
          style={{
            flex: 1,
            borderLeft: "1px solid #eee",
            paddingLeft: "40px"
          }}
        >
          <p className="LightFontBigger">Add a review</p>
          <p style={{ color: "#666" }} className="LightFont">
            Your email address will not be published. Required fields are marked *
          </p>

          {/* Rating */}
          <div style={{ marginTop: "20px" }}>
            <label className="LightFont">Your rating *</label>
            <div style={{ color: "#f5b301", fontSize: "20px", marginTop: "5px" }}>
              ★★★★★
            </div>
          </div>

          {/* Review Text */}
          <div style={{ marginTop: "20px" }}>
            <label className="LightFont">Your review *</label>
            <textarea
              style={{
                width: "100%",
                height: "120px",
                marginTop: "5px",
                padding: "10px",
                border: "1px solid #ddd",
                outline: "none"
              }}
            />
          </div>

          {/* Name */}
          <div style={{ marginTop: "20px" }}>
            <label className="LightFont">Name *</label>
            <input
              type="text"
              style={{
                width: "100%",
                padding: "10px",
                marginTop: "5px",
                border: "1px solid #ddd"
              }}
            />
          </div>

          {/* Email */}
          <div style={{ marginTop: "20px" }}>
            <label className="LightFont">Email *</label>
            <input
              type="email"
              style={{
                width: "100%",
                padding: "10px",
                marginTop: "5px",
                border: "1px solid #ddd"
              }}
            />
          </div>

          {/* Checkbox */}
          <div style={{ marginTop: "15px" }}>
            <input type="checkbox" id="saveInfo" />
            <label htmlFor="saveInfo" style={{ marginLeft: "8px", fontSize: "14px" }} className="LightFont">
              Save my name, email, and website in this browser for the next time I comment.
            </label>
          </div>

          {/* Submit Button */}
          <button
            style={{
              marginTop: "25px",
              width: "100%",
              padding: "12px",
              background: "#1e40af",
              color: "white",
              border: "none",
              cursor: "pointer",
              fontWeight: "600",
              borderRadius: 0
            }}
          >
            Submit
          </button>
        </div>
      </div>

      <div
        style={{
          width: "100%",
          padding: "60px 5%",
          boxSizing: "border-box",
        }}
      >
        {/* Top Accent Line */}
        <div
          style={{
            width: "60px",
            height: "3px",
            background: "#d97706",
            marginBottom: "20px"
          }}
        />

        {/* Description Title */}
        <p style={{ marginBottom: "20px" }} className="LightFontBig">Description</p>

        {/* Description Content */}
        <div style={{ color: "#555", lineHeight: "1.8" }}>
          <p className="LightFont">Wood: Blue gum</p>
          <p className="LightFont">size; 6 by 6</p>
          <p className="LightFont">color: White</p>
        </div>

        {/* Divider */}
        <div
          style={{
            margin: "40px 0 20px 0",
            width: "40px",
            height: "2px",
            background: "#ccc"
          }}
        />

        {/* Related Section */}
        <h4 style={{ marginBottom: "20px" }}>Related</h4>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            gap: "40px",
            flexWrap: "wrap"
          }}
        >
          {/* Related Item 1 */}
          <div style={{ flex: "1", minWidth: "250px" }}>
            <p style={{ fontWeight: "500" }} className="LightFont">
              5 by 6 white wooden bed with two side drawers
            </p>
            <p style={{ color: "#888", fontSize: "14px" }} className="LightFont">February 19, 2024</p>
            <p style={{ color: "#aaa", fontSize: "14px" }} className="LightFont">Similar post</p>
          </div>

          {/* Related Item 2 */}
          <div style={{ flex: "1", minWidth: "250px" }}>
            <p style={{ fontWeight: "500" }} className="LightFont">
              6 by 6 classic white bed with two side drawers
            </p>
            <p style={{ color: "#888", fontSize: "14px" }} className="LightFont">August 17, 2022</p>
            <p style={{ color: "#aaa", fontSize: "14px" }} className="LightFont">Similar post</p>
          </div>

          {/* Related Item 3 */}
          <div style={{ flex: "1", minWidth: "250px" }}>
            <p style={{ fontWeight: "500" }} className="LightFont">
              Preston beige 5 by 6 bed with two side drawers
            </p>
            <p style={{ color: "#888", fontSize: "14px" }} className="LightFont">March 14, 2024</p>
            <p style={{ color: "#aaa", fontSize: "14px" }} className="LightFont">With 1 comment</p>
          </div>
        </div>
      </div>


    </div>
  );
};
