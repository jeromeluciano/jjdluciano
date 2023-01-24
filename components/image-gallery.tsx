import { Box } from "@chakra-ui/react";
import Image from "next/image";
import { Carousel } from "react-responsive-carousel";
import netflixHomeImg from "../public/images/netflix/home.png";

export default function ImageGallery({ images }) {
  return (
    <Carousel>
      {images.map((image) => (
        <Box flex={1}>
          <Image
            src={image}
            layout={"responsive"}
            style={{
              borderRadius: "15px",
            }}
          />
        </Box>
      ))}
    </Carousel>
  );
}
