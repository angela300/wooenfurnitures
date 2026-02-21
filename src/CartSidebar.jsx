import { useCart } from "./CartContext";
import { IoClose } from "react-icons/io5";
import "./App.css"

const CartSidebar = ({ isOpen, onClose }) => {
  const { cartItems, removeFromCart } = useCart();

  const totalPrice = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  return (
    <>
      {/* Overlay */}
      {isOpen && (
        <div
          onClick={onClose}
          style={{
            position: "fixed",
            inset: 0,
            background: "rgba(0,0,0,0.4)",
            zIndex: 999,
          }}
        />
      )}

      {/* Sidebar */}
      <div
        style={{
          position: "fixed",
          top: 0,
          right: 0,
          width: "400px",
          height: "100vh",
          background: "white",
          transform: isOpen ? "translateX(0)" : "translateX(100%)",
          transition: "0.3s ease",
          zIndex: 1000,
          display: "flex",
          flexDirection: "column",
          alignItems:"center",
          padding: "20px",
        }}
      >
        {/* Header */}
                <div style={{
                    width: "100%", display: "flex", flexDirection: "row", justifyContent: "space-between"
                    , marginTop: "10px", marginBottom: "30px"
                }}>
                    <p className="LightFontBig" style={{fontSize:"28px"}}>Shopping Cart</p>
                    <div style={{ display: "flex", gap: "10px", alignItems: "center" }}>
                        <p className="LightFontBig">Close</p>
                        <IoClose size={24} onClick={onClose} color="black" />
                    </div>
                </div>

        {/* Cart Items */}
        <div
          style={{
            flex: 1,
            overflowY: "auto",
            marginTop: "20px",
          }}
        >
          {cartItems.length === 0 ? (
            <p className="LightFont" style={{color:"black"}}>Your cart is empty</p>
          ) : (
            cartItems.map((item) => (
              <div
                key={item.id}
                style={{
                  display: "flex",
                  gap: "15px",
                  marginBottom: "20px",
                  borderBottom: "1px solid #eee",
                  paddingBottom: "15px",
                }}
              >
                {/* Product Image */}
                <img
                  src={item.img}
                  alt={item.title}
                  style={{
                    width: "80px",
                    height: "80px",
                    objectFit: "cover",
                    borderRadius: "6px", color:"black"
                  }}
                />

                {/* Product Info */}
                <div style={{ flex: 1 }}>
                  <p style={{ margin: 0, fontWeight: 600, color:"black" }} className="LightFontBig">
                    {item.title}
                  </p>

                  <p className="LightFontBig" style={{ margin: 0, fontWeight: 600, color:"black"}}>
                    {item.quantity} × KSh <span style={{color:"orange"}}>{item.price.toLocaleString()}</span>
                  </p>

                  <button
                    onClick={() => removeFromCart(item.id)}
                    style={{
                      border: "none",
                      background: "none",
                      color: "red",
                      cursor: "pointer",
                      padding: 0,
                      fontSize: "13px",
                    }}
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Checkout Section */}
        <div
          style={{
            borderTop: "1px solid #ddd",
            paddingTop: "15px",
          }}
        >
          <p style={{ fontWeight: "bold", fontSize: "16px" }}>
            Total: KSh {totalPrice.toLocaleString()}
          </p>

          <button
            style={{
              width: "300px",
              height: "40px",
              background: "#1d4fa3",
              color: "white",
              border: "none",
              cursor: "pointer",
              marginTop: "10px",
              fontWeight: 600,
              borderRadius:0,
              fontSize:"14px"
            }}
          >
            CHECKOUT
          </button>
        </div>
      </div>
    </>
  );
};

export default CartSidebar;
