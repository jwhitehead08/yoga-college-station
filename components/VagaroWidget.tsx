"use client";
import { useEffect, useRef } from "react";

export default function VagaroWidget() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ref.current) return;
    const script = document.createElement("script");
    script.type = "text/javascript";
    script.src =
      "https://www.vagaro.com//resources/WidgetWindowLoader/OZqqD3asCpScT3qmV35y6RuRFXoSlXYO61Ctdg4tjxMG9pUxapkUcvCu7gevEhAJDXwQ4pcUbfYJExcUc9aO6vgRW?v=fBUSsdPDYRiMTgJmkU7SN4Kn4pIv8STj8rQh2i2SSU4#";
    ref.current.appendChild(script);
  }, []);

  return (
    <div
      ref={ref}
      className="vagaro"
      style={{
        width: "250px",
        padding: 0,
        border: 0,
        margin: "0 auto",
        textAlign: "center",
        fontSize: "14px",
        color: "#AAA",
      }}
    />
  );
}
