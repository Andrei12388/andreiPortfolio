'use client'
import React from "react";
import styles from "./AddToCard.module.css"

const AddToCart = () => {
    return (
        <div>
            <button className={styles.button} onClick={() => console.log('Click')}>Add to Cart</button>
        </div>
    ) 
}

export default AddToCart