import { StaticImageData } from "next/image";

export type Project = {
 projectID: number;
  title: string;
  duration: string;
  active: boolean;
  language: string;
  image: string | StaticImageData;
  image1: string | StaticImageData;
  image2: string | StaticImageData;
  image3: string | StaticImageData;
  image4: string | StaticImageData;
};
