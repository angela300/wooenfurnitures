import { useCart } from "./CartContext";
import { useState, useEffect } from "react";
import "./Checkout.css";

export const Checkout = () => {
  const { cartItems } = useCart();
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  const totalPrice = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    city: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div style={{ width: "100%", display: "flex", flexDirection: "column" }}>
      {isMobile ? (
        /* ================= MOBILE ================= */
        <>
          {/* Header */}
          <div
            style={{
              width: "100%",
              backgroundColor: "#365fb5",
              textAlign: "center",
              color: "white",
              padding: "60px 20px",
              boxSizing: "border-box",
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "8px",
                fontSize: "16px",
                fontWeight: "500",
              }}
            >

              <span>CHECKOUT</span>
            </div>
          </div>

          {/* Content */}
          <div style={{ padding: "20px" }}>
            {/* Billing */}
            <div style={{ marginBottom: "40px" }}>
              <h2>Billing Details</h2>

              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "15px",
                  marginTop: "20px",
                }}
              >
                <input name="firstName" placeholder="First Name" onChange={handleChange} />
                <input name="lastName" placeholder="Last Name" onChange={handleChange} />
                <input name="email" placeholder="Email Address" onChange={handleChange} />
                <input name="phone" placeholder="Phone Number" onChange={handleChange} />
                <input name="address" placeholder="Street Address" onChange={handleChange} />
                <input name="city" placeholder="Town / City" onChange={handleChange} />
              </div>

              <button
                className="place-order-btn"
                style={{ marginTop: "25px", width: "100%" }}
              >
                PLACE ORDER
              </button>
            </div>

            {/* Order Summary */}
            <div>
              <h3>Your Order</h3>

              {cartItems.length === 0 ? (
                <p style={{ marginTop: "20px" }}>Your cart is empty</p>
              ) : (
                <>
                  {cartItems.map((item) => (
                    <div
                      key={item.id}
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        marginBottom: "15px",
                        borderBottom: "1px solid #eee",
                        paddingBottom: "10px",
                      }}
                    >
                      <span>
                        {item.title} × {item.quantity}
                      </span>
                      <span>
                        KSh {(item.price * item.quantity).toLocaleString()}
                      </span>
                    </div>
                  ))}

                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      marginTop: "20px",
                      fontWeight: "600",
                    }}
                  >
                    <span>Total</span>
                    <span>KSh {totalPrice.toLocaleString()}</span>
                  </div>
                </>
              )}
            </div>
          </div>
        </>
      ) : (
        /* ================= DESKTOP (UNCHANGED) ================= */
        <>
          <div
            style={{
              width: "100%",
              backgroundColor: "#365fb5",
              boxSizing: "border-box",
              textAlign: "center",
              color: "white",
            }}
          >
            <div
              style={{
                width: "100%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                gap: "10px",
                fontSize: "18px",
                fontWeight: "500",
                height: "180px",
              }}
            >
              <span className="LightFontBoldCheck" style={{ color: "white" }}>
                SHOPPING CART
              </span>
              <span style={{ color: "#999" }} className="LightFontBoldCheck">
                →
              </span>
              <span className="LightFontBoldCheck" style={{ color: "white" }}>
                CHECKOUT
              </span>
              <span style={{ color: "#999" }} className="LightFontBoldCheck">
                →
              </span>
              <span className="LightFontBoldCheck" style={{ color: "white" }}>
                ORDER COMPLETE
              </span>
            </div>
          </div>

          <div className="checkout-container">
            <div className="checkout-left">
              <h2>Billing Details</h2>

              <div className="checkout-form">
                <input name="firstName" placeholder="First Name" onChange={handleChange} />
                <input name="lastName" placeholder="Last Name" onChange={handleChange} />
                <input name="email" placeholder="Email Address" onChange={handleChange} />
                <input name="phone" placeholder="Phone Number" onChange={handleChange} />
                <input name="address" placeholder="Street Address" onChange={handleChange} />
                <input name="city" placeholder="Town / City" onChange={handleChange} />
              </div>

              <button className="place-order-btn">
                PLACE ORDER
              </button>
            </div>

            <div className="checkout-right">
              <h3>Your Order</h3>

              {cartItems.length === 0 ? (
                <p>Your cart is empty</p>
              ) : (
                <>
                  {cartItems.map((item) => (
                    <div key={item.id} className="order-item">
                      <span>
                        {item.title} × {item.quantity}
                      </span>
                      <span>
                        KSh {(item.price * item.quantity).toLocaleString()}
                      </span>
                    </div>
                  ))}

                  <div className="order-total">
                    <span>Total</span>
                    <span>KSh {totalPrice.toLocaleString()}</span>
                  </div>
                </>
              )}
            </div>
          </div>
        </>
      )}
    </div>
  );
};