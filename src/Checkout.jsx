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
  );
};
