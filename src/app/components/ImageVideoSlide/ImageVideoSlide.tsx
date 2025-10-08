'use client'
import React, { useState } from "react";
import styles from "./ImageVideoSlide.module.css"
import Image, { StaticImageData } from "next/image";

export default function ImageVideoSlide({ project }: {
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
    video: string | StaticImageData;
    genre: string;
    relDate: string;
    fileSize: string;
    mirrors: string;
  };
}){
    const [showVideo, setShowVideo] = useState(false);
    const [fading, setFading] = useState(false);
      function hoveredCover() {
        setShowVideo(true);
      }
    
      function hoveredCoverOut() {
        setShowVideo(false);
      }
    return (
        <>
    <div
      className={styles.videoContainer}
       onMouseEnter={hoveredCover}
     onMouseLeave={hoveredCoverOut}
      >
      <video
    className={`${styles.video} ${showVideo ? styles.fadeIn : styles.fadeOut}`}
    width="320"
    height="240"
    autoPlay
    muted
    loop
  >
    <source src={`${project.video}`} type="video/mp4" />
    Your browser does not support the video tag.
  </video>

  {/* Image */}
  <Image
 
    width={500}
    height={500}
    className={`${styles.image} ${fading ? styles.fadeOut : ""}`}
    src={project.image}
    alt="Project Image"
  />
      </div>
      </>
    );
}