import { StaticImageData } from "next/dist/client/image";
import React, { createContext, useState } from "react";

interface ImageState {
  image: StaticImageData | null;
  setImage: (image: StaticImageData) => void;
  isOpen: boolean;
  onClose: () => void,
  onOpen: () => void
}

export const ImageContext = createContext<ImageState>({
  image: null,
  isOpen: false,
  setImage: (image: StaticImageData) => {},
  onClose: () => {},
  onOpen: () => {}
});

export const ImageModalProvider = ({ children }: { children: React.ReactNode }) => {
  const [image, setImage] = useState<StaticImageData | null>(null);
  const [isOpen, setIsOpen] = useState(false);

  const onClose = () => {
    setIsOpen(false);
  }

  const onOpen = () => {
    setIsOpen(true);
  }
  return (
    <ImageContext.Provider value={{ 
      image,
      isOpen,
      setImage,
      onOpen,
      onClose
     }}>
      {children}
    </ImageContext.Provider>
  )
}