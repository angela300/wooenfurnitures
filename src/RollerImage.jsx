import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const slides = [
  {
    img: "https://images.unsplash.com/photo-1549187774-b4e9b0445b41?auto=format&fit=crop&w=1920&q=80",
    title: "Modern Luxury Sofas",
    subtitle: "Designed for comfort. Crafted for elegance."
  },
  {
    img: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1920&q=80",
    title: "Premium Bedroom Sets",
    subtitle: "Relax in timeless sophistication."
  },
  {
    img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1920&q=80",
    title: "Elegant Dining Collections",
    subtitle: "Where style meets function."
  }
];

export const RollerImage = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div style={{ width: "100%" }}>
      <div
        style={{
          position: "relative",
          width: "100%",
          height: "70vh",
          overflow: "hidden",
          backgroundColor: "#000"
        }}
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.9 }}
            style={{
              position: "absolute",
              width: "100%",
              height: "100%"
            }}
          >
            {/* Background Image with Slow Zoom */}
            <motion.img
              src={slides[current].img}
              alt="slide"
              initial={{ scale: 1.05 }}
              animate={{ scale: 1 }}
              transition={{ duration: 5 }}
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover"
              }}
            />

            {/* Soft Gradient Overlay */}
            <div
              style={{
                position: "absolute",
                inset: 0,
                background:
                  "linear-gradient(to bottom, rgba(0,0,0,0.4), rgba(0,0,0,0.6))"
              }}
            />

            {/* Content */}
            <div
              style={{
                position: "absolute",
                inset: 0,
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                color: "white",
                textAlign: "center",
                padding: "20px"
              }}
            >
              <motion.h1
                initial={{ y: 40, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.5 }}
                style={{
                  fontSize: "48px",
                  fontWeight: 700,
                  letterSpacing: "1px",
                  marginBottom: "15px",
                  textShadow: "0 6px 20px rgba(0,0,0,0.4)"
                }}
              >
                {slides[current].title}
              </motion.h1>

              <motion.p
                initial={{ y: 40, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.7}}
                style={{
                  fontSize: "18px",
                  maxWidth: "600px",
                  marginBottom: "30px",
                  opacity: 0.9
                }}
              >
                {slides[current].subtitle}
              </motion.p>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Indicator Dots */}
        <div
          style={{
            position: "absolute",
            bottom: "20px",
            width: "100%",
            display: "flex",
            justifyContent: "center",
            gap: "10px"
          }}
        >
          {slides.map((_, index) => (
            <div
              key={index}
              onClick={() => setCurrent(index)}
              style={{
                width: current === index ? "30px" : "10px",
                height: "10px",
                background: "white",
                opacity: current === index ? 1 : 0.5,
                borderRadius: "20px",
                cursor: "pointer",
                transition: "0.3s ease"
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
};