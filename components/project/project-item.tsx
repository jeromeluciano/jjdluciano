import { Box, GridItem, LinkBox, Text } from "@chakra-ui/react";
import Image from "next/image";
import Link from "next/link";
import useTextColor from "../../hooks/useTextColor";

export default function ProjectItem({ thumbnail, title, link, description }) {
  const textColor = useTextColor();
  return (
    <GridItem _hover={{ transform: "scale(1.1)", transition: "0.2s" }}>
      <Box w="100%">
        <LinkBox cursor="pointer" display={"flex"} flexDirection="column">
          <Link href={link}>
            <Box>
              <Box flex={2}>
                <Image
                  src={thumbnail}
                  alt={title}
                  style={{
                    borderRadius: "15px",
                    objectFit: "contain",
                    maxHeight: "120px",
                  }}
                />
              </Box>

              <Box textAlign="center">
                <Text color={textColor} fontSize="sm">
                  {title}
                </Text>
                <Text color={textColor} fontSize="xs">
                  {description}
                </Text>
              </Box>
            </Box>
          </Link>
        </LinkBox>
      </Box>
    </GridItem>
  );
}
