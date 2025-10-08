
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

const istritpayterVideo = "https://kgmutreakokomnvevvbm.supabase.co/storage/v1/object/public/videos/istritpayterVideo.mp4";
const psychesletterVideo = "https://kgmutreakokomnvevvbm.supabase.co/storage/v1/object/public/videos/psychesletterVideo.mp4";
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
    description2: "This is a project called Psyche's Letter. It is an Educational game developed using Action Script 2.0. The game was developed in 22 days and was released on August 2023. The file size of the game is 127 MB. The game can be played on github.",
    description1: "Psyche's Letter is an educational game that aims to teach players about the mythological story of Psyche and Eros. The game is set in a beautifully designed world where players take on the role of Psyche."
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
    description2: "This is a project called Istrit Payter. It is a Web-based/Mobile game developed using Html, Css, and Javascript. The game was developed in 23 days and is set to be released soon. The file size of the game is 145 MB. The game can be played on itch.io and github.",
    description1: "Istrit Payter is a web-based/mobile game that aims to provide players with an engaging and interactive experience. The game is set in a vibrant and colorful world where players take on the role of a character who must navigate through various challenges and obstacles to achieve their goals. The game features intuitive controls, stunning graphics, and an immersive storyline that will keep players hooked from start to finish.",
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
    description1: "This is a project called Game Website with API. It is a game website developed using various web technologies. The game was developed in 3 days and was released in 2020. The file size of the game is not specified. The game can be found on various mirrors/links.",
    description2: "The Game Website with API project is a web-based platform that allows users to access and play various games through an API. The website features a user-friendly interface, allowing players to easily navigate and find their favorite games. The API integration enables seamless communication between the website and the game servers, ensuring a smooth gaming experience for users.",
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
    description1: "This is a project called Next Js Project. It is a web application developed using Next.js framework. The game was developed in 5 days and was released in 2020. The file size of the game is not specified. The game can be found on various mirrors/links.",
    description2: "The Next Js Project is a modern web application that leverages the power of the Next.js framework to deliver a fast and responsive user experience. The project features server-side rendering, static site generation, and API routes, allowing for seamless integration with backend services. The application is designed with a focus on performance, scalability, and maintainability, making it an ideal choice for building dynamic web applications.",
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
    description1: "This is a project called Sample Project. It is a sample game developed using various technologies. The game was developed in 5 days and was released in 2020. The file size of the game is not specified. The game can be found on various mirrors/links.",
    description2: "The Sample Project is a demonstration of various game development techniques and concepts. The project showcases different gameplay mechanics, graphics, and sound design elements to provide an engaging experience for players. The game is designed to be easily customizable and extendable, allowing developers to build upon the existing framework and create their own unique games.",
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
    description1: "This is a project called Sample Project 2. It is a sample game developed using various technologies. The game was developed in 5 days and was released in 2020. The file size of the game is not specified. The game can be found on various mirrors/links.",
    description2: "The Sample Project 2 is a continuation of the original Sample Project, featuring new gameplay mechanics, improved graphics, and enhanced sound design elements. The project aims to provide players with an even more engaging and immersive experience, while also showcasing the latest advancements in game development techniques. The game is designed to be easily customizable and extendable, allowing developers to build upon the existing framework and create their own unique games.",
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
