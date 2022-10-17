import { Box, GridItem, LinkBox, Text } from "@chakra-ui/react";
import Image from "next/image";
import useTextColor from "../../hooks/useTextColor";

export default function ProjectItem({ thumbnail, title, link, description }) {
  const textColor = useTextColor();
  return (
    <GridItem>
      <Box w="100%">
        <LinkBox cursor="pointer" display={"flex"} flexDirection="column">
          <a href={link}>
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
              <Text color={textColor} fontSize="smaller">
                {title}
              </Text>
              <Text color={textColor} fontSize="x-small">
                {description}
              </Text>
            </Box>
          </a>
        </LinkBox>
      </Box>
    </GridItem>
  );
}
