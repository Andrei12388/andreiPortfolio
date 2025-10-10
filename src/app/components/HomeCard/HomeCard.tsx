'use client'

import React, { useState } from "react";
import styles from './HomeCard.module.css';
import Image, { StaticImageData } from "next/image";
import { useRouter } from "next/navigation";

export default function HomeCard({ project }: {
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
  };
}) {
  const router = useRouter();

  const [hoveredImage, setHoveredImage] = useState(project.image);
  const [fading, setFading] = useState(false);
  const [showVideo, setShowVideo] = useState(false);

  function hover(src: string | StaticImageData) {
    setFading(true);
    setTimeout(() => {
      setHoveredImage(src);
      setFading(false);
    }, 200);
  }

  function hoverOut() {
    setFading(true);
    setTimeout(() => {
      setHoveredImage(project.image);
      setFading(false);
    }, 200);
  }

  function hoveredCover() {
    setShowVideo(true);
  }

  function hoveredCoverOut() {
    setShowVideo(false);
  }

  function clickedImage() {
    router.push(`/project/${project.projectID}`);
  }

  return (
    <div>
      <div className={styles.container}>
       <div className={styles.cardLeft}
     onMouseEnter={hoveredCover}
     onMouseLeave={hoveredCoverOut}>
  {/* Video */}
  <video
    className={`${styles.video} ${showVideo ? styles.fadeIn : styles.fadeOut}`}
    width="320"
    height="240"
    autoPlay
    muted
    loop
    onClick={clickedImage}
  >
    <source src={`${project.video}`} type="video/mp4" />
    Your browser does not support the video tag.
  </video>

  {/* Image */}
  <Image
    width={500}
    height={500}
    className={`${styles.image} ${fading ? styles.fadeOut : ""}`}
    src={hoveredImage || project.image}
    onClick={clickedImage}
    alt="Project Image"
  />
</div>


        <div className={styles.cardRight}>
          <h2 className={styles.title}>{project.title}</h2>

          <div className={styles.imageHolder} onMouseLeave={hoverOut}>
            {[project.image1, project.image2, project.image3, project.image4].map((img, idx) => (
              <Image
                key={idx}
                width={500}
                height={500}
                onMouseEnter={() => hover(img)}
                className={styles.imageSmall}
                onClick={clickedImage}
                src={img}
                alt={`Preview ${idx + 1}`}
              />
            ))}
          </div>
            <div className={styles.textContainer}>
            <p className={styles.p}>{project.duration} Development</p>
          <p className={styles.p}>Language: {project.language}</p>
          <div className={styles.p1} onClick={clickedImage}><p  >View Project</p></div>
          
            </div>
        </div>
      </div>
    </div>
  );
}
