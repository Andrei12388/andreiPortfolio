"use client"; // 👈 very important if you’re using Next.js App Router

import React, { useEffect, useRef, useState } from "react";
import "./FadeSection.module.css"; // or use a module: import styles from "./fade.module.css"

const FadeInSection = ({ children }: { children: React.ReactNode }) => {
  const ref = useRef<HTMLDivElement | null>(null);
  const [isVisible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setVisible(entry.isIntersecting),
      { threshold: 0.2 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`fade-section ${isVisible ? "visible" : ""}`}
    >
      {children}
    </div>
  );
};

export default FadeInSection;
