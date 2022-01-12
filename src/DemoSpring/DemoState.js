import React, { useState } from "react";

const giftArr = [`Dota2`, `League of Legend`, `CounterStrike`];

export default function DemoState() {
  const [gift, setGift] = useState();
  const handleGift = () => {
    const index = Math.floor(Math.random() * 3);
    setGift(giftArr[index]);
  };

  return (
    <div style={{ padding: 30 }}>
      <h1>{gift || "Chọn Game"}</h1>
      <button onClick={handleGift}>Chọn Game!</button>
    </div>
  );
}
