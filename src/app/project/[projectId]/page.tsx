
import { Metadata } from "next";
import styles from './Project.module.css';
import ImageVideoSlide from "../../components/ImageVideoSlide/ImageVideoSlide";
import ContentsCard from "../../components/ContentsCard/ContentsCard";
import { getProjectById } from "../project";

type Props = {
  params: Promise<{
    projectId: string;
  }>;
};

export const generateMetadata = async ({ params }: Props): Promise<Metadata> => {
  const { projectId } = await params;
  const project = getProjectById(Number(projectId));

  if (!project) {
    return { title: "Project not found" };
  }

  return { title: `${project.title} by Andrei` };
};

export default async function ProductId({ params }: Props) {
  const { projectId } = await params;
  const project = getProjectById(Number(projectId));

  if (!project) {
    return (
      <div className={styles.projectCard}>
        <h2>Project not found</h2>
      </div>
    );
  }

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
          <ImageVideoSlide project={project} />
        </div>
        <h2><span className={styles.span}>Title: </span>{project.title}</h2>
        <h2><span className={styles.span}>Development Date: </span>{project.date}</h2>
        <h2><span className={styles.span}>Release Date: </span>{project.relDate}</h2>
        <h2><span className={styles.span}>Language: </span>{project.language}</h2>
        <h2><span className={styles.span}>Project File Size: </span>{project.fileSize}</h2>
        <h2><span className={styles.span}>Mirrors/Links: </span>{project.mirrors}</h2>
      </div>
      <ContentsCard project={project} />
    </div>
  );
}
