import {
  Box,
  Button,
  Modal,
  ModalContent,
  Text,
  useDisclosure,
  VStack,
} from "@chakra-ui/react";
import Image from "next/image";
import Title from "../project/title";
import Layout from "./main";
import netflixImg from "../../public/images/netflix/login.png";
import Section from "../section";
import useModalImage from "../../hooks/useModalImage";
import Head from 'next/head'

export default function ProjectLayout({ children, meta }) {
  
  const { image, isOpen, onClose } = useModalImage();
  return (
    <>
      <Head>
        <title>{meta.title}</title>
      </Head>
      <Modal
        isOpen={isOpen}
        onClose={onClose}
        isCentered={true}
        closeOnOverlayClick={true}
      >
        <ModalContent
          bg="transparent"
          minWidth={{ sm: "2xl", md: "4xl" }}
          overflow="hidden"
          borderRadius="xl"
        >
          <Box position="relative">
            {image && (
              <Image
                src={image}
                layout="responsive"
              />
            )}
          </Box>
        </ModalContent>
      </Modal>
      <Layout>
        <Section delay={0.6}>
          <VStack spacing={8} mt="4" alignItems="left">
            <Title title={meta.title} link={meta.link} />
            <Box pb="8">{children}</Box>
          </VStack>
        </Section>
      </Layout>
    </>
  );
}
