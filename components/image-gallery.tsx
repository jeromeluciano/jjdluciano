import { Box } from "@chakra-ui/react";
import Image from "next/image";
import { Carousel } from "react-responsive-carousel";

export default function ImageGallery({ images }) {
  if (!images) {
    return;
  }

  return (
    <Carousel>
      {images.map((image) => (
        <Box flex={1} key={image}>
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
