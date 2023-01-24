import { Box, LinkBox, useDisclosure } from "@chakra-ui/react";
import Image from "next/image";
import { Carousel } from "react-responsive-carousel";
import useModalImage from "../hooks/useModalImage";

export default function ImageGallery({ images }) {
  const { setImage, image, isOpen, onOpen } = useModalImage();

  if (!images) {
    return;
  }

  return (
    <LinkBox cursor="pointer">
      <Carousel onClickItem={(index, item) => {
        // @ts-ignore
          setImage(item.props.children.props.src);
          onOpen()
      }}>
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
    </LinkBox>
  );
}
