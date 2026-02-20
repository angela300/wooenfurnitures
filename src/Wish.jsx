import React from "react";
import { useWish } from "./WishContext";

export const Wish = () => {
  const { wishItems, removeFromWish } = useWish();

  return (
    <div style={{ padding: "40px" }}>
      <h2>Wishlist</h2>

      {wishItems.length === 0 && <p>No items added.</p>}

      <div style={{ display: "flex", gap: "20px" }}>
        {wishItems.map((item, index) => (
          <div
            key={index}
            style={{
              border: "1px solid #ddd",
              padding: "20px",
              cursor: "pointer"
            }}
            onClick={() => removeFromWish(item.title)}
          >
            <img
              src={item.img}
              alt={item.title}
              style={{ width: "200px", height: "150px", objectFit: "cover" }}
            />
            <h4>{item.title}</h4>
            <p>KSh {item.newPrice}</p>
          </div>
        ))}
      </div>
    </div>
  );
};