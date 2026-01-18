import Image from 'next/image'
import styles from './Footer.module.css'
import facebookIcon from "./facebook.png";
import instagramIcon from "./instagram.png";
import tiktokIcon from "./tiktok.png";
import githubIcon from "./github.png";
import youtubeIcon from "./youtube.png";

export default function Footer(){
    return <div className={styles.card}>
        <h1 className="text-white-300 ml-10">©2026 Robert Andrei Bardoquillo/All Rights Reserved</h1>
        <div className={styles.iconHolder}>
    <a href="https://www.facebook.com/robertandrei.bardoquillo" target="_blank" rel="noopener noreferrer">
  <Image
    width={100}
    height={100}
    className={styles.icon}
    src={facebookIcon}
    alt="Facebook icon"
  />
</a>

<a href="https://instagram.com/Andreibardoquillo" target="_blank" rel="noopener noreferrer">
  <Image
    width={100}
    height={100}
    className={styles.icon}
    src={instagramIcon}
    alt="Instagram icon"
  />
</a>

<a href="https://www.tiktok.com/@.alyaskulot" target="_blank" rel="noopener noreferrer">
  <Image
    width={100}
    height={100}
    className={styles.icon}
    src={tiktokIcon}
    alt="TikTok icon"
  />
</a>

<a href="https://github.com/Andrei12388" target="_blank" rel="noopener noreferrer">
  <Image
    width={100}
    height={100}
    className={styles.icon}
    src={githubIcon}
    alt="GitHub icon"
  />
</a>
<a href="https://www.youtube.com/@robertbardoquillo5356" target="_blank" rel="noopener noreferrer">
  <Image
    width={100}
    height={100}
    className={styles.icon}
    src={youtubeIcon}
    alt="GitHub icon"
  />
</a>

        </div>
        
                 </div>
        
}