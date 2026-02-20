import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Carousel from "./Carousel";
import "./App.css"

// Four different animation styles for the carousel
const images = [
  "https://via.placeholder.com/1920x650?text=Image+1",
  "https://via.placeholder.com/1920x650?text=Image+2",
];

export const RollerImage = () => {
  const [current, setCurrent] = useState(0);
  const [animationIndex, setAnimationIndex] = useState(0);

  return (
    <div style={{ width: "100%" }}>
      {/* Carousel Section */}
      <div
        style={{
          position: "relative",
          width: "100%",
          height: "65vh",
          backgroundColor: "yellow",
          overflow: "hidden",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        pp
      </div>
    </div>
  );
};
