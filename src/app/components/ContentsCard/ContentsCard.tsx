'use client'
import React, { useState } from "react";
import styles from "./ContentsCard.module.css";
import Image, { StaticImageData } from "next/image";

type ProjectProps = {
  title: string;
  projectID: number;
  image: string | StaticImageData;
  image1: string | StaticImageData;
  image2: string | StaticImageData;
  image3: string | StaticImageData;
  image4: string | StaticImageData;
  duration: string;
  language: string;
  genre: string;
  relDate: string;
  fileSize: string;
  mirrors: string;
  video: string | StaticImageData;
  description1: string;
  description2: string;
};

export default function ContentsCard({ project }: { project: ProjectProps }) {
  const [activeTab, setActiveTab] = useState("Description");

  const navItems = [
    "Description",
    "Screenshots",
    "System Requirements",
    "Install Notes",
    "Links",
  ];

  return (
    <>
      {/* Bottom Navigation */}
      <div className={styles.containerBottom}>
        {navItems.map((nav) => (
          <div
            key={nav}
            className={`${styles.bottomNav} ${
              activeTab === nav ? styles.active : ""
            }`}
            onClick={() => setActiveTab(nav)}
          >
            {nav}
          </div>
        ))}
      </div>

      {/* Content Box */}
      <div className={styles.bottomBox}>
        {activeTab === "Description" && (
          <div className={styles.bottomBoxContent}>
            
            <p>{project.description1}</p>
            <br></br>
            <p>{project.description2}</p>
          </div>
        )}

        {activeTab === "Screenshots" && (
          <div className={styles.bottomBoxContent}>
            <div className={styles.screenshots}>
                
              <Image src={project.image1} alt="Screenshot 1" width={700} height={160} />
              <Image src={project.image2} alt="Screenshot 2" width={700} height={160} />
              <Image src={project.image3} alt="Screenshot 3" width={700} height={160} />
              <Image src={project.image4} alt="Screenshot 4" width={700} height={160} />
              
            </div>
          </div>
        )}

        {activeTab === "System Requirements" && (
          <div className={styles.bottomBoxContent}>
            <p>System Requirements Content 3</p>
          </div>
        )}

        {activeTab === "Install Notes" && (
          <div className={styles.bottomBoxContent}>
            <p>Install Notes Content 4</p>
          </div>
        )}

        {activeTab === "Links" && (
          <div className={styles.bottomBoxContent}>
            <p>Mirrors / Links:</p>
            <a href={project.mirrors} target="_blank" rel="noopener noreferrer">
              {project.mirrors}
            </a>
          </div>
        )}
      </div>
    </>
  );
}
