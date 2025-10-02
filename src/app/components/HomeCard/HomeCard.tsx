'use client'

import React, { useState } from "react";
import styles from './HomeCard.module.css';
import Image, { StaticImageData } from "next/image";
import { useRouter } from "next/navigation";



export default function HomeCard({project}:{
  
    project: {
        title: string;
        projectID: number;
         image: string | StaticImageData;
        image1: string | StaticImageData;
        image2: string | StaticImageData;
        image3: string | StaticImageData;
        image4: string | StaticImageData;
        duration: string;
        language: string;
    };}){
      const router = useRouter();
      const [hovered, setHovered] = useState(false);
      const [hoveredImage, setHoveredImage] = useState(project.image1);
const [fading, setFading] = useState(false);

  function hover(src: string | StaticImageData) {
    setFading(true);
   
    setTimeout(() => {
      setHoveredImage(src);
       setHovered(true);
      setFading(false); 
    }, 200); 
  }

  function hoverOut() {
    setFading(true);
    
    setTimeout(() => {
      setHovered(false);
      setHoveredImage(project.image1);

      setFading(false);
    }, 200);
  }

  function clickedImage(){
    console.log('Image clicked!');
     router.push(`/project/${project.projectID}`);
  }
    return (
      <div>
    <div className={styles.container}>
      <div className={styles.cardLeft}>
        <Image
             width={500}  
  height={500} 
        className={`${styles.image} ${fading ? styles.fadeOut : ""}`}
      src={hovered ? hoveredImage : project.image}
       onClick={clickedImage}
      alt="Project Image"
    />
      </div>
     
      <div className={styles.cardRight}> 
        <div>
      <h2 className={styles.title}>{project.title}</h2>
        </div>
   
    <div className={styles.imageHolder}
        onMouseLeave={hoverOut}>
     
       <Image
          width={500}  
  height={500} 
       onMouseEnter={() => hover(project.image1)}
       
        className={styles.imageSmall}
         onClick={clickedImage}
      src={project.image1}
      alt="Soma Pic"
    />
    <Image
      width={500}  
  height={500} 
    onMouseEnter={() => hover(project.image2)}
        
        className={styles.imageSmall}
         onClick={clickedImage}
      src={project.image2}
      alt="Soma Pic"
    />
    <Image
         width={500}  
  height={500} 
    onMouseEnter={() => hover(project.image3)}
       
        className={styles.imageSmall}
         onClick={clickedImage}
      src={project.image3}
      alt="Soma Pic"
    />
    <Image
     width={500}  // required
  height={500} // required
    onMouseEnter={() => hover(project.image4)}
       
        className={styles.imageSmall}
         onClick={clickedImage}
      src={project.image4}
      alt="Soma Pic"
    />
    </div>
    <div>
    <p className={styles.p}>{project.duration} Development</p>
    <p className={styles.p}>Language: {project.language}</p>
      </div>
      </div>
</div>
    </div>
    )

}