import { Box, Flex, Text } from "@chakra-ui/react"
import Link from "next/link";
import WritingFeaturedCard from "./writing-featured-card"

interface WritingItemProps {
  link: string;
  title: string;
  description: string;
  date: string;
}

export default function WritingItem({ link, title, description, date }: WritingItemProps) {
  return <WritingFeaturedCard>
    <Box py={6} px={6} className="cursor-pointer">
      <Link href={link}>
        <Flex direction="column" gap={4}>
          <Box>
            <Text fontSize="xl" noOfLines={1} className="text-yellow-50/90">{title}</Text>
            <Text fontSize="md" className="text-yellow-50/50">{date}</Text>
          </Box>
          <Box>
            <Text noOfLines={1} className="text-yellow-50/70">{description}</Text>
          </Box>
        </Flex>
      </Link>
    </Box>
  </WritingFeaturedCard>
}
