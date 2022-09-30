import { StaticImageData } from "next/image";

export interface PostItem {
  id: number;
  title: string;
  thumbnail: StaticImageData;
}
