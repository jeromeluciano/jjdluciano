import { useDisclosure } from "@chakra-ui/react";
import { useContext } from "react";
import { ImageContext } from "../contexts/image-context";

export default () => {
  const { image, setImage, isOpen, onClose, onOpen } = useContext(ImageContext);
  // const { isOpen, onOpen, onClose, onToggle } = useDisclosure();

  return {
    image,
    setImage,
    isOpen,
    onClose,
    onOpen
    // isOpen,
    // onOpen,
    // onClose,
    // onToggle,
  };
};
