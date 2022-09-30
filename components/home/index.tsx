import { Carousel } from "react-bootstrap";
import Image from "next/image";
import ifff from "@/assets/image/image1.jpg";
const HomeContent = () => {
  return (
    <div>
      <Carousel>
        <Carousel.Item>
          <Image src={ifff} className={"w-100"} alt="Picture of the author" />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <Image src={ifff} className={"w-100"} alt="Picture of the author" />

          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <Image src={ifff} alt="Picture of the author" className={"w-100"} />

          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default HomeContent;
