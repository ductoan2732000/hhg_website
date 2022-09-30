import NewsItem from "~/components/news/newsItem";
import new1 from "@/assets/image/news/new1.png";
import new2 from "@/assets/image/news/news2.jpg";
import { PostItem } from "@/model/news";
import { Button } from "react-bootstrap";
import styles from "@/styles/news.module.scss";
import { useRouter } from "next/router";
const NewsContent: React.FC<{
  isHome: boolean;
}> = (props) => {
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
    },
    {
      id: 4,
      title: "KHÁCH HÀNG NÓI NHƯ THẾ NÀO VỀ TINH CHẤT TRỊ VIÊM NANG LÔNG LIGI",
      thumbnail: new1,
    },
    {
      id: 5,
      title: "KHÁCH HÀNG NÓI NHƯ THẾ NÀO VỀ TINH CHẤT TRỊ VIÊM NANG LÔNG LIGI",
      thumbnail: new1,
    },
    {
      id: 6,
      title: "KHÁCH HÀNG NÓI NHƯ THẾ NÀO VỀ TINH CHẤT TRỊ VIÊM NANG LÔNG LIGI",
      thumbnail: new1,
    },
    {
      id: 7,
      title: "KHÁCH HÀNG NÓI NHƯ THẾ NÀO VỀ TINH CHẤT TRỊ VIÊM NANG LÔNG LIGI",
      thumbnail: new1,
    },
  ];
  const getListPostComponent = () => {
    const lsPost = props.isHome
      ? listPost.filter((item, index) => index < 3)
      : listPost;
    return lsPost.map((item) => (
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
      {props.isHome ? (
        <div className={`row d-flex justify-content-center pb-5`}>
          <Button
            onClick={toNewsPage}
            variant={`secondary`}
            className={`col-3 ${styles.listNewsMore}`}
          >
            Xem thêm
          </Button>
        </div>
      ) : null}
    </div>
  );
};
export default NewsContent;
