



export const TrackOrder = () => {
  const [orderId, setOrderId] = useState("");
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(null);
  const [error, setError] = useState("");

  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleTrack = (e) => {
    e.preventDefault();
    setError("");
    setResult(null);

    if (!orderId || !email) {
      setError("Please enter both Order ID and Email.");
      return;
    }

    setLoading(true);

    setTimeout(() => {
      setLoading(false);

      if (orderId === "FS12345") {
        setResult({
          status: "Shipped",
          estimatedDelivery: "2-3 days",
          trackingNumber: "TRK-998877",
        });
      } else {
        setError("Order not found. Please check your details.");
      }
    }, 1500);
  };

  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
      
      {/* ===================== MOBILE VERSION ===================== */}
      {isMobile ? (
        <div style={{ width: "100%", padding: "30px 20px" }}>

          <p className="LightFontVeryBig" style={{ color: "#448EE4", textAlign: "center" }}>
            Order Tracking
          </p>

          <p className="LightFont" style={{ textAlign: "center", marginBottom: "30px" }}>
            Enter your Order ID and email below to track your order.
          </p>

          <form onSubmit={handleTrack}>
            <div style={{ display: "flex", flexDirection: "column", gap: "15px" }}>
              
              <input
                type="text"
                placeholder="Order ID (e.g. FS12345)"
                value={orderId}
                onChange={(e) => setOrderId(e.target.value)}
                style={{ padding: "12px" }}
              />

              <input
                type="email"
                placeholder="Email Address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                style={{ padding: "12px" }}
              />

              <button type="submit" className="track-btn" style={{ width: "100%" }}>
                {loading ? "Tracking..." : "TRACK"}
              </button>
            </div>
          </form>

          {error && <p className="error" style={{ marginTop: "15px" }}>{error}</p>}

          {result && (
            <div className="track-result" style={{ marginTop: "20px" }}>
              <h4>Order Status: {result.status}</h4>
              <p>Tracking Number: {result.trackingNumber}</p>
              <p>Estimated Delivery: {result.estimatedDelivery}</p>
            </div>
          )}

          {/* Shipping Section - Stacked */}
          <div style={{ marginTop: "50px", display: "flex", flexDirection: "column", gap: "40px" }}>

            {/* Left items */}
            <div style={{ display: "flex", flexDirection: "column", gap: "25px" }}>
              <div style={{ display: "flex", gap: "15px" }}>
                <FaUndoAlt size={28} />
                <div>
                  <p className="LightFontBold">14 Days Return Period</p>
                  <p className="LightFont">Flexible return policy available.</p>
                </div>
              </div>

              <div style={{ display: "flex", gap: "15px" }}>
                <FaTruck size={28} />
                <div>
                  <p className="LightFontBold">Flexible Shipping</p>
                  <p className="LightFont">Fast and reliable delivery.</p>
                </div>
              </div>

              <div style={{ display: "flex", gap: "15px" }}>
                <FaCreditCard size={28} />
                <div>
                  <p className="LightFontBold">Secure Payment</p>
                  <p className="LightFont">Multiple safe payment methods.</p>
                </div>
              </div>
            </div>

            {/* Image Section */}
            <div style={{ position: "relative" }}>
              <img
                src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d"
                alt="Delivery"
                style={{ width: "100%" }}
              />
            </div>

            {/* Right section */}
            <div style={{ textAlign: "center" }}>
              <p className="LightFontBigger">
                Get answers to all your questions
              </p>

              <p className="LightFont" style={{ margin: "15px 0" }}>
                Contact us Monday to Friday 09:00–21:00 UTC +2
              </p>

              <button className="contact-btn" style={{ width: "100%" }}>
                CONTACT OUR COMPANY
              </button>

              <div
                className="social-icons"
                style={{ marginTop: "20px", display: "flex", justifyContent: "center", gap: "20px" }}
              >
                <FaFacebookF size={26} />
                <FaXTwitter size={26} />
                <FaPinterestP size={26} />
                <FaLinkedinIn size={26} />
                <FaTelegramPlane size={26} />
              </div>
            </div>
          </div>
        </div>
      ) : (
        /* ===================== DESKTOP VERSION (UNCHANGED) ===================== */
        <>
                 <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
            <div style={{ maxWidth: "1500px", padding: "100px", display: "flex", flexDirection: "column", gap: "30px", alignItems: "center" }}>
                <p className="LightFontVeryBig" style={{ color: "#448EE4" }}>Order Tracking</p>
                <p className="LightFont">To track your order please enter your Order ID in the box below and press the "Track" button. This was given to
                    you on your receipt and in the
                    email you should have received.</p>

                <form onSubmit={handleTrack}>
                    <div style={{ display: "flex", flexDirection: "row", gap: "20px", alignItems: "flex-end" }}>
                        <div className="input-group">
                            <p className="LightFont" style={{ color: "black" }}>Order ID</p>
                            <input
                                type="text"
                                placeholder="Enter Order ID (e.g. FS12345)"
                                value={orderId}
                                onChange={(e) => setOrderId(e.target.value)}
                            />
                        </div>

                        <div className="input-group">
                            <p className="LightFont" style={{ color: "black"}}>Email Address</p>
                            <input
                                type="email"
                                placeholder="Enter your email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>

                        <button type="submit" className="track-btn">
                            TRACK
                        </button>
                    </div>
                </form>

                {error && <p className="error">{error}</p>}

                {result && (
                    <div className="track-result">
                        <h4>Order Status: {result.status}</h4>
                        <p>Tracking Number: {result.trackingNumber}</p>
                        <p>Estimated Delivery: {result.estimatedDelivery}</p>
                    </div>
                )}
            </div>

                <div className="shipping-wrap">
      {/* LEFT COLUMN */}
      <div className="shipping-left">
        <p className="LightFontBigger" style={{marginBottom:"30px"}}>Ship package</p>

        <div className="ship-item">
          <FaUndoAlt className="ship-icon" />
          <div>
            <p className="LightFontBold" style={{fontSize:"17px"}}>14 Days Return Period</p>
            <p className="LightFont">
              Etiam proin phasellus a hac sociis condimentum adipiscing tempor
            </p>
          </div>
        </div>

        <div className="ship-item">
          <FaTruck className="ship-icon" />
          <div>
            <p className="LightFontBold" style={{fontSize:"17px"}}>Flexible Shipping</p>
            <p className="LightFont">
              Etiam proin phasellus a hac sociis condimentum adipiscing tempor
            </p>
          </div>
        </div>

        <div className="ship-item">
          <FaCreditCard className="ship-icon" />
          <div>
            <p className="LightFontBold" style={{fontSize:"17px"}}>Payment Methods</p>
            <p className="LightFont">
              Etiam proin phasellus a hac sociis condimentum adipiscing tempor
            </p>
          </div>
        </div>
      </div>

      {/* CENTER IMAGE */}
      <div className="shipping-center">
        <img
          src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d"
          alt="Delivery"
        />

        <div className="overlay">
          <p className="LightFontBigTrack">
            We Send and Track Your <br />
            Order Quickly, Accurately
          </p>
          <p className="LightFont" style={{fontSize:"24px", color:"white"}}>
            It’s content strategy gone awry right from the start. Forswearing
            the use of Lorem Ipsum wouldn’t have helped.
          </p>

          <button className="view-btn">VIEW MORE</button>
        </div>
      </div>

      {/* RIGHT COLUMN */}
      <div className="shipping-right">
        <p className="LightFontBigger">
          Get answers to all your <br />
          questions you might have
        </p>

        <p className="LightFont">
          We will answer any questions you may have about our online sales
          right here. Monday to Friday from 09:00 to 21:00 UTC +2
        </p>

        <button className="contact-btn">CONTACT OUR COMPANY</button>

        <div className="social-icons">
          <FaFacebookF size={32}/>
          <FaXTwitter size={32}/>
          <FaPinterestP size={32}/>
          <FaLinkedinIn size={32}/>
          <FaTelegramPlane size={32}/>
        </div>
      </div>
    </div>
        </div>
        </>
      )}
    </div>
  );
};