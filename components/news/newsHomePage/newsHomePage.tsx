import NewsItem from "../newsItem/newsItem";
import new1 from "@/assets/image/new1.png";
import new2 from "@/assets/image/news2.jpg";
import { Button } from "react-bootstrap";
import styles from "./NewsHomePage.module.scss";
import { useRouter } from "next/router";
import { StaticImageData } from "next/image";

export interface PostItem {
  id: number;
  title: string;
  thumbnail: StaticImageData;
}

const NewsHomePage = () => {
  const router = useRouter();
  const listPost: PostItem[] = [
    {
      id: 1,
      title: "KHÁCH HÀNG NÓI NHƯ THẾ NÀO VỀ TINH CHẤT TRỊ VIÊM NANG LÔNG LIGI",
      thumbnail: new1,
    },
    {
      id: 2,
      title: "KHÁCH HÀNG NÓI NHƯ THẾ NÀO VỀ TINH CHẤT TRỊ VIÊM NANG LÔNG LIGI",
      thumbnail: new2,
    },
    {
      id: 3,
      title: "KHÁCH HÀNG NÓI NHƯ THẾ NÀO VỀ TINH CHẤT TRỊ VIÊM NANG LÔNG LIGI",
      thumbnail: new1,
    }
  ];
  const getListPostComponent = () => {
    return listPost.map((item) => (
      <NewsItem
        key={item.id}
        title={item.title}
        thumbnail={item.thumbnail}
      ></NewsItem>
    ));
  };
  const listPostComponent = getListPostComponent();
  const toNewsPage = () => {
    router.push("/news");
  };
  return (
    <div>
      <div className={`row d-flex justify-content-center h1`}>
        TIN TỨC - SỰ KIỆN
      </div>
      <div className={`row p-2 p-md-5`}>{listPostComponent}</div>
      <div className={`row d-flex justify-content-center pb-5`}>
        <Button
          onClick={toNewsPage}
          variant={`secondary`}
          className={`col-3 ${styles.listNewsMore}`}
        >
          Xem thêm
        </Button>
      </div>
    </div>
  );
};
export default NewsHomePage;
