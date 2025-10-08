
import { Metadata } from "next";
import styles from './Project.module.css';
import ImageVideoSlide from "../../components/ImageVideoSlide/ImageVideoSlide";
import ContentsCard from "../../components/ContentsCard/ContentsCard";

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

const istritpayterVideo = "https://7hlyo4xr2dlueknz.public.blob.vercel-storage.com/istritpayterVideo.mp4";
const psychesletterVideo = "https://7hlyo4xr2dlueknz.public.blob.vercel-storage.com/psychesletterVideo.mp4";
const blankImage = "/images/blank.jpg";

const projectsNum = [
  {
    projectID: 1,
    title: "Psyche's Letter",
    duration: "22 days",
    active: false,
    language: "Action Script 2.0",
    image: psychesImage,
    date: "July 2023",
    genre: "Educational Game",
    relDate: "August 2023",
    fileSize: "127 MB",
    mirrors: "github",
    video: psychesletterVideo,
    image1: psychesImage1,
    image2: psychesImage2,
    image3: psychesImage3,
    image4: psychesImage4,
  },
  {
    projectID: 2,
    title: "Istrit Payter",
    duration: "23 days",
    active: false,
    language: "Html, Css, and Javascript",
    image: istritpayter,
    date: "September 2025",
    genre: "Web-based/Mobile Game",
    relDate: "Coming soon",
    fileSize: "145 MB",
    mirrors: "itch.io, github",
    video: istritpayterVideo,
    image1: istritpayter1,
    image2: istritpayter2,
    image3: istritpayter3,
    image4: istritpayter4,
  },
  {
    projectID: 3,
    title: "Game Website with API",
    duration: "3 days",
    active: false,
    language: "",
    genre: "",
    relDate: "",
    fileSize: "",
    mirrors: "",
    video: "",
    image: blankImage,
    image1: "",
    image2: "",
    image3: "",
    image4: "",
    date: "2020",
  },
  {
    projectID: 4,
    title: "Next Js Project",
    duration: "5 days",
    active: false,
    language: "",
    genre: "",
    relDate: "",
    fileSize: "",
    mirrors: "",
    video: "",
    image: blankImage,
    image1: "",
    image2: "",
    image3: "",
    image4: "",
    date: "2020",
  },
  {
    projectID: 5,
    title: "Sample Project",
    duration: "5 days",
    active: false,
    language: "",
    genre: "",
    relDate: "",
    fileSize: "",
    mirrors: "",
    video: "",
    image: blankImage,
    image1: "",
    image2: "",
    image3: "",
    image4: "",
    date: "2020",
  },
  {
    projectID: 6,
    title: "Sample Project 2",
    duration: "5 days",
    active: false,
    language: "",
    genre: "",
    relDate: "",
    fileSize: "",
    mirrors: "",
    video: "",
    image: blankImage,
    image1: "",
    image2: "",
    image3: "",
    image4: "",
    date: "2020",
  },
  ];
  
type Props = {
  params: Promise<{
    projectId: string; // ✅ still a string, but wrapped in Promise
  }>;
};

export const generateMetadata = async ({ params }: Props): Promise<Metadata> => {
  const { projectId } = await params; // 👈 await the promise
  const projectNum:number = Number(projectId);
  const projectTitle  = projectsNum[projectNum-1].title;
  const id = Number(projectId);
  

  if (!Number.isInteger(id)) {
    return { title: "Project not found" };
  }

  const title = await new Promise<string>((resolve) => {
    setTimeout(() => resolve(`${projectTitle}`), 100);
  });

  return { title: `${title} by Andrei` };
};

export default async function ProductId({ params }: Props) {
  const { projectId } = await params; // 👈 await the promise
  const id = Number(projectId);

  

  if (!Number.isInteger(id) || id < 1 || id > projectsNum.length) {
    return <>
    <div className={styles.projectCard}>
    <h2>Project not found</h2>
    </div>
    </>
    
  }
  

  const project = projectsNum[id - 1];

  return (
    <div className={styles.projectCard}>
      <div className={styles.header}>
        
      <p>Developed on {project.date}</p>
      <div className={styles.headerMid}></div>
      </div>
      <div className={styles.content}>
    <h2 className={styles.title}>{project.title}</h2>
    <div>
      <div className={styles.headerBarline}></div>
      <div className={styles.greyText}>{project.genre}</div>
      
      <div className={styles.headerBarline}></div>
      <ImageVideoSlide project={project}/>
      </div>
      <h2><span className={styles.span}>Title: </span>{project.title}</h2>
      <h2><span className={styles.span}>Development Date: </span>{project.date}</h2>
      <h2><span className={styles.span}>Release Date: </span>{project.relDate}</h2>
      <h2><span className={styles.span}>Language: </span>{project.language}</h2>
      <h2><span className={styles.span}>File Size: </span>{project.fileSize}</h2>
      <h2><span className={styles.span}>Mirrors/Links: </span>{project.mirrors}</h2>
      </div>
      <ContentsCard project={project}/>
      
    </div>
    
  );
}
