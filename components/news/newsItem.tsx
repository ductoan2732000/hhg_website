import Image, { StaticImageData } from "next/image";
import styles from "@/styles/news.module.scss";
import { ArrowRight } from "react-feather";
const NewsItem: React.FC<{ title: string; thumbnail: StaticImageData }> = (
  props
) => {
  const { title, thumbnail } = props;
  return (
    <div className={`col-6 col-sm-6 col-md-4 col-lg-4 mb-5 ${styles.newPost}`}>
      <Image src={thumbnail} alt="logo hhg" />
      <div>
        <b>{title}</b>
      </div>
      <div className={`d-flex`}>
        <div>Xem thêm</div>
        <ArrowRight></ArrowRight>
      </div>
    </div>
  );
};
export default NewsItem;
