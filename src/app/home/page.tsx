'use client'
//import { Metadata } from "next"
import HomeCard from "../components/HomeCard/HomeCard";
import styles from './Home.module.css';

const blankImage = "/images/blank.jpg";

const coinSound = "/audios/coin.mp3";

const psychesImage = "/images/psychesletter.PNG";
const psychesImage1 = "/images/psychesletter1.PNG";
const psychesImage2 = "/images/psychesletter2.PNG";
const psychesImage3 = "/images/psychesletter3.PNG";
const psychesImage4 = "/images/psychesletter4.PNG";
const istritpayter = "/images/istritpayter.PNG";
const istritpayter1 = "/images/istritpayter1.PNG";
const istritpayter2 = "/images/istritpayter2.PNG";
const istritpayter3 = "/images/istritpayter3.PNG";
const istritpayter4 = "/images/istritpayter4.PNG";

const reactProject = "/images/reactProject.PNG";
const react1 = "/images/react1.PNG";
const react2 = "/images/react2.PNG";
const react3 = "/images/react3.PNG";
const react4 = "/images/react4.PNG";

import andreiPic from "./andreiPic.jpg";

const onepiece = "https://kgmutreakokomnvevvbm.supabase.co/storage/v1/object/public/videos/onepiece.mp4";
const lagibini = "https://kgmutreakokomnvevvbm.supabase.co/storage/v1/object/public/videos/lagibini.mp4";
const mist = "https://kgmutreakokomnvevvbm.supabase.co/storage/v1/object/public/videos/mist.mp4";
const sincerely = "https://kgmutreakokomnvevvbm.supabase.co/storage/v1/object/public/videos/sincerely.mp4";
const rubiks = "https://kgmutreakokomnvevvbm.supabase.co/storage/v1/object/public/videos/rubiks.mp4";
const guitarheroxelectric = "https://kgmutreakokomnvevvbm.supabase.co/storage/v1/object/public/videos/guitarheroxelectric.mp4";

const istritpayterVideo = "https://kgmutreakokomnvevvbm.supabase.co/storage/v1/object/public/videos/istritpayterVideo.mp4";
const psychesletterVideo = "https://kgmutreakokomnvevvbm.supabase.co/storage/v1/object/public/videos/psychesletterVideo.mp4";
const reactVideo = "https://kgmutreakokomnvevvbm.supabase.co/storage/v1/object/public/videos/reactVideo.mp4";


const htmlIcon = "/images/icons/html.png";
const cssIcon = "/images/icons/css.png";
const jsIcon = "/images/icons/js.png";
const tsIcon = "/images/icons/ts.png";
const reactIcon = "/images/icons/react.png";
const nextjsIcon = "/images/icons/nextjs.png";

const phpIcon = "/images/icons/php.png";
const mysqlIcon = "/images/icons/mysql.png";
const mongodbIcon = "/images/icons/mongodb.png";
const nodeJSIcon = "/images/icons/nodeJS.png";

const unityIcon = "/images/icons/unity.png";
const flashIcon = "/images/icons/flash.png";
const pythonIcon = "/images/icons/python.png";
const androidIcon = "/images/icons/androidstudio.png";

const photoshopIcon = "/images/icons/photoshop.png";
const canvaIcon = "/images/icons/canva.png";
const graphicsgaleIcon = "/images/icons/graphicsgale.png";
const tailwindIcon = "/images/icons/tailwind.png";
const figmaIcon = "/images/icons/figma.png";

const filmoraIcon = "/images/icons/filmora.png";
const capcutIcon = "/images/icons/capcut.png";
const davinciIcon = "/images/icons/davinci.png";

const emailIcon = "/images/icons/email.png";
const phoneIcon = "/images/icons/phone.png";

const pupImage = "/images/pupLogo.jpg";
const amlacImage = "/images/amlacImage.jpg";

const locationIcon = "/images/icons/location.png";
const experienceIcon = "/images/icons/experience.png";
const languageIcon = "/images/icons/language.png";


import React, { useEffect, useRef, useState } from "react";
import Image, { StaticImageData } from "next/image";

/*export const metadata: Metadata = {
    title: "Home",
}
    */




export default function Home(){
  const section0Ref = useRef<HTMLDivElement | null>(null);
  const section1Ref = useRef<HTMLDivElement | null>(null);
  const section2Ref = useRef<HTMLDivElement | null>(null);
  const section3Ref = useRef<HTMLDivElement | null>(null);
  const section4Ref = useRef<HTMLDivElement | null>(null);
  const section5Ref = useRef<HTMLDivElement | null>(null);

  const [percentShow1, setpercentShow1] = useState(false);
  const [percentShow2, setpercentShow2] = useState(false);
  const [percentShow3, setpercentShow3] = useState(false);

  function percentIn1(){
    setpercentShow1(true);
    playSound();
  }

  function percentOut1(){
    setpercentShow1(false);
  }
  function percentIn2(){
    setpercentShow2(true);
    playSound();
  }

  function percentOut2(){
    setpercentShow2(false);
  }

  function percentIn3(){
    setpercentShow3(true);
    playSound();
  }

  function percentOut3(){
    setpercentShow3(false);
  }

  const hoverSound = useRef<HTMLAudioElement | null>(null);

  const playSound = () => {
    const sound = hoverSound.current;
    if (sound) {
      sound.currentTime = 0;
      sound.volume = 0.2;
      sound.play();
    }
  };

    // refs for videos
  const videoRefs = useRef<HTMLVideoElement[]>([]);
  const [activeVideoIndex, setActiveVideoIndex] = useState<number | null>(null);

  const handleVideoClick = (index: number) => {
  const clickedVideo = videoRefs.current[index];
  if (!clickedVideo) return;

  if (activeVideoIndex !== index) {
    // New video clicked → unmute & mark as active
    videoRefs.current.forEach((video, i) => {
      if (!video) return;
      video.muted = i !== index; // mute all others
    });
    setActiveVideoIndex(index);
  } else {
    // Same video clicked → just toggle mute
    clickedVideo.muted = !clickedVideo.muted;

    // If toggled back to muted, also remove active class
    if (clickedVideo.muted) {
      setActiveVideoIndex(null);
    } else {
      setActiveVideoIndex(index);
    }
  }
};


  useEffect(() => {
    const handler = (e: Event) => {
      const customEvent = e as CustomEvent<string>;
      const section = customEvent.detail;
      

      if (section === "top") {
        window.scrollTo({ top: 0, behavior: "smooth" }); 
      }
      if (section === "section0") {
        section0Ref.current?.scrollIntoView({ behavior: "smooth" });
      }
      if (section === "section1") {
        section1Ref.current?.scrollIntoView({ behavior: "smooth" });
      }
      if (section === "section2") {
        section2Ref.current?.scrollIntoView({ behavior: "smooth" });
      }
      if (section === "section3") {
        section3Ref.current?.scrollIntoView({ behavior: "smooth" });
      }
      if (section === "section4") {
        section4Ref.current?.scrollIntoView({ behavior: "smooth" });
      }
      if (section === "section5") {
        section5Ref.current?.scrollIntoView({ behavior: "smooth" });
      }
    };

    window.addEventListener("scrollToSection", handler);
    return () => window.removeEventListener("scrollToSection", handler);
  }, []);

    const [projectIndex, setProjectIndex] = useState(0);
   
      

    const projectsNum = [
    {projectID: 1, title: "Psyche's Letter", duration: "22 days", active: false, language: "Action Script 2.0", image: psychesImage, image1: psychesImage1, image2: psychesImage2, image3: psychesImage3, image4: psychesImage4, video: psychesletterVideo},
    {projectID: 2,title: "Istrit Payter", duration: "23 days (Still ongoing)", active: false, language: "Html, Css, and Javascript", image: istritpayter, image1: istritpayter1, image2: istritpayter2, image3: istritpayter3, image4: istritpayter4, video: istritpayterVideo},
    {projectID: 3,title: "React Game Website", duration: "3 days", active: false, language: "React Framework/Javascript",image: reactProject, image1: react1, image2: react2, image3: react3, image4: react4, video: reactVideo},
   ]

   function NextIndex() {
  setProjectIndex((prev) => {
    const nextIndex = Math.min(prev + 1, projectsNum.length - 1);
    return nextIndex;
  });
}

function PrevIndex() {
  setProjectIndex((prev) => {
    const nextIndex = Math.max(prev - 1, 0);
    return nextIndex;
  });
}


    return (
        <div className={styles.body} ref={section0Ref}>
            <div className={styles.bio} >
                <div className={styles.imageHolder}>
                     <Image
                        
                          src={andreiPic}
                          alt="AndreiPic"
                        />
                </div>
                <div className={styles.bioText}>
         <h1 className={styles.pageText}>Hi! I&apos;m <span className={styles.span}>Robert Andrei Bardoquillo</span> from Quezon City Philippines, an ICT Education graduate from the Polytechnic University of the Philippines. I have a strong passion for games, animations, and software development, and I am continuously developing my programming skills. 
          </h1>
        </div>
        <div className={styles.bioText}>
         <h1 className={styles.pageText}>Although I did not pursue a formal IT degree, I have been self-taught in coding since <span className={styles.span}>2025</span>, driven by my long-time dream of becoming a programmer. This website showcases my projects along with a few of my personal hobbies, reflecting both my creativity and dedication to lifelong learning.</h1>
        </div>
        <section ref={section1Ref}></section>
    </div>
    
    <h1 className={styles.pageTitle} > Andrei&apos;s Projects</h1>
    
    <div className={styles.container}>
          <div> <button
  className={styles.button}
  onClick={PrevIndex}
  disabled={projectIndex === 0}
>
  ←
</button></div>
        {projectsNum.length > 0 && (
  <HomeCard project={projectsNum[`${projectIndex}`]} key={projectsNum[`${projectIndex}`].projectID} />
)}
  <div>
        <button
  className={styles.button}
  onClick={NextIndex}
  disabled={projectIndex === projectsNum.length - 1}
>
  →
</button>
        </div>

    </div>
    <div >
      <section ref={section2Ref}></section>
                <div>
                     <br></br>
                     <br></br>
                </div>
                <h1 className={styles.pageTitle} > Skills </h1>
                <div className={styles.skillsContainer}>
                  Front End
                  <div className={styles.skillsContainerCategory}>
                    
            <div className={styles.skills}>
              <Image
                  width={100}  
  height={100} 
              className={styles.icon}
                          src={htmlIcon}
                          alt="icon"
                        />
           Html
         </div>
         <div className={styles.skills}>
          <Image
           width={100}  
  height={100} 
              className={styles.icon}
                          src={cssIcon}
                          alt="icon"
                        />
           Css
         </div>
          <div className={styles.skills}>
            <Image
                width={100}  
  height={100} 
              className={styles.icon}
                          src={jsIcon}
                          alt="icon"
                        />
           Javascript
         </div>
          <div className={styles.skills}>
            <Image
                width={100}  
  height={100} 
              className={styles.icon}
                          src={tsIcon}
                          alt="icon"
                        />
           Typescript
         </div>
          <div className={styles.skills}>
            <Image
                 width={100}  
  height={100} 
              className={styles.icon}
                          src={reactIcon}
                          alt="icon"
                        />
           React
         </div>
         <div className={styles.skills}>
          <Image
              width={100}  
  height={100} 
              className={styles.icon}
                          src={nextjsIcon}
                          alt="icon"
                        />
           NextJs
         </div>
                  </div>
                  Back End
                  <div className={styles.skillsContainerCategory}>
                    
                    <div className={styles.skills}>
                      <Image
                           width={100}  
  height={100} 
              className={styles.icon}
                          src={phpIcon}
                          alt="icon"
                        />
           Php
         </div>
          <div className={styles.skills}>
            <Image
               width={100}  
  height={100} 
              className={styles.icon}
                          src={mysqlIcon}
                          alt="icon"
                        />
           Mysql
         </div>
          <div className={styles.skills}>
            <Image
                 width={100}  
  height={100} 
              className={styles.icon}
                          src={mongodbIcon}
                          alt="icon"
                        />
           MongoDb
         </div>
         <div className={styles.skills}>
            <Image
                 width={100}  
  height={100} 
              className={styles.icon}
                          src={nodeJSIcon}
                          alt="icon"
                        />
           NodeJs
         </div>
                  </div>
                   App and Game Development
                  <div className={styles.skillsContainerCategory}>
                    
                    <div className={styles.skills}>
                      <Image
                           width={100}  
  height={100} 
              className={styles.icon}
                          src={unityIcon}
                          alt="icon"
                        />
           Unity
         </div>
          <div className={styles.skills}>
            <Image
                width={100}  
  height={100} 
              className={styles.icon}
                          src={flashIcon}
                          alt="icon"
                        />
           Adobe Flash (Action Script 2.0)
         </div>
          <div className={styles.skills}>
            <Image
                 width={100}  
  height={100} 
              className={styles.icon}
                          src={jsIcon}
                          alt="icon"
                        />
           Javascript
         </div>
         <div className={styles.skills}>
          <Image
              width={100}  
  height={100} 
              className={styles.icon}
                          src={pythonIcon}
                          alt="icon"
                        />
           Python
         </div>
         <div className={styles.skills}>
          <Image
             width={100}  
  height={100} 
              className={styles.icon}
                          src={androidIcon}
                          alt="icon"
                        />
           Android Studio
         </div>
                  </div>
                  Design and Styling
                  <div className={styles.skillsContainerCategory}>
                    
                    <div className={styles.skills}>
                      <Image
                          width={100}  
  height={100} 
              className={styles.icon}
                          src={photoshopIcon}
                          alt="icon"
                        />
           Photoshop
         </div>
          <div className={styles.skills}>
            <Image
                width={100}  
  height={100} 
              className={styles.icon}
                          src={canvaIcon}
                          alt="icon"
                        />
           Canva
         </div>
          <div className={styles.skills}>
            <Image
                width={100}  
  height={100} 
              className={styles.icon}
                          src={graphicsgaleIcon}
                          alt="icon"
                        />
           Graphics Gale
         </div>
         <div className={styles.skills}>
          <Image
               width={100}  
  height={100} 
              className={styles.icon}
                          src={tailwindIcon}
                          alt="icon"
                        />
           Tailwind
         </div>
         <div className={styles.skills}>
          <Image
              width={100}  
  height={100} 
              className={styles.icon}
                          src={figmaIcon}
                          alt="icon"
                        />
           Figma
         </div>
         </div>
          Video Editing
                  <div className={styles.skillsContainerCategory}>
                    
                    <div className={styles.skills}>
                      <Image
                          width={100}  
  height={100} 
              className={styles.icon}
                          src={filmoraIcon}
                          alt="icon"
                        />
           Filmora
         </div>
          <div className={styles.skills}>
            <Image
                width={100}  
  height={100} 
              className={styles.icon}
                          src={capcutIcon}
                          alt="icon"
                        />
           CapCut
         </div>
          <div className={styles.skills}>
            <Image
                width={100}  
  height={100} 
              className={styles.icon}
                          src={davinciIcon}
                          alt="icon"
                        />
           Da Vinci Resolve
         </div>
         
         </div>
        
         <div><h1 className={styles.pageTitle}>Skills Proficieny</h1>
            <audio ref={hoverSound} src={coinSound} preload="auto"></audio>
         <div>
          <p>Frontend/Design</p>
          <div className="flex flex-column">
          <div className={styles.skillBar}
          onMouseEnter={percentIn1}
             onMouseLeave={percentOut1}
          >
            <div className={styles.skillMeter1}
             > </div> 
          </div>
          <span className={`${styles.percentText} ${percentShow1 ? styles.fadeIn : styles.fadeOut}`}>90%</span>
          </div>
          </div>

          <div>
          <p>Backend</p>
          <div className="flex flex-column">
          <div className={styles.skillBar}
           onMouseEnter={percentIn2}
             onMouseLeave={percentOut2}
          >
            <div className={styles.skillMeter2} 
            > </div> 
          </div>
          <span className={`${styles.percentText} ${percentShow2 ? styles.fadeIn : styles.fadeOut}`}>30%</span>
          </div>
          </div>

          <div>
          <p>Game Development</p>
          <div className="flex flex-column">
          <div className={styles.skillBar}
          onMouseEnter={percentIn3}
             onMouseLeave={percentOut3}
          >
            <div className={styles.skillMeter3}
            > </div> 
          </div>
          <span className={`${styles.percentText} ${percentShow3 ? styles.fadeIn : styles.fadeOut}`}>85%</span>
          </div>
          </div>

          </div>
        </div>
        
    </div>
    <div>
      <section ref={section3Ref}></section>
                <div>
                  <br></br>
                  <br></br>
                      <h1 className={styles.pageTitle} > Hobbies/Talents </h1>
                      
                </div>
                <div className={styles.videoContainer}>
        {[lagibini, onepiece,
          mist,  sincerely, rubiks, guitarheroxelectric
        ].map((src, index) => (
          <video
            key={src}
            ref={(el) => {
              if (el) videoRefs.current[index] = el;
            }}
            className={`${styles.video} ${activeVideoIndex === index ? styles.active : ""}`}
            width="320"
            height="240"
            
            autoPlay
            muted
            loop
            onClick={() => handleVideoClick(index)}
          >
            <source src={`${src}`} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        ))}
      </div>
                <br></br>
                      <br></br>
                      <br></br>
                    <br></br>
                      <br></br>
                      <br></br>
               
    </div>
    <div>
      <section ref={section4Ref}></section>
                <div>
                  <br></br>
                  <br></br>
                      <h1 className={styles.pageTitle} > Education </h1>
                </div>
                <div className={styles.educationContainer}>
                  <div className={styles.educationDetails}> 
                    <Image
                width={100}  
                 height={100} 
              className={styles.schoolImage}
                          src={pupImage}
                          alt="school"
                        />
                    <h1 className={styles.educationTitle}>Polytechnic University of the Philippines (Quezon City Branch)</h1>
                    <h1 className={styles.educationCourse}>Bachelor of Business Technology and Livelihood Education major in Information Communication and Technology (BTLEDICT)</h1>
                    <p>2020 - 2024</p>
                    <p>Graduated with Latin Honor (Cum Laude)</p>
                    </div>
                  <div className={styles.educationDetails}> 
                    <Image
                width={100}  
                 height={100} 
              className={styles.schoolImage}
                          src={amlacImage}
                          alt="school"
                        />
                    <h1 className={styles.educationTitle}>Justice Cecilia Munoz Palma Senior High School</h1>
                    <h1 className={styles.educationCourse}>Information and Communication Technology - Animation</h1>
                    <p>2018 - 2020</p>
                    <p>Graduated with Honor</p>
                    </div>
                </div>
                <br></br>
                      <br></br>
                      <br></br>
                    <br></br>
                      <br></br>
                      <br></br>
               
    </div>
    <div>
      <section ref={section5Ref}></section>
                <div>
                  <br></br>
                  <br></br>
                      
                </div>
                <br></br>
                <div className={styles.contactPage}>
                  
                <div className={styles.contactsContainer}>
                  <h1 className={styles.pageTitle} > Contacts </h1>
                    <p className={styles.contacts}>
                      <Image
                          width={25}  
                   height={25} 
              className={styles.icon}
                          src={emailIcon}
                          alt="icon"
                        />
                        <a href="mailto:robertandreib.up@gmail.com">Email: robertandreib.up@gmail.com</a>
                    
                    </p>
                    
                  
                    <p className={styles.contacts}>
                      <Image
                          width={25}  
                           height={25} 
              className={styles.icon}
                          src={phoneIcon}
                          alt="icon"
                        />
                        <a href="tel:09938321827">Phone Number: 09938321827</a>
                    
                    </p>
                </div>

                <div className={styles.selfInfoContainer}>

                  <div className={styles.contactCard}>
                    <p className={styles.contactsText}>
                      <Image
                          width={25}  
                   height={25} 
              className={styles.icon}
                          src={languageIcon}
                          alt="icon"
                        />
                        <p className={styles.pTitle}>Language</p>
                        <p>English, Filipino</p>
                    
                    </p>
                    </div>
                    
                  <div className={styles.contactCard}>
                    <p className={styles.contactsText}>
                      <Image
                          width={25}  
                           height={25} 
              className={styles.icon}
                          src={locationIcon}
                          alt="icon"
                        />
                        <p className={styles.pTitle}>From</p>
                        <p>Quezon City, Philippins</p>
                    
                    </p>
                    </div>

                    <div className={styles.contactCard}>
                    <p className={styles.contactsText}>
                      <Image
                          width={25}  
                           height={25} 
              className={styles.icon}
                          src={experienceIcon}
                          alt="icon"
                        />
                        <p className={styles.pTitle}>Experience</p>
                        <p>KnK Philippines (Admin Staff 6 Months)</p>
                    
                    </p>
                    </div>
                </div>
                </div>
                
                <br></br>
                      <br></br>
                      <br></br>
                    <br></br>
                      <br></br>
                      <br></br>
               
    </div>
    <div className={styles.circleGlow1}></div>
    <div className={styles.circleGlow2}></div>
    <div className={styles.circleGlow3}></div>
    <div className={styles.circleGlow4}></div>
    <div className={styles.circleGlow5}></div>
    <div className={styles.circleGlow6}></div>
    <div className={styles.circleGlow7}></div>
   
    </div>
    );
}