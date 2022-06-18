import { Image } from "@chakra-ui/react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

// If you want to use your own Selectors look up the Advancaed Story book examples
const ImageSlider = ({ slides }) => {
  return (
    <Carousel showThumbs={false} infiniteLoop>
      {slides.map((slide) => {
        return <Image style={{"borderRadius":"10px"}} src={slide.image} height="auto" width="800px" />;
      })}
    </Carousel>
  );
};

export default ImageSlider;