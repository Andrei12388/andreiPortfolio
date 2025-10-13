
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

const reactProject = "/images/reactProject.PNG";
const react1 = "/images/react1.PNG";
const react2 = "/images/react2.PNG";
const react3 = "/images/react3.PNG";
const react4 = "/images/react4.PNG";

const istritpayterVideo = "https://kgmutreakokomnvevvbm.supabase.co/storage/v1/object/public/videos/istritpayterVideo.mp4";
const psychesletterVideo = "https://kgmutreakokomnvevvbm.supabase.co/storage/v1/object/public/videos/psychesletterVideo.mp4";
const reactVideo = "https://kgmutreakokomnvevvbm.supabase.co/storage/v1/object/public/videos/reactVideo.mp4";

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
    installnote1: "Download the game and extract the contents of the rar file to a folder on your computer.",
    installnote2: "Install first the Adobe Flash Professional 8 for you to have the adobe flash player.",
    installnote3: "Extract the psyches letter game.rar contents.",
    installnote4: "To run the game, open the Psyche's Letter.swf inside the Psyche's letter folder.",
    installnote5: "Controls: Use the mouse to navigate through the game. Arrow keys for movement and space for jump. Click on objects and options to interact with them. Follow the on-screen instructions to progress through the game.",
   
    link1: "https://www.mediafire.com/file/w5vtrdjx1q0f44f/Psyche%2527s_Letter_Game_2023.rar/file",
    link2: "https://www.4shared.com/rar/aekKiJPmjq/Psyches_Letter_Game_2023.html?",
    link3: "https://github.com/Andrei12388/psychesletter2023",
    linknote: "Note: Link 1 - Mediafire (Game), Link 2 - 4shared (Game), Link 3 - Github (Source Code)",
    sysreq1: "OS: Windows 7/8/10 (64-bit)",
    sysreq2: "Application: Adobe Flash Player",
    sysreq3: "Memory: 2 GB RAM",
    sysreq4: "Storage: 150 MB available space",
    description1: "Coding a Game Without Any Experience in Coding.",
    description2: "Psyches Letter (2023) — Gamification Project",
    description3: "In 2023, during our Gamification subject, my group and I were tasked to create an educational game. At the time, I had absolutely no background in coding—I wasn’t an IT student, nor had I taken any programming courses. Despite that, this project became the turning point that ignited my passion for learning how to code.",
    description4: "Our instructor gave us only two weeks to complete the game, and the project was expected to be made simply through PowerPoint with hyperlinks. However, I remembered my Animation strand back in senior high school, where we used Adobe Flash for creating short animations. I also recalled that many classic online games, such as those found on Y8 and Friv, were built with the same software.",
    description5: "Driven by curiosity and a long-held dream—since I was seven years old—to become a programmer, I decided to take a risk. I proposed to my group that we use Adobe Flash instead of PowerPoint to create our game.",
    description6: "At that point, I had no formal knowledge of programming. I couldn’t rely on ChatGPT for help since I was using ActionScript 2.0, an old and mostly outdated language that modern AI tools struggle to interpret. So, I turned to YouTube tutorials, teaching myself the fundamentals of game development step by step.",
    description7: "The process was both challenging and rewarding. Despite the tight deadline and our lack of experience, we managed to complete the game successfully—without any major conflicts, just a lot of teamwork and late nights. Looking back, it was an incredible learning experience that taught me more than any textbook could.",
    description8: "Lessons Learned:",
    description9: "This project taught me that anything can be learned with willingness, passion, and courage. Taking risks is often the key to growth. If we had simply followed the easy route—making a PowerPoint game instead of building something from scratch—I might never have discovered my love for coding.",
    description10: "Team Members: John Reniel Llavore, Kenneth Gascon Jermice, William Capales Bantilan, Levi Troy Selga, Gabriel Ordaniel, James Mantes, Vincent Lumpas",
    description11: "To my teammates—thank you for being part of this milestone. You were my stepping stones toward becoming who I aspire to be: a programmer. The journey ahead may still be long, but I believe that with perseverance and faith, we’ll all achieve our dreams. ❤️",
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
    relDate: "COMING SOON",
    fileSize: "145 MB",
    mirrors: "itch.io, github",
    video: istritpayterVideo,
    image1: istritpayter1,
    image2: istritpayter2,
    image3: istritpayter3,
    image4: istritpayter4,
    installnote1: "The game is currently in development and will be available soon on itch.io and GitHub.",
    sysreq1: "Platforms: Mobile (Apk) and PC (Web Browser)", 
    sysreq2: "OS: Windows 7/8/10 (64-bit) or Android 5.0+ OS",
    sysreq3: "Memory: 1 GB RAM",
    sysreq4: "Storage: 100 MB available space",

    link1: "https://github.com/Andrei12388/istritpayter",
    linknote: "Note: Link 1 - Github (Source Code)",

    description1: "Meme to Game.",
    description2: "Istrit Payter (2025) — Web/Mobile Game Project",
    description3: "This was my attempt to create the infamous Istrit Payter meme by IJI into a game. The idea starts when I was browsing through Facebook last month of July (2025) and stumbled upon a hilarious meme about a character named Istrit Payter. The meme featured Malupiton who fights other pinoy meme characters with super powers, accompanied by humorous captions that poked fun at various aspects of Pinoy culture.",
    description4: "While I am learning javascript and making sample games with that language, I had thought it would be better to use the language to make the meme into a game. So without any planning, I just go with the flow making the game developing the fighters, stage, ui, controls handlers, and much more logic in pure javascript and from scratch.",
    description5: "Tools used in making the game:",
    description6: "1. Visual Studio Code - for coding the game logic and structure using HTML, CSS, and JavaScript.",
    description7: "2. Adobe Photoshop/Graphics Gale - for creating and editing the game graphics, including characters, sprites, backgrounds, and UI elements.",
    description8: "3. Audacity - for editing sound effects and background music for the game.",
    description9: "4. Browser Developer Tools - for testing and debugging the game during development like console logging and finding the appropriate key values for controls.",
    description10: "Funny how it was stored first in my telegram because I don't have github and I don't know how to use it back then. But now I have a github account and I uploaded the updated source code there.",
    description11: "You can check the game and source code on the links section. Thank you for those who support me in making this game. Special thanks to sir IJI for making the original meme and inspiring me to make this game.❤️",
  },
  {
    projectID: 3,
    title: "React Game Website",
    duration: "3 days",
    active: false,
    language: "React Framework/Javascript",
    genre: "Website",
    relDate: "October 13 2025",
    fileSize: "56.2 MB",
    mirrors: "Web Link/Github",
    sysreq2: "OS: Windows 7/8/10 (64-bit) or Android 5.0+ OS",
    installnote1: "No installation. Click the website link to view the project.",
    linknote: "Note: Link 1 - Website, Link 2 - Github Repo",
    link1: "https://reactgameapp-eight.vercel.app/",
    link2: "https://github.com/Andrei12388/reactgameapp",
    video: reactVideo,
    image: reactProject,
    image1: react1,
    image2: react2,
    image3: react3,
    image4: react4,
    date: "2025",
    description1: "This is a sample of my react website which shows functionalities of a react on useStates, useEffects, fetching data from an API with my own data., etc",
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
      <h2><span className={styles.span}>Project File Size: </span>{project.fileSize}</h2>
      <h2><span className={styles.span}>Mirrors/Links: </span>{project.mirrors}</h2>
      </div>
      <ContentsCard project={project}/>
      
    </div>
    
  );
}
