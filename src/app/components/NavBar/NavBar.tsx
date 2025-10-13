'use client'
//import Link from "next/link";
import styles from "./NavBar.module.css"

export default function NavBar(){
     const handleScroll = (section: string) => {
    // Dispatch a custom event
    console.log('Scrolling to section:', section);
    window.dispatchEvent(new CustomEvent("scrollToSection", { detail: section }));
  };
    return(
        <nav >
            <ul className={styles.NavBar}>
                <li><a className={styles.NavBarButton} onClick={() => handleScroll("top")}>About</a></li>
                <li><a className={styles.NavBarButton} onClick={() => handleScroll("section1")}>Projects</a></li>
                <li><a className={styles.NavBarButton} onClick={() => handleScroll("section2")}>Skills</a></li>
                <li><a className={styles.NavBarButton} onClick={() => handleScroll("section3")}>Hobbies/Talents</a></li>
                <li><a className={styles.NavBarButton} onClick={() => handleScroll("section4")}>Education</a></li>
                <li><a className={styles.NavBarButton} onClick={() => handleScroll("section5")}>Contact</a></li>
                <li><a className={styles.NavBarButton} onClick={() => handleScroll("section6")}>Resume</a></li>
            </ul>
        </nav>
    )
}