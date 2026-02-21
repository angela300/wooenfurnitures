      {cartOpen && createPortal && (
        <>
          {/* Overlay */}
          <div
            onClick={() => setCartOpen(false)}
            style={{
              position: "fixed",
              inset: 0,
              background: "rgba(0,0,0,0.4)",
              zIndex: 9998
            }}
          />

          {/* Cart Drawer */}
          <div
            style={{
              position: "fixed",
              top: 0,
              right: 0,
              height: "100vh",
              width: "90vw",
              maxWidth: "380px",
              background: "#f5f5f5",
              zIndex: 9999,
              display: "flex",
              flexDirection: "column",
              boxShadow: "-4px 0 20px rgba(0,0,0,0.25)",
              animation: "slideInRight 0.3s ease forwards"
            }}
          >
            {/* Header */}
            <div
              style={{
                padding: "20px",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                borderBottom: "1px solid #ddd",
                background: "#fff",
                fontWeight: 600
              }}
            >
              Shopping cart
              <span
                style={{ cursor: "pointer" }}
                onClick={() => setCartOpen(false)}
              >
                ✕ Close
              </span>
            </div>

            {/* Cart Items */}
            <div style={{ flex: 1, overflowY: "auto", padding: "20px" }}>
              {cartItems.map((item, index) => (
                <div
                  key={index}
                  style={{
                    display: "flex",
                    gap: "15px",
                    marginBottom: "20px",
                    borderBottom: "1px solid #eee",
                    paddingBottom: "15px"
                  }}
                >
                  <img
                    src={item.img}
                    alt={item.title}
                    style={{ width: "70px", height: "70px", objectFit: "cover" }}
                  />

                  <div style={{ flex: 1 }}>
                    <p style={{ fontSize: "14px", fontWeight: 600 }}>
                      {item.title}
                    </p>
                    <p style={{ fontSize: "13px", color: "#777" }}>
                      {item.quantity} × KSh {item.price.toLocaleString()}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Subtotal */}
            <div
              style={{
                padding: "20px",
                borderTop: "1px solid #ddd",
                background: "#fff"
              }}
            >
              <p style={{ fontWeight: 600, marginBottom: "15px" }}>
                Subtotal:{" "}
                <span style={{ color: "#cc8e2c" }}>
                  KSh{" "}
                  {cartItems
                    .reduce((acc, item) => acc + item.price * item.quantity, 0)
                    .toLocaleString()}
                </span>
              </p>

              <button
                style={{
                  width: "100%",
                  padding: "12px",
                  background: "#eee",
                  border: "none",
                  marginBottom: "10px",
                  cursor: "pointer"
                }}
                onClick={() => {
                  setCartOpen(false);
                  navigate("/cart");
                }}
              >
                VIEW CART
              </button>

              <button
                style={{
                  width: "100%",
                  padding: "12px",
                  background: "#1e40af",
                  color: "white",
                  border: "none",
                  cursor: "pointer"
                }}
                onClick={() => {
                  setCartOpen(false);
                  navigate("/checkout");
                }}
              >
                CHECKOUT
              </button>
            </div>
          </div>
        </>
      )}