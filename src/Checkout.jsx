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
    <div style={{ width: "100%" }}>

      {/* ================= MOBILE ================= */}
      {isMobile ? (
        <div
          style={{
            minHeight: "100vh",
            overflowY: "auto",
            backgroundColor: "#fafafa",
          }}
        >
          {/* Header */}
          <div
            style={{
              backgroundColor: "#365fb5",
              color: "white",
              textAlign: "center",
              padding: "60px 20px",
              fontWeight: "600",
            }}
          >
            CHECKOUT
          </div>

          {/* Content */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              padding: "40px 20px",
              gap: "50px",
            }}
          >
            {/* Billing */}
            <div
              style={{
                width: "100%",
                maxWidth: "400px",
                backgroundColor: "white",
                padding: "30px",
                boxShadow: "0 2px 6px rgba(0,0,0,0.05)",
              }}
            >
              <h2 style={{ marginBottom: "25px" }}>
                Billing Details
              </h2>

              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "18px",
                }}
              >
                {[
                  { label: "First Name", name: "firstName" },
                  { label: "Last Name", name: "lastName" },
                  { label: "Email Address", name: "email", type: "email" },
                  { label: "Phone Number", name: "phone" },
                  { label: "Street Address", name: "address" },
                  { label: "Town / City", name: "city" },
                ].map((field) => (
                  <div key={field.name}>
                    <label
                      style={{
                        display: "block",
                        fontSize: "13px",
                        marginBottom: "6px",
                        fontWeight: "500",
                      }}
                    >
                      {field.label} *
                    </label>

                    <input
                      type={field.type || "text"}
                      name={field.name}
                      value={formData[field.name]}
                      onChange={handleChange}
                      style={{
                        width: "100%",
                        height: "46px",
                        padding: "0 12px",
                        backgroundColor: "#f4f5f7",
                        border: "1px solid #ddd",
                        borderRadius: "0",
                        fontSize: "14px",
                        boxSizing: "border-box",
                        outline: "none",
                      }}
                    />
                  </div>
                ))}
              </div>

              <button
                style={{
                  marginTop: "30px",
                  width: "100%",
                  height: "46px",
                  backgroundColor: "#365fb5",
                  border: "none",
                  borderRadius: "0",
                  color: "white",
                  fontWeight: "600",
                  cursor: "pointer",
                }}
              >
                PLACE ORDER
              </button>
            </div>

            {/* Order Summary */}
            <div
              style={{
                width: "100%",
                maxWidth: "400px",
                backgroundColor: "white",
                padding: "30px",
                boxShadow: "0 2px 6px rgba(0,0,0,0.05)",
              }}
            >
              <h3 style={{ marginBottom: "20px" }}>
                Your Order
              </h3>

              {cartItems.length === 0 ? (
                <p>Your cart is empty</p>
              ) : (
                <>
                  {cartItems.map((item) => (
                    <div
                      key={item.id}
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        borderBottom: "1px solid #eee",
                        paddingBottom: "10px",
                        marginBottom: "10px",
                        fontSize: "14px",
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
        </div>
      ) : (
        /* ================= DESKTOP (UNCHANGED) ================= */
        <>
          <div
            style={{
              width: "100%",
              backgroundColor: "#365fb5",
              textAlign: "center",
              color: "white",
            }}
          >
            <div
              style={{
                height: "180px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                gap: "10px",
              }}
            >
              <span className="LightFontBoldCheck">SHOPPING CART</span>
              <span>→</span>
              <span className="LightFontBoldCheck">CHECKOUT</span>
              <span>→</span>
              <span className="LightFontBoldCheck">ORDER COMPLETE</span>
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