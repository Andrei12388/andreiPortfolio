'use client'
import React, { useState } from "react";
import styles from "./ContentsCard.module.css";
import Image, { StaticImageData } from "next/image";
import { useRouter } from "next/navigation";

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
  installnote1?: string;
  installnote2?: string;
  installnote3?: string;
  installnote4?: string;
  installnote5?: string;
  link1?: string;
  link2?: string;
  link3?: string;
  link4?: string;
  link5?: string;
  linknote?: string;
  sysreq1?: string;
  sysreq2?: string;
  sysreq3?: string;
  sysreq4?: string;
  sysreq5?: string;
  description1?: string;
  description2?: string;
  description3?: string;
  description4?: string;
  description5?: string;
  description6?: string;
  description7?: string;
  description8?: string;
  description9?: string;
  description10?: string;
  description11?: string;
};

export default function ContentsCard({ project }: { project: ProjectProps }) {
  const [activeTab, setActiveTab] = useState("Description");

  const router = useRouter();

  const navItems = [
    "Description",
    "Screenshots",
    "System Requirements",
    "Install Notes",
    "Links",
  ];

  function goBack() {
    router.push(`/home`);
  }

  // ✅ Combine all non-null descriptions into an array
  const descriptions = [
    project.description1,
    project.description2,
    project.description3,
    project.description4,
    project.description5,
    project.description6,
    project.description7,
    project.description8,
    project.description9,
    project.description10,
    project.description11,
  ].filter((desc): desc is string => !!desc);

  const systemreq = [
    project.sysreq1,
    project.sysreq2,
    project.sysreq3,
    project.sysreq4,
    project.sysreq5,
  ].filter((sysreq): sysreq is string => !!sysreq);

  const linklist = [
    project.link1,
    project.link2,
    project.link3,
    project.link4,
    project.link5,
  ].filter((link): link is string => !!link);

  const installnotes = [
    project.installnote1,
    project.installnote2,
    project.installnote3,
    project.installnote4,
    project.installnote5,
  ].filter((installnote): installnote is string => !!installnote);

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
            {/* ✅ Automatically adds <br> between non-null paragraphs */}
            {descriptions.map((desc, index) => (
              <React.Fragment key={index}>
                <p>{desc}</p>
                {index < descriptions.length - 1 && <br />}
              </React.Fragment>
            ))}
          </div>
        )}

        {activeTab === "Screenshots" && (
          <div className={styles.bottomBoxContent}>
            <div className={styles.screenshots}>
              <Image src={project.image} alt="Screenshot 1" width={700} height={160} />
              <Image src={project.image1} alt="Screenshot 2" width={700} height={160} />
              <Image src={project.image2} alt="Screenshot 3" width={700} height={160} />
              <Image src={project.image3} alt="Screenshot 4" width={700} height={160} />
              <Image src={project.image4} alt="Screenshot 5" width={700} height={160} />
            </div>
          </div>
        )}

        {activeTab === "System Requirements" && (
          <div className={styles.bottomBoxContent}>
            <p>Minimum Requirements:</p>
            <br></br>
            {systemreq.map((sysreq, index) => (
              <React.Fragment key={index}>
                <p>* {sysreq}</p>
                
              </React.Fragment>
            ))}
          </div>
        )}

        {activeTab === "Install Notes" && (
          <div className={styles.bottomBoxContent}>
            {installnotes.map((installnote, index) => (
              <React.Fragment key={index}>
                <p>- {installnote}</p>
                {index < installnotes.length - 1 && <br />}
              </React.Fragment>
            ))}
          </div>
        )}

        {activeTab === "Links" && (
          <div className={styles.bottomBoxContent}>
            <p>Mirrors / Links:</p>
            <p>{project.linknote}</p>
            <br></br>
            <div className={styles.linkbox}>
              {linklist.map((link, index) => (
              <React.Fragment key={index}>
                <div className={styles.linkContainer}>
                <a href={link} target="_blank" rel="noopener noreferrer" className={styles.link}> Link {index + 1} </a>
                </div>
              </React.Fragment>
            ))}
           </div>
          </div>
        )}
      </div>
      <p className={styles.goBack} onClick={goBack}>Go Back</p>
    </>
  );
}
