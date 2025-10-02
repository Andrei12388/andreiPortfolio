'use client';

import Image from "next/image";
import logo from "./Logo.png";
import styles from "./Logo.module.css";
import Link from "next/link";

export default function Logo(){
   function logoClick(){
    
    console.log('logo clicked!');
   }
    return (
        <div className={styles.logo}>
            <Link href="/home"><Image src={logo} alt="Logo picture" width={100} height={30} onClick={logoClick}></Image></Link>
    
        </div>
)
    }