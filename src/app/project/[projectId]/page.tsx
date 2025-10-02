import { Metadata } from "next";

type Props = {
  params: Promise<{
    projectId: string; // ✅ still a string, but wrapped in Promise
  }>;
};

export const generateMetadata = async ({ params }: Props): Promise<Metadata> => {
  const { projectId } = await params; // 👈 await the promise
  const id = Number(projectId);

  if (!Number.isInteger(id)) {
    return { title: "Project not found" };
  }

  const title = await new Promise<string>((resolve) => {
    setTimeout(() => resolve(`Techno ${id}`), 100);
  });

  return { title: `Product ${title}` };
};

export default async function ProductId({ params }: Props) {
  const { projectId } = await params; // 👈 await the promise
  const id = Number(projectId);

  const projectsNum = [
    { projectID: 1, title: "Psyche's Letter", duration: "22 days", active: false, language: "Action Script 2.0", image: null },
    { projectID: 2, title: "Istrit Payter", duration: "12 days", active: false, language: "Html, Css, and Javascript", image: null },
    { projectID: 3, title: "Game Website with API", duration: "3 days", active: false, image: null },
    { projectID: 4, title: "Next Js Project", duration: "5 days", active: false, image: null },
    { projectID: 5, title: "Sample Project", duration: "5 days", active: false, image: null },
    { projectID: 6, title: "Sample Project 2", duration: "5 days", active: false, image: null },
  ];

  if (!Number.isInteger(id) || id < 1 || id > projectsNum.length) {
    return <h2>Project not found</h2>;
  }

  const project = projectsNum[id - 1];

  return (
    <div>
      <h2>Here is your Project ID: {id}</h2>
      <h2>Here is your Project Name: {project.title}</h2>
      {project.language && <p>Language: {project.language}</p>}
    </div>
  );
}
