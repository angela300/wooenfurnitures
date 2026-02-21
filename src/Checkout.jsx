import { useCart } from "./CartContext";
import { useState } from "react";
import "./Checkout.css";

export const Checkout = () => {
  const { cartItems } = useCart();

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

  return (
    <div style={{width:"100%", display:"flex", flexDirection:"column"}}>
      <div
  style={{
    width: "100%",
    backgroundColor: "#365fb5",
   
    boxSizing: "border-box",
    textAlign: "center",
    color: "white"
  }}
>
  {/* Title */}
<div
  style={{
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: "10px",
    fontSize: "18px",
    fontWeight: "500",
    height:"180px"
  }}
>
  <span className="LightFontBoldCheck" style={{color:"white"}}>SHOPPING CART</span>
  <span style={{ color: "#999" }} className="LightFontBoldCheck">→</span>
  <span className="LightFontBoldCheck" style={{color:"white"}}>CHECKOUT</span>
  <span style={{ color: "#999" }} className="LightFontBoldCheck">→</span>
  <span className="LightFontBoldCheck" style={{color:"white"}}>ORDER COMPLETE</span>
</div>
</div>
      <div className="checkout-container">

      {/* LEFT SIDE */}
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

      {/* RIGHT SIDE */}
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
    </div>
    
  );
};
