"use client";
import { useState, useEffect } from "react";
import styles from "./Cursor.module.css";

export default function CustomCursor() {
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [isPointer, setIsPointer] = useState(false);
  const [isClicking, setIsClicking] = useState(false);

  useEffect(() => {
    const handleMove = (e: MouseEvent) =>
      setPos({ x: e.clientX, y: e.clientY });

    const handleOver = (e: MouseEvent) => {
      const el = e.target as HTMLElement | null;
      if (!el) return;

      if (
        el.tagName === "A" ||
        el.tagName === "IMG" ||
        el.tagName === "SPAN" ||
        el.tagName === "BUTTON" ||
        el.getAttribute("role") === "button" ||
        typeof (el as HTMLElement).onclick === "function" ||
        typeof (el as HTMLElement).onmouseenter === "function"
      ) {
        setIsPointer(true);
      }
    };

    const handleOut = () => setIsPointer(false);
    const handleDown = () => setIsClicking(true);
    const handleUp = () => setIsClicking(false);

    window.addEventListener("mousemove", handleMove);
    window.addEventListener("mouseover", handleOver);
    window.addEventListener("mouseout", handleOut);
    window.addEventListener("mousedown", handleDown);
    window.addEventListener("mouseup", handleUp);

    return () => {
      window.removeEventListener("mousemove", handleMove);
      window.removeEventListener("mouseover", handleOver);
      window.removeEventListener("mouseout", handleOut);
      window.removeEventListener("mousedown", handleDown);
      window.removeEventListener("mouseup", handleUp);
    };
  }, []);

  return (
    <>
      <div
        className={`${styles.cursor} ${isPointer ? styles.pointer : ""} ${
          isClicking ? styles.click : ""
        }`}
        style={{
          zIndex: 1000,
          top: pos.y,
          left: pos.x,
          transform: "translate(-50%, -50%)",
        }}
      />
      <div
        className={`${styles.cursorBorder} ${
          isPointer ? styles.pointerBorder : ""
        } ${isClicking ? styles.clickBorder : ""}`}
        style={{
          zIndex: 1000,
          top: pos.y,
          left: pos.x,
          transform: "translate(-50%, -50%)",
        }}
      />
    </>
  );
}
