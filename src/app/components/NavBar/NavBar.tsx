'use client'

import { useEffect, useState } from "react";
import styles from "./NavBar.module.css"

export default function NavBar() {
  const [active, setActive] = useState("section0");

  const sections = [
    "section0",
    "section1",
    "section2",
    "section3",
    "section4",
    "section5",
    "section6",
  ];

  // ✅ click scroll
  const handleScroll = (section: string) => {
    console.log("🟦 CLICK → scrollToSection:", section);

    setActive(section);

    window.dispatchEvent(
      new CustomEvent("scrollToSection", { detail: section })
    );
  };

  // 🔥 observe visible section
  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    console.log("👀 Nav observer mounted");

    sections.forEach((id) => {
      const el = document.querySelector(`[data-section="${id}"]`);

      if (!el) {
        console.log("❌ Section NOT FOUND:", id);
        return;
      }

      console.log("✅ Observing section:", id);

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            console.log("🟢 ACTIVE SECTION:", id);
            setActive(id);
          }
        },
        {
          threshold: 0.5,
        }
      );

      observer.observe(el);
      observers.push(observer);
    });

    return () => {
      console.log("🧹 Cleaning observers");
      observers.forEach((o) => o.disconnect());
    };
  }, []);

  // ✅ log whenever active changes
  useEffect(() => {
    console.log("⭐ Current active =", active);
  }, [active]);

  const btn = (id: string, label: string) => (
    <li>
      <a
        onClick={() => handleScroll(id)}
        className={`${styles.NavBarButton} ${
          active === id ? styles.NavBarButtonActive : ""
        }`}
      >
        {label}
      </a>
    </li>
  );

  return (
    <nav>
      <ul className={styles.NavBar}>
        {btn("section0", "About")}
        {btn("section1", "Projects")}
        {btn("section2", "Skills")}
        {btn("section3", "Hobbies/Talents")}
        {btn("section4", "Education")}
        {btn("section5", "Contacts/Resume")}
        {btn("section6", "Commisions")}
      </ul>
    </nav>
  );
}
